interface Env { PRICE_CACHE: KVNamespace }

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders })

    const url = new URL(request.url)
    const pathname = url.pathname

    if (pathname === '/api/compare' && request.method === 'POST') {
      return handleCompare(request, env)
    }

    if (pathname === '/health') {
      return new Response(JSON.stringify({ status: 'ok' }), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      })
    }

    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    })
  },
}

async function handleCompare(request: Request, env: Env): Promise<Response> {
  try {
    const body = (await request.json()) as any
    const { items } = body

    if (!items || !Array.isArray(items)) {
      return new Response(JSON.stringify({ error: 'Invalid items' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      })
    }

    const mockResults = {
      items: items.map((item: any) => ({
        name: item.name,
        quantity: item.quantity,
        prices: [],
        cheapest: { retailer: 'N/A', price: 0, unit: 'unit', unitPrice: 0 },
      })),
      totalByRetailer: {},
      cheapestRetailer: 'N/A',
    }

    return new Response(JSON.stringify([mockResults]), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    })
  }
}