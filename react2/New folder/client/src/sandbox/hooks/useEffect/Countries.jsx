

import React from 'react'

export default function Countries() {


    const getCountries = async ()=>{

        const response = fetch('https://restcountries.com/v3.1/all').then((res)=>{

        const countries = JSON.parse(res);

        console.log(res);
        }).catch((err)=>{
            console.log(err);
        })


    }


    return (
        <div>Countries</div>
    )
}
