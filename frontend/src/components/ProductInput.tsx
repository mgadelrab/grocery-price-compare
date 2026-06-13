'use client'
import { useState, useRef } from 'react'
import { Upload, Plus, X } from 'lucide-react'
import { Product } from '@/types'

interface Props { onSubmit: (products: Product[]) => void; isLoading: boolean }

export default function ProductInput({ onSubmit, isLoading }: Props) {
  const [products, setProducts] = useState<Product[]>([])
  const [inputValue, setInputValue] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const parseQuantity = (text: string): Product => {
    const match = text.match(/^(.+?)\\s*(?:x|×)\\s*(\\d+)\\s*$/i)
    if (match) return { name: match[1].trim(), quantity: parseInt(match[2]) }
    return { name: text.trim(), quantity: 1 }
  }

  const handleAddProduct = () => {
    if (!inputValue.trim()) return
    setProducts([...products, parseQuantity(inputValue)])
    setInputValue('')
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      const text = event.target?.result as string
      const lines = text.split('\\n').map((l) => l.trim()).filter((l) => l)
      const newProducts = lines.map((line) => parseQuantity(line))
      setProducts([...products, ...newProducts])
    }
    reader.readAsText(file)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <div className="card max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add Products</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="e.g., Milk x2, Eggs"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddProduct()}
          className="input-field flex-1"
          disabled={isLoading}
        />
        <button onClick={handleAddProduct} className="btn-primary" disabled={isLoading}>
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <div className="mb-6">
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,.txt"
          onChange={handleFileUpload}
          className="hidden"
          disabled={isLoading}
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="btn-secondary w-full flex items-center justify-center gap-2"
          disabled={isLoading}
        >
          <Upload className="w-4 h-4" /> Upload CSV/TXT
        </button>
      </div>
      {products.length > 0 && (
        <div className="mb-6">
          <h3 className="font-medium text-sm mb-3">Products ({products.length})</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto bg-gray-50 p-3 rounded">
            {products.map((p, i) => (
              <div key={i} className="flex items-center justify-between bg-white p-2 rounded border">
                <span className="text-sm">{p.name} {p.quantity > 1 && `x${p.quantity}`}</span>
                <button onClick={() => setProducts(products.filter((_, idx) => idx !== i))} className="text-red-500">
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => onSubmit(products)}
        className="btn-primary w-full"
        disabled={products.length === 0 || isLoading}
      >
        {isLoading ? 'Comparing...' : 'Compare Prices'}
      </button>
    </div>
  )
}