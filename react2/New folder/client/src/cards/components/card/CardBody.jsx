import React from 'react'
import { Divider, Typography } from '@mui/material'
import {  number, string } from 'prop-types'
import addressType from '../../../models/adressType'

export default function CardBody({phone,address,cardNumber}) {
  return (
    <div><Divider/>
        <Typography variant="body1" color="initial"><strong>Phone:</strong>{phone}</Typography>
        <Typography variant="body1" color="initial"><strong>Address:</strong>{address.city} {address.street} {address.houseNumber}</Typography>
        <Typography variant="body1" color="initial"><strong>Card Number:</strong>{cardNumber}</Typography></div>
  )
}



CardBody.propTypes = {
  phone:string,
  address:addressType,
  cardNumber:number,

}