export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🛒</span>
          <div>
            <h1 className="text-2xl font-bold">Grocery Price Compare</h1>
            <p className="text-sm text-gray-600">Find the best deals across Australian retailers</p>
          </div>
        </div>
      </div>
    </header>
  )
}