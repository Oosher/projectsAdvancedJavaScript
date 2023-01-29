
import { Divider, Typography } from '@mui/material'
import React from 'react'

export default function CardActionBar () {
  return <CardActionBar><Box>
            <IconButton aria-label="Delete Button">
            <DeleteIcon/>
            </IconButton>

            <IconButton aria-aria-label='Edit Button'>
            <EditIcon/>
            </IconButton>

            </Box>  
            
            <Box>
            <IconButton aria-aria-label='Phone Button'>
            <PhoneIcon/>
            </IconButton>

            <IconButton aria-aria-label='Add To Favorites'> 
            <FavoriteIcon/>
            </IconButton>
            </Box>
            </CardActionBar>
            
  
}
