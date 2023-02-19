import { IconButton } from '@mui/material'
import React from 'react'
import NavVarLink from '../../../../routs/components/NavVarLink'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ROUTS from '../../../../routs/routsPage';

export default function LogoIcon() {
    return (
        <NavVarLink to={ROUTS.ROOT}>
            <IconButton>
                <CreditCardIcon/>
            </IconButton>
        </NavVarLink>
    )
}
