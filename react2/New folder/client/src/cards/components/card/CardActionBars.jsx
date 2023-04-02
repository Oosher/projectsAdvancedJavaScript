

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState } from 'react'
import { Box, CardActions, IconButton, Typography } from '@mui/material';
import { any, arrayOf, func, number, string } from 'prop-types';
import { useDataProvider } from '../../../forms/hooks/UserProvider';
import CardDeleteDialog from './CardDeleteDialog';
import { useNavigate } from 'react-router-dom';
import ROUTS from '../../../routs/routsPage';

export default function CardActionBars ({likes ,deleteFunc, likeFunction,editFunction,phoneFunction,phone,bizNumber,cardId,userId}) {





  
const goto = useNavigate()
  const {user} = useDataProvider();

const [isOpen,setIsOpen] = useState(false);

  return <CardActions  sx={{display:"flex",justifyContent:"space-between",marginBottom:"0px",paddingBottom:"0px"}}>
                <Box>
                <IconButton aria-label="Delete Button" onClick={()=>{
                  //deleteFunc(cardId);
                  setIsOpen(true)
                } }>
                  <DeleteIcon/>
                </IconButton>
                {(user?.id===userId || user?.isAdmin)&&<IconButton aria-label='Edit Button' onClick={()=>{
                  goto(`${ROUTS.EDITCARD}/${cardId}`)
                }}>
                  <EditIcon/>
                </IconButton>}

                

                </Box>  
                
                <Box>
                <IconButton aria-label='Phone Button' onClick={()=>{
                  phoneFunction(phone);
                }}>
                <PhoneIcon/>
                </IconButton>

                {user&&<IconButton aria-label='Add To Favorites' onClick={(event)=>{
                  likeFunction(bizNumber,likes,event);
                }}> 
                <Typography id={bizNumber} variant="body1" color="initial">{likes.length}</Typography>
                  <FavoriteIcon/>
                </IconButton>}
                </Box>
                <CardDeleteDialog isDialogOpen={isOpen} onChangeDialog={()=>setIsOpen(false)} onDelete={()=>deleteFunc(cardId)} />
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
