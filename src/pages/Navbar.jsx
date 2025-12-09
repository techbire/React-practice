import { useContext } from 'react'
import { ThemeContext } from './Buttn'

export default function Navbar(){
    const {theme,setTheme}=useContext(ThemeContext)
    
    return (
        <nav className={`p-4 shadow-lg transition-colors ${
            theme === 'dark' 
                ? 'bg-gray-800 text-white' 
                : 'bg-blue-600 text-white'
        }`}>
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-bold">Theme Selector Demo</h1>
                
                <button 
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                        theme === 'dark'
                            ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                            : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                >
                    {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </button>
            </div>
        </nav>
    )
}