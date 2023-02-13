



import { Container } from '@mui/material'
import React from 'react'
import Cards from '../cards/components/Cards'
import PageHeader from '../components/header'

export default function CardPage() {
  return (
    <Container>
      <PageHeader title={"Header"} subTitle={"info on the page info on the page info on the page info on the page info on the page "}/>
      <br></br>
      <Cards/>
    </Container>
  )
}
