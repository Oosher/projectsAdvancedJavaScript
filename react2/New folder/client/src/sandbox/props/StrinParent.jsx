
import React from 'react'
import StringChiled from './StringChiled'

export default function StrinParent() {
    let obj ={
        name:"sdaasd",
        number:213123123,
    }
    return  <StringChiled data={obj}/>
    
}
