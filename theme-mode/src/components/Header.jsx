import React from 'react'
import { useTheme } from '../context/ThemeContext'

function Header() {
    const { theme, toggleTheme } = useTheme()
  return (
    <header className='header'>
        <h1>
            The Mode Toggle
        </h1>
        <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    </header>
  )
}

export default Header
