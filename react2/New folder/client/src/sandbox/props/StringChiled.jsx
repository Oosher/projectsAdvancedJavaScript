import React from 'react'

export default function StringChiled(prop) {

    const objectDataReturn =(obj)=>{
        let string="";
        for (const key in obj) {
            string+=key+" : "+obj[key]+"   ";

        }

        return string
        
    }
    /* option 2 
    let{name,number}=prop.data;
    <div>{name}<br>{number}</div>
    */
    return (
        <div>{objectDataReturn(prop.data)}</div>
    )
}
