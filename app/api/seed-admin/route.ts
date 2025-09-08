import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST() {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@zeinglow.com'
    
    // Check if admin user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: adminEmail }
    })

    if (existingUser) {
      return NextResponse.json({
        success: true,
        message: 'Admin user already exists',
        user: {
          id: existingUser.id,
          email: existingUser.email,
          role: existingUser.role,
          createdAt: existingUser.createdAt
        }
      })
    }

    // Create admin user
    const adminUser = await prisma.user.create({
      data: {
        email: adminEmail,
        name: 'Admin',
        role: 'ADMIN',
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Admin user created successfully',
      user: {
        id: adminUser.id,
        email: adminUser.email,
        role: adminUser.role,
        createdAt: adminUser.createdAt
      }
    })

  } catch (error) {
    console.error('Seed Admin Error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
