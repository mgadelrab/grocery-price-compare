export interface Product {
  name: string
  quantity: number
}

export interface PriceData {
  retailer: string
  price: number
  unit: string
  unitPrice: number
  expiryDate?: string
  volumeDiscount?: { quantity: number; unitPrice: number; savings: number }
}

export interface ComparisonItem {
  name: string
  quantity: number
  prices: PriceData[]
  cheapest: PriceData
}

export interface ComparisonResult {
  items: ComparisonItem[]
  totalByRetailer: { [key: string]: number }
  cheapestRetailer: string
}