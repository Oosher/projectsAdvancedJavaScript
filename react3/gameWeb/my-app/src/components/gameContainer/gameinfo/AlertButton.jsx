
import React from 'react'
import Button from '@mui/material/Button'

export default function AlertButton({message}) {
  return (
    <Button variant="text" color="primary" onClick={()=>{alert(message)}}> Click here </Button>
  )
}
