

import React from 'react'
import OnClickEvent from './OnClickEvent'

export default function fatherComponentEvernt() {
        const onClickFunc =(text)=>{
            console.log(text);
        }
    return (
        <OnClickEvent onClickFunc={onClickFunc}/>
    )
}
