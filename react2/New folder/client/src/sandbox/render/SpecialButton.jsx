



import React, { memo } from 'react'
import Button from '@mui/material/Button'

function SpecialButton({onclick, children,sx}) {



    console.log("button");
    return (
        <Button variant="outlined" color="secondary" sx={{...sx}}  onClick={onclick}>{children} </Button>
    )
}


export default memo(SpecialButton);