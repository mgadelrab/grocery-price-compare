export async function scrapeIGAPrice(product: string): Promise<any> {
  try {
    console.log(`Scraping IGA for: ${product}`)
    return null
  } catch (error) {
    console.error('IGA scraper error:', error)
    return null
  }
}