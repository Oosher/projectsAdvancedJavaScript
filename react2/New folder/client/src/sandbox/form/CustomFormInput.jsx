

import { Grid ,TextField} from '@mui/material'
import { bool, func, object, string } from 'prop-types'
import React from 'react'

export default function CustomFormInput({name,label,type="text",required=false,onChange,value,sx,variant="outlined",error}) {
    return (
        <Grid item  xs={12} sx={{...sx}}>
                        <TextField
                        name={name}
                        label={label}
                        type={type}
                        fullWidth
                        value={value}
                        onChange={onChange}
                        variant={variant}
                        required={required}

                        />
                    </Grid>
    )
}



CustomFormInput.propTypes = {

    name:string,
    label:string,
    type:string,
    required:bool,
    onChange:func,
    variant:string,
    sx:object,

}