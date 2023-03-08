
import axios from "axios";
import { useSnackBar } from "../../../provider/SnackbarProvider";


    export default function useAxios() {
        const {displaySnackBar,setSnackMessage,setSnackColor} = useSnackBar();

        axios.interceptors.request.use((data) => {
            console.log("This log came from interceptor request");
            return Promise.resolve(data);
        }, null);

        axios.interceptors.response.use(null, (error) => {
            if (error.message) setSnackMessage(error.message);
            return Promise.reject(error);
        });
    }
