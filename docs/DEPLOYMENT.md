# Deployment Guide

## Frontend (Vercel)

1. Go to https://vercel.com/new
2. Import your GitHub repo
3. Set Root Directory: `frontend`
4. Set environment variable:
   - Key: `NEXT_PUBLIC_WORKER_URL`
   - Value: `https://grocery-price-compare-worker.workers.dev`
5. Deploy

## Backend (Cloudflare Workers)

1. Install Wrangler: `npm install -g @cloudflare/wrangler`
2. Authenticate: `wrangler login`
3. Create KV namespace:
   ```bash
   wrangler kv:namespace create "PRICE_CACHE"
   ```
4. Update `worker/wrangler.toml` with the namespace ID
5. Deploy:
   ```bash
   cd worker
   wrangler deploy
   ```

## Cost

Total: **$0/month** (all free tiers)
- Vercel: 100k requests/month free
- Cloudflare Workers: 100k requests/day free
- Cloudflare KV: 1GB storage free