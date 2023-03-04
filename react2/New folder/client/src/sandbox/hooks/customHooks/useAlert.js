import { useState } from "react"





export default function useAlert() {

    const [showAlert,setShowAlert] = useState(false);


    const handleAlert = ()=>{

        if (showAlert) {

            setShowAlert(false)
            
            setTimeout(()=>handleAlert(),3000) 
            
            

        }else{

            setShowAlert(true);
            
        }

        

    }

    return {showAlert,handleAlert};
        
    
}
