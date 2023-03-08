import axios from "axios";
import { useSnackBar } from "../../../provider/SnackbarProvider";



export default async function useHandleFetch(apiAddress) {
    const {displaySnackBar,setSnackMessage,setSnackColor} = useSnackBar();
    try{
    return  await axios.get(apiAddress).then((res)=>{ 
                
                setSnackMessage("cards has been loaded successfully");
                setSnackColor("success")
                displaySnackBar();
    
        return res.data});

    
    }
    catch(err){
        return Promise.reject(err.message)
    }

}
