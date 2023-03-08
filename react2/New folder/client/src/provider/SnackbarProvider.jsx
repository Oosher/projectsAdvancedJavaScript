
import React, { createContext, useContext, useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import Close from '@mui/icons-material/Close'
import { Alert } from '@mui/material';


const snackBar = createContext();
export default function SnackbarProvider({children}) {

    const [snackOpen,setSnackOpen] = useState(false)

    const [snackMessage,setSnackMessage] =useState("");

    const [snackColor,setSnackColor] = useState("success");

    const displaySnackBar = ()=>{

        setSnackOpen(!snackOpen)

    }
    


    return (<>
            <snackBar.Provider value={{displaySnackBar,setSnackMessage,setSnackColor}}>
                {children}
            </snackBar.Provider>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={snackOpen}
                onClose={displaySnackBar}
                autoHideDuration={4000}
            >
                <Alert severity={snackColor}>
                    {snackMessage}
                </Alert>
            </Snackbar>
        </>
    )
}






export const useSnackBar = ()=>{

const context = useContext(snackBar);

    if (!context) {
    throw new Error("useData must be used within a NameProvider");
    } 

    return context;

}