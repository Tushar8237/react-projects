import React, { createContext, useContext, useState } from 'react'

// Create Context 
const ThemeContext = createContext()

// Custom hook
export const useTheme = () => useContext(ThemeContext)

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider