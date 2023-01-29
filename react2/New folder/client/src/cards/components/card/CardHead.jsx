import { CardHeader, CardMedia } from '@mui/material'
import React from 'react'

export default function CardHead({imgData,title,subtitle}) {
    
  return <><CardMedia component="img" alt={imgData.alt} image={imgData.url} />
            <CardHeader
                title={title}
                subheader={subtitle}
            />
        </>
            
}
