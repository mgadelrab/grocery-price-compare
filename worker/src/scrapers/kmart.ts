export async function scrapeKmartPrice(product: string): Promise<any> {
  try {
    console.log(`Scraping Kmart for: ${product}`)
    return null
  } catch (error) {
    console.error('Kmart scraper error:', error)
    return null
  }
}