import { createContext , useContext } from "react";

// Created a context through Context hook 


 export const themeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})


export const ThemeProvider = themeContext.Provider

export default function useTheme(){
return useContext(themeContext)
}