import crypto from 'crypto';

interface UserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  clientIpAddress?: string;
  clientUserAgent?: string;
  fbc?: string; // Facebook click ID
  fbp?: string; // Facebook browser ID
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

interface MetaEvent {
  event_name: string;
  event_time: number;
  action_source: 'website' | 'email' | 'app' | 'phone_call' | 'chat' | 'physical_store' | 'system_generated' | 'other';
  event_source_url?: string;
  user_data: UserData;
  custom_data?: CustomData;
  event_id?: string; // For deduplication with pixel
}

// Hash function for PII data
function hashData(data: string): string {
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
}

// Normalize phone number (remove non-digits, keep country code)
function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, '');
}

export class MetaConversionAPI {
  private pixelId: string;
  private accessToken: string;
  private apiUrl: string;

  constructor() {
    this.pixelId = process.env.META_PIXEL_ID!;
    this.accessToken = process.env.META_CAPI_ACCESS_TOKEN!;
    this.apiUrl = `https://graph.facebook.com/v18.0/${this.pixelId}/events`;
  }

  // Send event to Meta Conversion API
  async sendEvent(event: MetaEvent): Promise<boolean> {
    try {
      // Hash PII data
      const hashedUserData: Record<string, string | string[]> = {};
      
      if (event.user_data.email) {
        hashedUserData.em = [hashData(event.user_data.email)];
      }
      
      if (event.user_data.phone) {
        const normalizedPhone = normalizePhone(event.user_data.phone);
        hashedUserData.ph = [hashData(normalizedPhone)];
      }
      
      if (event.user_data.firstName) {
        hashedUserData.fn = [hashData(event.user_data.firstName)];
      }
      
      if (event.user_data.lastName) {
        hashedUserData.ln = [hashData(event.user_data.lastName)];
      }

      // Keep non-PII data as is
      if (event.user_data.clientIpAddress) {
        hashedUserData.client_ip_address = event.user_data.clientIpAddress;
      }
      
      if (event.user_data.clientUserAgent) {
        hashedUserData.client_user_agent = event.user_data.clientUserAgent;
      }
      
      if (event.user_data.fbc) {
        hashedUserData.fbc = event.user_data.fbc;
      }
      
      if (event.user_data.fbp) {
        hashedUserData.fbp = event.user_data.fbp;
      }

      const payload = {
        data: [{
          event_name: event.event_name,
          event_time: event.event_time,
          action_source: event.action_source,
          event_source_url: event.event_source_url,
          user_data: hashedUserData,
          custom_data: event.custom_data,
          event_id: event.event_id, // For deduplication
        }]
      };

      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.accessToken}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Meta CAPI Error:', response.status, errorData);
        return false;
      }

      const result = await response.json();
      console.log('Meta CAPI Success:', result);
      return true;

    } catch (error) {
      console.error('Meta CAPI Request Failed:', error);
      return false;
    }
  }

  // Track Purchase event
  async trackPurchase(userData: UserData, customData: CustomData, eventId?: string): Promise<boolean> {
    return this.sendEvent({
      event_name: 'Purchase',
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: `${process.env.NEXTAUTH_URL}/checkout`,
      user_data: userData,
      custom_data: customData,
      event_id: eventId,
    });
  }

  // Track InitiateCheckout event
  async trackInitiateCheckout(userData: UserData, customData: CustomData, eventId?: string): Promise<boolean> {
    return this.sendEvent({
      event_name: 'InitiateCheckout',
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: `${process.env.NEXTAUTH_URL}/checkout`,
      user_data: userData,
      custom_data: customData,
      event_id: eventId,
    });
  }

  // Track ViewContent event
  async trackViewContent(userData: UserData, customData: CustomData, eventId?: string): Promise<boolean> {
    return this.sendEvent({
      event_name: 'ViewContent',
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: process.env.NEXTAUTH_URL,
      user_data: userData,
      custom_data: customData,
      event_id: eventId,
    });
  }

  // Track AddToCart event
  async trackAddToCart(userData: UserData, customData: CustomData, eventId?: string): Promise<boolean> {
    return this.sendEvent({
      event_name: 'AddToCart',
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: process.env.NEXTAUTH_URL,
      user_data: userData,
      custom_data: customData,
      event_id: eventId,
    });
  }
}
