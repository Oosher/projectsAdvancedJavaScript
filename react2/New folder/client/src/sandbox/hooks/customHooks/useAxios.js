
import axios from "axios";
import { useDataProvider } from "../../../forms/hooks/UserProvider";
import { useSnackBar } from "../../../provider/SnackbarProvider";


    export default function useAxios() {
        const {displaySnackBar,setSnackMessage,setSnackColor} = useSnackBar();

        const{token} = useDataProvider();
        axios.defaults.headers.common["x-auth-token"] = token;
        axios.interceptors.request.use((data) => {
            console.log("This log came from interceptor request");
            return Promise.resolve(data);
        }, null);

        axios.interceptors.response.use(null, (error) => {
            if (error.message) setSnackMessage(error.message);
            return Promise.reject(error);
        });
    }
