import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MusicPlayerPage from './pages/MusicPlayerPage'
import StudentPage from './pages/StudentPage'
import CounterPage from './pages/CounterPage'
import CarClassPage from './pages/CarClassPage'
import Buttn from './pages/Buttn'
import Todo from './pages/Todo'
import Countdown from './pages/Countdown'
import Sum from './pages/Usememo'
import Counter from './pages/MemoCounter'
import Login from './pages/Login'
import ChildbuttonCounter from './pages/ChildbuttonCounter'
import UseCallback from './pages/UseCallback'
import Form from './pages/Form'
import Posts from './pages/axios/postapi' 
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold">React Practice</h1>
            <div className="flex space-x-4">
              <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded-md">Home</Link>
              <Link to="/music-player" className="hover:bg-blue-700 px-3 py-2 rounded-md">Music Player</Link>
              <Link to="/student" className="hover:bg-blue-700 px-3 py-2 rounded-md">Student</Link>
              <Link to="/counter" className="hover:bg-blue-700 px-3 py-2 rounded-md">Counter</Link>
              <Link to="/car-class" className="hover:bg-blue-700 px-3 py-2 rounded-md">Car Class</Link>
              <Link to="/todo" className="hover:bg-blue-700 px-3 py-2 rounded-md">Todo</Link>
              <Link to="/theme" className="hover:bg-blue-700 px-3 py-2 rounded-md">Theme</Link>
              <Link to="/usememo" className="hover:bg-blue-700 px-3 py-2 rounded-md">UseMemo</Link>
              <Link to="/reducer" className="hover:bg-blue-700 px-3 py-2 rounded-md">Reducer</Link>
              <Link to="/login" className="hover:bg-blue-700 px-3 py-2 rounded-md">Login</Link>
              <Link to="/child-counter" className="hover:bg-blue-700 px-3 py-2 rounded-md">Child Counter</Link>
              <Link to="/usecallback" className="hover:bg-blue-700 px-3 py-2 rounded-md">UseCallback</Link>
              <Link to="/form" className="hover:bg-blue-700 px-3 py-2 rounded-md">Form</Link>
              <Link to="/posts" className="hover:bg-blue-700 px-3 py-2 rounded-md">Posts</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/music-player" element={<MusicPlayerPage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/car-class" element={<CarClassPage />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/countdown" element={<Countdown />} />
          <Route path="/theme" element={<Buttn />} />
          <Route path="/usememo" element={<Sum />} />
          <Route path="/reducer" element={<Counter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/child-counter" element={<ChildbuttonCounter />} />
          <Route path="/usecallback" element={<UseCallback />} />
          <Route path="/form" element={<Form />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
