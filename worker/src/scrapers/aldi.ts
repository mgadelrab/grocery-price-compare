export async function scrapeAldiPrice(product: string): Promise<any> {
  try {
    console.log(`Scraping Aldi for: ${product}`)
    return null
  } catch (error) {
    console.error('Aldi scraper error:', error)
    return null
  }
}