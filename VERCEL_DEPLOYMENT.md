# Vercel Deployment Guide

## Prerequisites
- Neon PostgreSQL database (already configured)
- Vercel account
- GitHub repository (already set up)

## Environment Variables for Vercel

In your Vercel dashboard, add these environment variables:

### Database Configuration
```
DATABASE_URL=postgresql://neondb_owner:npg_Bc8UysYeo0Fw@ep-quiet-bird-adjuolnh-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require
DATABASE_URL_UNPOOLED=postgresql://neondb_owner:npg_Bc8UysYeo0Fw@ep-quiet-bird-adjuolnh.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require
```

### NextAuth Configuration
```
NEXTAUTH_URL=https://your-vercel-domain.vercel.app
NEXTAUTH_SECRET=cJWmgzrnc+BpvpRXY1fPK7pnzqePiZNAN9Iyca9XrYM=
```

### Meta Pixel & CAPI
```
META_PIXEL_ID=2277468989325103
META_CAPI_ACCESS_TOKEN=EAAPhNVZCFPN8BPR5bnOlW3d9t9nEJjAnJccp6qhYMGBmVJ93tq12ngcTFlBiYFZBalxnNtlUUbKQ1ONZCfARFwZAoOMN7vmVoNgpyf7CrUZCWC62onKck2pupHjOMk6PYqnVZBRHWc9solQYIlavC1bhFONcNLnZA5IuhkYaZA30WaRgJfuU1hqpfQnusGStmpgZC5AZDZD
```

### Admin Credentials
```
ADMIN_EMAIL=admin@zeinglow.com
ADMIN_PASSWORD=admin123
```

### Neon Auth (if using)
```
NEXT_PUBLIC_STACK_PROJECT_ID=15b68d7f-0177-445b-b01b-5ff030f3350b
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=pck_g4nkr9319nrhw5dcg71ecc2hjrpxcgss5rzmeam3hr4g8
STACK_SECRET_SERVER_KEY=ssk_ea5a06btbsdd6ap6k2ynm2sn3kch6ag96e3yk2wxv96m0
```

## Deployment Steps

### 1. Connect Repository
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository

### 2. Configure Build Settings
Vercel will automatically detect Next.js and use our configured build commands:
- **Build Command**: `npx prisma generate && next build` (from package.json)
- **Install Command**: `npm install` (automatic, runs postinstall script)
- **Output Directory**: `.next` (automatic)

The `postinstall` script will automatically run `npx prisma generate` after dependencies are installed.

### 3. Add Environment Variables
1. In the Vercel dashboard, go to your project
2. Navigate to "Settings" → "Environment Variables"
3. Add all the environment variables listed above
4. Make sure to set them for "Production", "Preview", and "Development"

### 4. Deploy
1. Click "Deploy" in Vercel
2. The build process will:
   - Install dependencies
   - Generate Prisma Client
   - Push database schema to Neon
   - Seed admin user
   - Build Next.js application

## Build Process Explanation

### What Happens During Deployment:

1. **Install Dependencies**: `npm install`
2. **Generate Prisma Client**: `npx prisma generate` (via postinstall script)
3. **Build Process**: `npx prisma generate && next build` (build command)
4. **Runtime Database**: Schema is managed by your existing Neon database

### Key Files for Deployment:

- **`vercel.json`**: Vercel-specific configuration
- **`package.json`**: Updated build scripts for Prisma
- **`.vercelignore`**: Files to exclude from deployment
- **`scripts/seed-production.ts`**: Production database seeding

## Post-Deployment Verification

### 1. Check Database
- Verify tables are created in your Neon database
- Confirm admin user exists

### 2. Test Functionality
- Visit your deployed site
- Test the checkout flow
- Try admin login at `/admin/login`
- Verify Meta Pixel and CAPI events in Facebook Events Manager

### 3. Monitor Logs
- Check Vercel function logs for any errors
- Monitor database connections in Neon dashboard

## Troubleshooting

### Common Issues:

1. **Prisma Client Not Generated**
   - Solution: Already fixed with `postinstall` and build scripts

2. **Database Connection Issues**
   - Check `DATABASE_URL` environment variable
   - Verify Neon database is accessible

3. **NextAuth Errors**
   - Ensure `NEXTAUTH_URL` matches your Vercel domain
   - Verify `NEXTAUTH_SECRET` is set

4. **Meta CAPI Issues**
   - Check `META_CAPI_ACCESS_TOKEN` is valid
   - Verify `META_PIXEL_ID` is correct

### Debug Commands:
```bash
# Check Prisma Client generation
npx prisma generate

# Test database connection
npx prisma db pull

# Verify build locally
npm run build
```

## Security Notes

- Never commit `.env` files to Git (already in `.gitignore`)
- Use Vercel's environment variables for all secrets
- Rotate API keys regularly
- Monitor database access logs

## Performance Optimization

- Database queries are optimized with Prisma
- Meta CAPI reduces client-side tracking load
- Static pages are pre-rendered where possible
- Images are optimized with Next.js Image component

Your application is now ready for production deployment on Vercel! 🚀
