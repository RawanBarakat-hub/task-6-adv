import { createContext, useEffect, useState } from "react";

export const DarkContext = createContext({
    dark: false,
    setDark: (value: boolean) => {}
})
export const DarkProvider = ({ children}) => {
    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem("theme");
        return saved === "dark"
    })
    useEffect(() => {
        if (dark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        }
    }, [dark])
    return (
        <DarkContext.Provider value={{ dark, setDark }}>
        {children}
        </DarkContext.Provider>
    )
}
