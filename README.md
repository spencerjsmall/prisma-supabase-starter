# Nuxt + Prisma + Supabase Starter

## Setup

1. [Initialize Supabase project](https://supabase.com/docs/guides/local-development):

```bash
supabase init
```

2. Add local db connection strings to `.env`

3. Install dependencies (Node version 20.x):

```bash
npm install
```

4. [Setup Snaplet Snapshot](https://github.com/supabase-community/snapshot?tab=readme-ov-file#getting-started):

```bash
npx @snaplet/snapshot setup
```

5. Add project to Vercel for production use.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

This will start the local supabase db and run the Nuxt app.

## Useful actions

Build local db using snapshot of production db:

```bash
npm run db:build
```

Remove all cached snapshots and rebuild local db:

```bash
npm run db:reset
```

Generate a migration script and migrate the local db based on `schema.prisma` changes:

```bash
npm run db:apply
```

## CI/CD

Before merging your local db changes:

- Use `npm run build` as the build command wherever you're deploying (e.g. Vercel)
- Set production environment variables for database connection strings

When this app is built for production, Prisma Migrate will apply new migrations to the production database automatically. 
