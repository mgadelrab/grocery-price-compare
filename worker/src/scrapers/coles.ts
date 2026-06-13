export async function scrapeColesPrice(product: string): Promise<any> {
  try {
    console.log(`Scraping Coles for: ${product}`)
    return null
  } catch (error) {
    console.error('Coles scraper error:', error)
    return null
  }
}