
import React from 'react'

export default function StringPropChild(props) {
    console.log(props);
    return<div>hello {props.data}</div>
    
}
