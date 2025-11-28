import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { sendTestNotification } from '@/lib/notifications'

// POST - Send test notification (admin only)
export async function POST() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const success = await sendTestNotification()
    
    if (success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Test notification sent! Check your ntfy app.' 
      })
    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'Failed to send notification' 
      }, { status: 500 })
    }
  } catch (error) {
    console.error('Error sending test notification:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

