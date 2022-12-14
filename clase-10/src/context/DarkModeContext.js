import {useState, createContext, useContext} from 'react'

const DarkModeContext = createContext()

export const useDarkModeContext = () => useContext(DarkModeContext)

export const DarkModeProvider = (props) => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if(!darkMode)
            document.body.classList.add("darkMode")
        else 
            document.body.classList.remove("darkMode")
    }

    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )

}