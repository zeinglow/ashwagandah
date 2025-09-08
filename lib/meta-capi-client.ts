// Client-side utility for sending events to Meta CAPI
interface UserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  fbc?: string; // Facebook click ID from URL parameter
  fbp?: string; // Facebook browser ID from cookie
}

interface CustomData {
  currency?: string;
  value?: number;
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  contents?: Array<{
    id: string;
    quantity: number;
    item_price: number;
  }>;
}

// Generate unique event ID for deduplication between Pixel and CAPI
function generateEventId(): string {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}

// Get Facebook click ID from URL parameters
function getFacebookClickId(): string | undefined {
  if (typeof window === 'undefined') return undefined;
  
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('fbclid') || undefined;
}

// Get Facebook browser ID from cookie
function getFacebookBrowserId(): string | undefined {
  if (typeof window === 'undefined') return undefined;
  
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === '_fbp') {
      return value;
    }
  }
  return undefined;
}

// Enhanced user data with Facebook IDs
function getEnhancedUserData(userData: UserData): UserData {
  return {
    ...userData,
    fbc: userData.fbc || getFacebookClickId(),
    fbp: userData.fbp || getFacebookBrowserId(),
  };
}

export async function sendMetaCAPIEvent(
  eventName: string,
  userData: UserData = {},
  customData: CustomData = {},
  eventSourceUrl?: string
): Promise<boolean> {
  try {
    // Generate unique event ID for deduplication
    const eventId = generateEventId();
    
    // Send to pixel with event ID for deduplication
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, customData, { eventID: eventId });
    }

    // Send to CAPI
    const response = await fetch('/api/meta-capi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        userData: getEnhancedUserData(userData),
        customData,
        eventId,
        eventSourceUrl: eventSourceUrl || window.location.href,
      }),
    });

    if (!response.ok) {
      console.error('Meta CAPI client error:', response.status, await response.text());
      return false;
    }

    const result = await response.json();
    console.log('Meta CAPI event sent:', result);
    return true;

  } catch (error) {
    console.error('Meta CAPI client request failed:', error);
    return false;
  }
}

// Specific tracking functions
export const MetaCAPI = {
  trackPurchase: (userData: UserData, value: number, currency: string = 'AED') => {
    return sendMetaCAPIEvent('Purchase', userData, { value, currency });
  },

  trackInitiateCheckout: (userData: UserData, value?: number, currency: string = 'AED') => {
    return sendMetaCAPIEvent('InitiateCheckout', userData, { value, currency });
  },

  trackViewContent: (userData: UserData = {}, contentName?: string, contentCategory?: string) => {
    return sendMetaCAPIEvent('ViewContent', userData, { 
      content_name: contentName,
      content_category: contentCategory 
    });
  },

  trackAddToCart: (userData: UserData = {}, value: number, currency: string = 'AED', contentName?: string) => {
    return sendMetaCAPIEvent('AddToCart', userData, { 
      value, 
      currency,
      content_name: contentName,
      content_category: 'Health Supplements'
    });
  },
};
