import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-4">Welcome to React Practice</h1>
      <p className="text-gray-600 text-lg mb-8">
        This is a unified project combining all your React practice exercises.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <Link to="/music-player" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">🎵 Music Player</h3>
          <p className="text-gray-600">Play songs with seekbar and controls</p>
        </Link>
        <Link to="/student" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">👨‍🎓 Student</h3>
          <p className="text-gray-600">Display student information</p>
        </Link>
        <Link to="/counter" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">🔢 Counter</h3>
          <p className="text-gray-600">Simple counter with state</p>
        </Link>
        <Link to="/car-class" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">🚗 Car Class</h3>
          <p className="text-gray-600">Object-oriented programming example</p>
        </Link>
         <Link to="/todo" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">📝 Todo list</h3>
          <p className="text-gray-600">todo list example</p>
        </Link>
        <Link to="/Countdown" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">⏱️ Countdown</h3>
          <p className="text-gray-600">Countdown timer</p>
        </Link>
        <Link to="/theme" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">🎨 Theme Switcher</h3>
          <p className="text-gray-600">Context API with dark/light theme</p>
        </Link>
         <Link to="/Usememo" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">Add</h3>
          <p className="text-gray-600">Addition</p>
        </Link>
        <Link to="/reducer" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">🔄 Reducer Counter</h3>
          <p className="text-gray-600">useReducer hook example</p>
        </Link>
        <Link to="/login" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">🔐 Login Form</h3>
          <p className="text-gray-600">useReducer form management</p>
        </Link>
        <Link to="/child-counter" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">👶 Child Counter</h3>
          <p className="text-gray-600">Counter with child component</p>
        </Link>
        <Link to="/usecallback" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">⚡ UseCallback</h3>
          <p className="text-gray-600">useCallback hook example</p>
        </Link>
        <Link to="/form" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">📋 Form</h3>
          <p className="text-gray-600">Complete form with validation</p>
        </Link>
        <Link to="/posts" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">📡 Posts API</h3>
          <p className="text-gray-600">Fetch data with axios</p>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
