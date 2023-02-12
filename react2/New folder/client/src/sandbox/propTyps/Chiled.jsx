
import { string } from 'prop-types'
import React from 'react'

export default function Chiled({name}) {
    return (
        <div>{name}</div>
    )
}



Chiled.propTypes = {

    name :string.isRequired,

}