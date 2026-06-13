'use client'
import { useState } from 'react'
import ProductInput from '@/components/ProductInput'
import ComparisonResults from '@/components/ComparisonResults'
import Header from '@/components/Header'
import { Product, ComparisonResult } from '@/types'

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [results, setResults] = useState<ComparisonResult[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleProductsSubmit = async (newProducts: Product[]) => {
    setProducts(newProducts)
    setLoading(true)
    setError(null)

    try {
      const workerUrl = process.env.NEXT_PUBLIC_WORKER_URL || 'http://localhost:8787'
      const response = await fetch(`${workerUrl}/api/compare`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: newProducts }),
      })

      if (!response.ok) throw new Error('Failed to fetch')
      const data = await response.json()
      setResults(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <ProductInput onSubmit={handleProductsSubmit} isLoading={loading} />
        {error && <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded text-red-800">Error: {error}</div>}
        {loading && <div className="mt-8 text-center"><div className="animate-spin h-12 w-12 border-b-2 border-green-600 rounded-full mx-auto"></div><p className="mt-4 text-gray-600">Comparing prices...</p></div>}
        {results && !loading && <ComparisonResults results={results} products={products} />}
      </div>
    </main>
  )
}