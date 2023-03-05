import axios from "axios";



export default async function handleFetch(apiAddress) {
    try{
    const result = await axios.get(apiAddress);
    
    return  await result.data;
    }
    catch(err){
        return Promise.reject(err.message
)
    }

}
