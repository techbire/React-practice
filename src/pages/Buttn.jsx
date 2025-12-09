import React, {createContext, useState} from 'react'
import Navbar from './Navbar'
import Home1 from './Home1'
export const ThemeContext=createContext();

export default function App(){
    const [theme,setTheme]=useState('light')
    
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={`min-h-screen transition-colors duration-300 ${
                theme === 'dark' 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-white text-gray-900'
            }`}>
                <Navbar />
                <Home1 />
            </div>
        </ThemeContext.Provider>
    )
}