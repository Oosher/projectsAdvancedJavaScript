import Button from '@mui/material/Button'
import React from 'react';



const ButtonComponent = ()=>{
    return<>
    <Button variant="text" color="primary">butt</Button>
    <Button variant="contained" color="inherit">butt2</Button>
    <Button variant="outlined" color="success">butt3</Button>
    <Button variant="contained" disabled>buttdis</Button>
    </>
}

export default ButtonComponent;