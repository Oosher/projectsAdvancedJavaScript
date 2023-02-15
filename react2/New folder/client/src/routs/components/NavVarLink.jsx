


import { node, object, string } from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavVarLink({to,children,sx}) {
    return (
        <Link style={{...sx,textDecoration:"none"}} to={to}>{children}</Link>
    )
}


NavVarLink.propTypes = {

    to:string.isRequired,
    children:node.isRequired,
    sx:object,

}