

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react'
import { Box, CardActions, IconButton } from '@mui/material';

export default function CardActionBars ({likes}) {
  return <CardActions  sx={{display:"flex",justifyContent:"space-between",position:"rela",marginBottom:"0px",paddingBottom:"0px"}}>
                <Box>
                <IconButton aria-label="Delete Button">
                <DeleteIcon/>
                </IconButton>

                <IconButton aria-label='Edit Button'>
                <EditIcon/>
                </IconButton>

                </Box>  
                
                <Box>
                <IconButton aria-label='Phone Button'>
                <PhoneIcon/>
                </IconButton>

                <IconButton aria-label='Add To Favorites'> 
                <FavoriteIcon/>
                </IconButton>
                </Box>
            </CardActions>
            
  
}
