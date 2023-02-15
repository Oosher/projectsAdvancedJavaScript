
import { Box } from '@mui/system'
import { node } from 'prop-types'
import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import Main from './main/Main'

export default function Layout({children}) {
    return (
        <Box>
            <Header/>
            <Main>{children}</Main>
            <Footer/>
        </Box>
    )
}

Layout.propTypes = {

    children:node.isRequired,

}
