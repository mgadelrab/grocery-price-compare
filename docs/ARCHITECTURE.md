# Architecture

## Tech Stack

- **Frontend**: Next.js 14 + React + TypeScript + Tailwind CSS (Vercel)
- **Backend**: Cloudflare Workers (Serverless)
- **Cache**: Cloudflare KV (Global distributed storage)
- **Retailers**: 8 Australian retailers
  - Coles, Woolworths, Aldi, IGA
  - Costco, Kmart, BigW, Target

## Data Flow

1. User enters products (text or CSV/TXT upload)
2. Frontend parses quantity (e.g., "Milk x2")
3. Frontend POSTs to `/api/compare`
4. Backend scrapes each retailer in parallel
5. Backend calculates unit prices and volume discounts
6. Results cached in KV for 24-48 hours
7. Frontend displays sorted results

## Features Implemented

✅ Product input (text + CSV/TXT upload)
✅ Quantity parsing (x2, x3, etc.)
✅ Type-safe TypeScript throughout
✅ Minimalist Tailwind CSS design
✅ Responsive UI (mobile + desktop)
✅ API framework (ready for scrapers)
✅ CORS configured
✅ Error handling

## Next Steps

1. Implement Coles scraper (priority)
2. Implement Woolworths scraper
3. Implement remaining scrapers
4. Add caching logic to KV
5. Test locally
6. Deploy to Vercel + Cloudflare