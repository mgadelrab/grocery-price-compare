export async function scrapWoolworthsPrice(product: string): Promise<any> {
  try {
    console.log(`Scraping Woolworths for: ${product}`)
    return null
  } catch (error) {
    console.error('Woolworths scraper error:', error)
    return null
  }
}