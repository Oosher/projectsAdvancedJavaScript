import { useState } from "react";



export default  function useHook1(initialValue = 0,step = 1){

        const [counter,setCounter] = useState(initialValue);

        function increase (){

            return setCounter((prev)=>prev+step);

        }


        function decrease () {

            return setCounter((prev)=>prev-step);

        }

        function reset () {

            return setCounter(initialValue);

        }   
        
    return {counter,increase,decrease,reset}

}


