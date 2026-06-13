export async function scrapeTargetPrice(product: string): Promise<any> {
  try {
    console.log(`Scraping Target for: ${product}`)
    return null
  } catch (error) {
    console.error('Target scraper error:', error)
    return null
  }
}