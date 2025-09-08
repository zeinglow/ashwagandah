import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    // Check if admin user already exists
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@zeinglow.com'
    
    const existingUser = await prisma.user.findUnique({
      where: { email: adminEmail }
    })

    if (!existingUser) {
      await prisma.user.create({
        data: {
          email: adminEmail,
          name: 'Admin',
          role: 'ADMIN',
        }
      })
      console.log('✅ Admin user created successfully')
    } else {
      console.log('ℹ️ Admin user already exists')
    }
  } catch (error) {
    console.error('❌ Error creating admin user:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
