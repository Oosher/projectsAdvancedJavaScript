


import { Container } from '@mui/system';
import React, { memo } from 'react'
import Typography from '@mui/material/Typography'

function MemoMySpecificData({data}) {

    //max border wile still can show the original box details is = 149.99999237
    return (

        <Container sx={{width:"fit-content", marginTop:"3vh",display:"flex",flexDirection:"column"}}>

                <Typography variant="body1" color="initial">{data}</Typography>

        </Container>
    )
}


export default memo(MemoMySpecificData);
