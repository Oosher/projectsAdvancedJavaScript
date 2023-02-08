

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react'
import { Box, CardActions, IconButton, Typography } from '@mui/material';
import { any, arrayOf, func, number, string } from 'prop-types';

export default function CardActionBars ({likes ,deleteFunc, likeFunction,editFunction,phoneFunction,phone,bizNumber}) {
  return <CardActions  sx={{display:"flex",justifyContent:"space-between",marginBottom:"0px",paddingBottom:"0px"}}>
                <Box>
                <IconButton aria-label="Delete Button" onClick={()=>{
                  deleteFunc(bizNumber);
                } }>
                <DeleteIcon/>
                </IconButton>

                <IconButton aria-label='Edit Button' onClick={()=>{
                  editFunction(bizNumber);
                }}>
                <EditIcon/>
                </IconButton>

                </Box>  
                
                <Box>
                <IconButton aria-label='Phone Button' onClick={()=>{
                  phoneFunction(phone);
                }}>
                <PhoneIcon/>
                </IconButton>

                <IconButton aria-label='Add To Favorites' onClick={(event)=>{
                  likeFunction(bizNumber,likes,event);
                }}> 
                <Typography id={bizNumber} variant="body1" color="initial">{likes.length}</Typography>
                <FavoriteIcon/>
                </IconButton>
                </Box>
            </CardActions>
            
  
}





CardActionBars.propTypes = {

    likes:arrayOf(any) ,
    deleteFunc:func,
    likeFunction:func,
    editFunction:func,
    phoneFunction:func,
    phone:string,
    bizNumber:number,
}
