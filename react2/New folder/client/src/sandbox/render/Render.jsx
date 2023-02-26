

import React ,{useCallback, useEffect, useMemo, useState}from 'react'
import SpecialButton from './SpecialButton';

export default function Render() {

    const [value,setValue]  = useState(()=>{
        console.log("the State is defined"); 
        return 0;
    })

    const [value2, setValue2] = useState(0)

    useEffect(() => {


        console.log("The effect is rendered");

        
        


    }, [])

    

    
    const doSomething = useMemo( () =>{

            console.log("sdsdasd");

            return 7*value2;

    }
    ,[value2]);



    const handleClick1 = useCallback( ()=>{

        setValue((previous)=>previous+1)
        
    }

    ,[])

    const handleClick2 =  useCallback( ()=>{

        setValue2((previous)=>previous+1)
        
    }
    ,[])


    console.log("this is being render");

    return (
        <div>
            <h1>{value}</h1>
            <SpecialButton onclick={handleClick1} >Click</SpecialButton>
            <h1>{value2}</h1>
            <SpecialButton onclick={handleClick2} >Click</SpecialButton>
            <p>{doSomething}</p>
            
        </div>
    )
    }
