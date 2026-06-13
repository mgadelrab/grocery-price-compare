# 🛒 Grocery Price Compare

A minimalist web application that compares grocery prices across major Australian retailers (Coles, Woolworths, Aldi, IGA, Costco, Kmart, BigW, Target).

## Features

✨ **Smart Product Input**
- Text input or CSV/TXT file upload
- Quantity parsing (e.g., "Milk x2", "Eggs x3")
- Default quantity: 1

📊 **Price Comparison**
- Compares prices across 8+ AU retailers
- Calculates unit prices ($/g, $/ml, $/unit)
- Identifies volume discounts
- Shows price expiry dates

🎯 **Smart Recommendations**
- Alerts when buying more saves money
- Groups results by cheapest vendor
- Shows total cost per vendor

💾 **Cross-Device Sync**
- Local storage for quick access
- Optional cloud save with shareable links
- Save/load shopping lists

🛍️ **Vendor Integration**
- Direct cart links to each retailer
- Checkbox to include/exclude items
- One-click checkout per vendor

## Tech Stack

**Frontend:**
- Next.js 14 (React) + TypeScript
- Tailwind CSS (minimalist design)
- Vercel hosting (free)

**Backend:**
- Cloudflare Workers (serverless, free tier)
- Cheerio (web scraping)
- KV Storage (caching)

## Getting Started

See [SETUP.md](./SETUP.md) for local development.

## Supported Retailers

- 🏪 Coles
- 🏪 Woolworths
- 🏪 Aldi
- 🏪 IGA
- 🏪 Costco Australia
- 🏪 Kmart
- 🏪 BigW
- 🏪 Target Australia

## License

MIT