export async function scrapeCostcoPrice(product: string): Promise<any> {
  try {
    console.log(`Scraping Costco for: ${product}`)
    return null
  } catch (error) {
    console.error('Costco scraper error:', error)
    return null
  }
}