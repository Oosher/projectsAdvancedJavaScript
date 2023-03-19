import axios from "axios";
import { useSnackBar } from "../../../provider/SnackbarProvider";



export default async function useHandleFetch(apiAddress) {
    const {displaySnackBar,setSnackMessage,setSnackColor} = useSnackBar();
    try{
    const response = await axios.get(apiAddress);

    return ()=>{
        setSnackMessage("cards has been successfully loaded");
        setSnackColor("success");
        displaySnackBar();
        
        
        return response.data
    }

    
    }
    catch(err){
        return ()=>{setSnackMessage(err.message)

            setSnackColor("error")
        displaySnackBar();
        }
    }

}
