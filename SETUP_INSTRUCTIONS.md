# Zeinglow Database & Admin Setup Instructions

## Prerequisites
- PostgreSQL database (local or hosted)
- Node.js and npm installed

## 1. Environment Setup

Create a `.env` file in your project root with the following variables:

```env
# Database - Replace with your PostgreSQL connection string
DATABASE_URL="postgresql://username:password@localhost:5432/zeinglow_db?schema=public"

# NextAuth Configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here-generate-a-random-string"

# Admin Credentials
ADMIN_EMAIL="admin@zeinglow.com"
ADMIN_PASSWORD="admin123"
```

### Generate NEXTAUTH_SECRET
Run this command to generate a secure secret:
```bash
openssl rand -base64 32
```

## 2. Database Setup

Run the following commands to set up your database:

```bash
# Generate Prisma client
npm run db:generate

# Run database migrations
npm run db:migrate

# Seed the admin user
npm run db:seed

# Or run all at once
npm run db:setup
```

## 3. Start the Development Server

```bash
npm run dev
```

## 4. Access the Admin Dashboard

1. Go to `http://localhost:3000/admin/login`
2. Use these credentials:
   - Email: `admin@zeinglow.com`
   - Password: `admin123`

## 5. Test the Complete Flow

1. **Place an Order**: Go to `http://localhost:3000/checkout` and fill out the form
2. **View Order**: Login to admin dashboard at `/admin/dashboard` to see the order
3. **Update Status**: Click "Update" on any order to change its status

## Features Implemented

### Customer Features:
- ✅ Updated hero section with emotional bullet points
- ✅ Avatar images in social proof sections
- ✅ COD checkout form that saves to database
- ✅ Order confirmation with database-generated order number

### Admin Features:
- ✅ Secure admin login with NextAuth
- ✅ Dashboard with order statistics
- ✅ Complete orders table with filtering
- ✅ Order status management
- ✅ Real-time order updates

### Database Schema:
- ✅ Users table (for admin authentication)
- ✅ Orders table (with all customer and product data)
- ✅ NextAuth session management
- ✅ Order status tracking (PENDING, CONFIRMED, SHIPPED, DELIVERED, CANCELLED)

## Database Schema Overview

### Orders Table
- Customer information (name, email, phone)
- Product details (bundle type, price, quantity)
- Order tracking (status, order number, timestamps)
- Admin notes

### Users Table
- Admin user management
- Role-based access control
- NextAuth integration

## Troubleshooting

### Database Connection Issues
- Ensure PostgreSQL is running
- Verify DATABASE_URL is correct
- Check database permissions

### Admin Login Issues
- Verify ADMIN_EMAIL and ADMIN_PASSWORD in .env
- Run `npm run db:seed` to create admin user
- Check that user exists in database

### Missing Dependencies
If you get import errors, run:
```bash
npm install @prisma/client next-auth @next-auth/prisma-adapter bcryptjs tsx
```

## Production Deployment

1. Set up PostgreSQL database (Railway, Supabase, etc.)
2. Update DATABASE_URL in production environment
3. Set secure NEXTAUTH_SECRET
4. Run migrations: `npx prisma migrate deploy`
5. Seed admin user: `npm run db:seed`

## Security Notes

- Change default admin password in production
- Use environment variables for all secrets
- Enable HTTPS in production
- Consider implementing proper password hashing for additional admin users
