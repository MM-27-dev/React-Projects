import { createContext,useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider;

//creating the hook for the context 
export default function useTheme() {
    return useContext(ThemeContext)
}
