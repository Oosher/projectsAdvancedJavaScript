

import React from 'react'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'

export default function loadingHook(loading,error,cards) {
    const nav =  useNavigate()


    
        

            if (loading) {

                return <Typography variant="body1" color="initial">Loading</Typography>
                
                
            }else{
                
                


            }

        

            if (error!=null) {
                setError(error)
                nav("*");

        }

}
