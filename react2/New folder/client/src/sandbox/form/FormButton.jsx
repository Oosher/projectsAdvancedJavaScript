




import { Button } from '@mui/material'
import { bool, string } from 'prop-types'
import React from 'react'


export default function FormButton({variant="contained",component="button",size="medium",color="primary",onclick , disabled=false,node, children}) {
    return (
        <Button variant={variant} color={color} component={component} size={size} onClick={onclick} disabled={disabled}  fullWidth >
                {children}
        </Button>
        )
}



FormButton.propTypes = {

    variant:string,

    component:string,

    size:string,

    color:string,

    disabled:bool,


}