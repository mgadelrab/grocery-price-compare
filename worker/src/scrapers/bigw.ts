export async function scrapeBigWPrice(product: string): Promise<any> {
  try {
    console.log(`Scraping BigW for: ${product}`)
    return null
  } catch (error) {
    console.error('BigW scraper error:', error)
    return null
  }
}