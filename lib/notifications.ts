// Push notification service using ntfy.sh
// Free, open-source, works with iOS Shortcuts & Android apps

const NTFY_TOPIC = process.env.NTFY_TOPIC || 'zeinglow-orders';
const NTFY_SERVER = process.env.NTFY_SERVER || 'https://ntfy.sh';

interface OrderNotification {
  orderNumber: string;
  name: string;
  phone: string;
  bundleName: string;
  price: number;
}

export async function sendOrderNotification(order: OrderNotification): Promise<boolean> {
  try {
    const message = `🛒 New Order!\n\n` +
      `📦 Order: ${order.orderNumber}\n` +
      `👤 Customer: ${order.name}\n` +
      `📱 Phone: ${order.phone}\n` +
      `🎁 Bundle: ${order.bundleName}\n` +
      `💰 Amount: ${order.price} AED`;

    const response = await fetch(`${NTFY_SERVER}/${NTFY_TOPIC}`, {
      method: 'POST',
      headers: {
        'Title': '🎉 New ZeinGlow Order!',
        'Priority': 'high',
        'Tags': 'money_bag,shopping_cart',
        // Sound for iOS/Android
        'Actions': `view, Open Dashboard, ${process.env.NEXT_PUBLIC_APP_URL || 'https://zeinglow.ae'}/admin/dashboard`,
      },
      body: message,
    });

    if (!response.ok) {
      console.error('Failed to send notification:', response.status);
      return false;
    }

    console.log('Order notification sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending notification:', error);
    return false;
  }
}

// Test notification function
export async function sendTestNotification(): Promise<boolean> {
  try {
    const response = await fetch(`${NTFY_SERVER}/${NTFY_TOPIC}`, {
      method: 'POST',
      headers: {
        'Title': '🔔 Test Notification',
        'Priority': 'high',
        'Tags': 'white_check_mark',
      },
      body: 'This is a test notification from ZeinGlow. If you see this, notifications are working!',
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending test notification:', error);
    return false;
  }
}



