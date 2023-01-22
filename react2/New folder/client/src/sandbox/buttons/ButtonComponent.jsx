import Button from '@mui/material/Button'
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import IconButton from '@mui/material/IconButton'



const ButtonComponent = ()=>{
    return<>
    <Button variant="text" color="primary">butt</Button>
    <Button variant="contained" color="inherit" size='small' startIcon={<DeleteIcon/>}>butt2</Button>
    <Button variant="outlined" color="success" size='large' endIcon={<ReplyAllIcon/>}>butt3</Button>
    <Button variant="contained" disabled>buttdis</Button>
    <Button startIcon={<DeleteIcon/>} color="info"></Button>
    <IconButton aria-label="Delete" > <DeleteIcon/> </IconButton>
    </>
}

export default ButtonComponent;