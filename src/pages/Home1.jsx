import React, { useContext } from 'react'
import { ThemeContext  } from './Buttn'

export default function Home1(){
    const {theme}=useContext(ThemeContext)
    
    return(
        <div className="container mx-auto p-8">
            <div className={`max-w-4xl mx-auto p-8 rounded-xl shadow-2xl transition-colors ${
                theme === 'dark'
                    ? 'bg-gray-800 border-2 border-gray-700'
                    : 'bg-gray-50 border-2 border-gray-200'
            }`}>
                <h2 className="text-3xl font-bold mb-6 text-center">
                    {theme === 'dark' ? '🌙 Dark Theme Active' : '☀️ Light Theme Active'}
                </h2>
                
                <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                    }`}>
                        <p className="text-lg">
                            <strong>Current Theme:</strong> <span className="capitalize">{theme}</span>
                        </p>
                    </div>
                    
                    <div className={`p-4 rounded-lg ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                    }`}>
                        
                        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                           
                        </p>
                    </div>
                    
                    <div className={`p-4 rounded-lg ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                    }`}>
                        <p className="text-lg">
                            <strong>Features:</strong>
                        </p>
                        <ul className={`list-disc list-inside mt-2 space-y-1 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}





