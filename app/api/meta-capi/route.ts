import { NextRequest, NextResponse } from 'next/server';
import { MetaConversionAPI } from '@/lib/meta-capi';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      eventName, 
      userData, 
      customData, 
      eventId,
      eventSourceUrl 
    } = body;

    // Validate required fields
    if (!eventName) {
      return NextResponse.json({ error: 'Event name is required' }, { status: 400 });
    }

    // Get client IP and User Agent from request headers
    const clientIpAddress = request.headers.get('x-forwarded-for') || 
                           request.headers.get('x-real-ip') || 
                           '127.0.0.1';
    
    const clientUserAgent = request.headers.get('user-agent') || '';

    // Enhanced user data with client info
    const enhancedUserData = {
      ...userData,
      clientIpAddress,
      clientUserAgent,
    };

    const metaAPI = new MetaConversionAPI();
    
    let success = false;

    // Route to appropriate tracking method
    switch (eventName) {
      case 'Purchase':
        success = await metaAPI.trackPurchase(enhancedUserData, customData, eventId);
        break;
      case 'InitiateCheckout':
        success = await metaAPI.trackInitiateCheckout(enhancedUserData, customData, eventId);
        break;
      case 'ViewContent':
        success = await metaAPI.trackViewContent(enhancedUserData, customData, eventId);
        break;
      case 'AddToCart':
        success = await metaAPI.trackAddToCart(enhancedUserData, customData, eventId);
        break;
      default:
        // Generic event sending
        success = await metaAPI.sendEvent({
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_source_url: eventSourceUrl || process.env.NEXTAUTH_URL,
          user_data: enhancedUserData,
          custom_data: customData,
          event_id: eventId,
        });
    }

    if (success) {
      return NextResponse.json({ success: true, message: 'Event sent successfully' });
    } else {
      return NextResponse.json({ error: 'Failed to send event' }, { status: 500 });
    }

  } catch (error) {
    console.error('Meta CAPI API Route Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
