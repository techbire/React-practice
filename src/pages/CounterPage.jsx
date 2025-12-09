import { useState } from 'react'

function CounterPage() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="bg-white p-12 rounded-2xl shadow-xl text-center">
        <h1 className="text-4xl font-bold mb-8">Counter App</h1>
        <div className="text-8xl font-bold text-blue-600 mb-8">
          {count}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-semibold transition"
          >
            - Decrease
          </button>
          <button
            onClick={() => setCount(0)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-4 rounded-lg text-xl font-semibold transition"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold transition"
          >
            + Increase
          </button>
        </div>
      </div>
    </div>
  )
}

export default CounterPage
