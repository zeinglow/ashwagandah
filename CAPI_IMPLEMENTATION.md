# Meta Conversion API (CAPI) Implementation

## Overview
This implementation provides server-side tracking via Meta Conversion API alongside client-side Meta Pixel tracking, ensuring data accuracy and compliance with iOS 14.5+ privacy changes.

## Key Features
- **Dual Tracking**: Both Pixel and CAPI events with deduplication
- **PII Hashing**: Automatic SHA-256 hashing of personally identifiable information
- **Event Deduplication**: Unique event IDs prevent duplicate counting
- **Enhanced Attribution**: Facebook click IDs and browser IDs for better attribution
- **IP & User Agent**: Server-side collection for improved match rates

## Configuration

### Environment Variables
```env
META_PIXEL_ID="2277468989325103"
META_CAPI_ACCESS_TOKEN="EAAPhNVZCFPN8BPR5bnOlW3d9t9nEJjAnJccp6qhYMGBmVJ93tq12ngcTFlBiYFZBalxnNtlUUbKQ1ONZCfARFwZAoOMN7vmVoNgpyf7CrUZCWC62onKck2pupHjOMk6PYqnVZBRHWc9solQYIlavC1bhFONcNLnZA5IuhkYaZA30WaRgJfuU1hqpfQnusGStmpgZC5AZDZD"
```

## Implementation Details

### 1. Server-Side Components

#### MetaConversionAPI Class (`lib/meta-capi.ts`)
- Handles all CAPI communication with Facebook
- Automatically hashes PII data (email, phone, names)
- Supports all standard e-commerce events
- Includes proper error handling and logging

#### API Route (`app/api/meta-capi/route.ts`)
- Receives events from client-side code
- Enhances events with server-side data (IP, User-Agent)
- Routes events to appropriate tracking methods
- Returns success/failure status

### 2. Client-Side Components

#### MetaCAPI Client (`lib/meta-capi-client.ts`)
- Simplified interface for sending events
- Automatically generates unique event IDs
- Extracts Facebook click/browser IDs from cookies/URL
- Handles both Pixel and CAPI sending with deduplication

## Event Tracking

### Events Implemented

1. **PageView** (Automatic)
   - Triggered on every page load via Pixel

2. **ViewContent**
   - Main page load
   - Includes product name and category

3. **AddToCart**
   - All CTA button clicks
   - Includes product value and currency

4. **InitiateCheckout**
   - Checkout page load
   - Includes estimated value

5. **Purchase**
   - Successful order completion
   - Includes actual purchase value and customer data

### Data Structure Example

```javascript
// Purchase event sent to CAPI
{
  event_name: "Purchase",
  event_time: 1757355830,
  action_source: "website",
  event_source_url: "https://zeinglow.com/checkout",
  user_data: {
    em: ["7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"], // Hashed email
    ph: ["1a2b3c4d5e6f..."], // Hashed phone
    fn: ["john_hash"], // Hashed first name
    ln: ["doe_hash"], // Hashed last name
    client_ip_address: "192.168.1.1",
    client_user_agent: "Mozilla/5.0...",
    fbc: "fb.1.1234567890.AbCdEfGhIj", // Facebook click ID
    fbp: "fb.1.1234567890.987654321" // Facebook browser ID
  },
  custom_data: {
    currency: "AED",
    value: 339.00
  },
  event_id: "1757355830_abc123def456" // For deduplication
}
```

## Deduplication Strategy

### How It Works
1. **Unique Event ID**: Generated for each event (`timestamp_randomstring`)
2. **Pixel Tracking**: Includes `eventID` parameter
3. **CAPI Tracking**: Uses same `event_id` field
4. **Facebook Processing**: Automatically deduplicates based on matching IDs

### Example Implementation
```javascript
const eventId = generateEventId();

// Send to Pixel with event ID
window.fbq('track', 'Purchase', { value: 339, currency: 'AED' }, { eventID: eventId });

// Send to CAPI with same event ID
await sendMetaCAPIEvent('Purchase', userData, customData, eventId);
```

## Attribution Enhancement

### Facebook IDs Collection
- **fbc (Click ID)**: Extracted from `fbclid` URL parameter
- **fbp (Browser ID)**: Extracted from `_fbp` cookie
- **Automatic Collection**: Handled by client-side utility

### Benefits
- **Improved Match Rates**: Better user identification
- **Attribution Windows**: Longer attribution periods
- **Cross-Device Tracking**: Enhanced user journey mapping

## Error Handling

### Client-Side
- Graceful fallback if CAPI fails
- Pixel events continue working independently
- Console logging for debugging

### Server-Side
- Comprehensive error logging
- Proper HTTP status codes
- Facebook API error handling

## Testing & Verification

### Facebook Events Manager
1. Go to Facebook Events Manager
2. Select your Pixel ID (2277468989325103)
3. Check "Test Events" tab for real-time events
4. Verify both Pixel and CAPI events appear

### Browser Testing
1. Install Facebook Pixel Helper extension
2. Visit your site and perform actions
3. Check console for event logs
4. Verify event deduplication in Events Manager

### Event Quality Score
- Monitor match rates in Events Manager
- Aim for >70% match rate for optimal performance
- Check attribution data quality

## Benefits of This Implementation

1. **iOS 14.5+ Compliance**: Server-side tracking bypasses browser restrictions
2. **Data Accuracy**: Reduced data loss from ad blockers/privacy settings
3. **Better Attribution**: Enhanced user matching and attribution windows
4. **ROAS Optimization**: More accurate conversion values for ad optimization
5. **Future-Proof**: Prepared for further privacy restrictions

## Maintenance

### Regular Checks
- Monitor CAPI access token expiration
- Check Events Manager for data quality
- Review error logs for failed events
- Update event parameters as needed

### Token Renewal
- CAPI access tokens may expire
- Generate new tokens in Facebook Business Manager
- Update environment variables when needed

## Troubleshooting

### Common Issues
1. **No CAPI Events**: Check access token and pixel ID
2. **Duplicate Events**: Verify event ID implementation
3. **Low Match Rates**: Ensure PII data is being sent
4. **API Errors**: Check Facebook API status and limits

### Debug Mode
- Enable detailed logging in development
- Use Facebook's Test Events feature
- Monitor network requests to CAPI endpoint
