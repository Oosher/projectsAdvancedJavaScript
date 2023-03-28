


import { Box } from '@mui/system'
import React from 'react'
import NaveBarItem from '../../../../routs/components/NaveBarItem'
import ROUTS from '../../../../routs/routsPage'

export default function Guest() {
    return (
        <Box>

            <NaveBarItem label='Sign up' to={ROUTS.REGISTER}/>
            <NaveBarItem label='Login'to={ROUTS.FORM}/>

        </Box>
    )
}
