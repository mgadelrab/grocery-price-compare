'use client'
import { ComparisonResult, Product } from '@/types'
import { TrendingDown, AlertCircle } from 'lucide-react'

interface Props { results: ComparisonResult[]; products: Product[] }

export default function ComparisonResults({ results }: Props) {
  if (!results || results.length === 0) return <div className="card text-center">No results found</div>

  const result = results[0]
  const retailers = Object.keys(result.totalByRetailer).sort(
    (a, b) => result.totalByRetailer[a] - result.totalByRetailer[b]
  )

  return (
    <div className="space-y-6 mt-8">
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Total Cost Comparison</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {retailers.map((retailer) => (
            <div
              key={retailer}
              className={`p-4 rounded-lg border-2 transition-all ${
                result.cheapestRetailer === retailer ? 'border-green-600 bg-green-50' : 'border-gray-200'
              }`}
            >
              <div className="font-medium text-sm mb-1 capitalize">{retailer}</div>
              <div className="text-lg font-bold">${result.totalByRetailer[retailer].toFixed(2)}</div>
              {result.cheapestRetailer === retailer && <div className="text-xs text-green-600 font-medium mt-1">Cheapest</div>}
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {result.items.map((item, index) => (
          <div key={index} className="card">
            <h3 className="text-lg font-semibold mb-2">
              {item.name} {item.quantity > 1 && <span className="text-gray-600 font-normal">x{item.quantity}</span>}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-2">Retailer</th>
                    <th className="text-right py-2 px-2">Unit Price</th>
                    <th className="text-right py-2 px-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {item.prices
                    .sort((a, b) => a.unitPrice - b.unitPrice)
                    .map((price, idx) => (
                      <tr
                        key={idx}
                        className={`border-b border-gray-100 ${
                          price.retailer === item.cheapest.retailer ? 'bg-green-50' : ''
                        }`}
                      >
                        <td className="py-2 px-2 flex items-center gap-2">
                          {price.retailer}
                          {price.retailer === item.cheapest.retailer && <TrendingDown className="w-4 h-4 text-green-600" />}
                        </td>
                        <td className="text-right py-2 px-2 font-medium">${price.unitPrice.toFixed(2)}/{price.unit}</td>
                        <td className="text-right py-2 px-2">${(price.price * item.quantity).toFixed(2)}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}