



import React, { createContext, useContext, useState } from 'react'
import {createTheme, ThemeProvider as MuiThemeProvider,} from "@mui/material/styles";


const ThemeContext = createContext();

export default function ThemeProvider({children}) {

    const [darkMode,setDarkMode]= useState(false);


        const toggleDarkMode = ()=>{

                setDarkMode(!darkMode);

        }

        const theme = createTheme({
            palette:{
                mode:darkMode?"dark":"light",
            }
        })

    return (
        <MuiThemeProvider theme={theme}>
            <ThemeContext.Provider value={{toggleDarkMode,darkMode}}>
                    {children}
            </ThemeContext.Provider>
        </MuiThemeProvider>
    )
}




export const useTheme = ( )=>{

    const context = useContext(ThemeContext);

    if (!context) {
    throw new Error("useData must be used within a NameProvider");
    } 

    return context;

}