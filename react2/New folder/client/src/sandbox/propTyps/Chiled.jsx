
import { node } from 'prop-types'
import React from 'react'

// children is a saved word 

export default function Chiled({name,children}) {
    return (
        <div>{name} {children}</div>
    )
}



Chiled.propTypes = {

    name :node.isRequired,

    children:node.isRequired,

}