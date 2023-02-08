import { CardHeader, CardMedia } from '@mui/material'
import { string } from 'prop-types'
import React from 'react'
import imgType from '../../../models/imgType'

export default function CardHead({imgData,title,subtitle}) {
    
  return <div><CardMedia component="img" alt={imgData.alt} image={imgData.url} />
            <CardHeader
                title={title}
                subheader={subtitle}
            />
        </div>
            
}


CardHead.propTypes = {
    imgData:imgType,
    title:string,
    subtitle:string,

}