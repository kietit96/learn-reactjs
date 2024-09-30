import { createContext, useState } from "react";

const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')
    const handleToggle = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
    }
    const value = {
        theme,
        handleToggle
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }