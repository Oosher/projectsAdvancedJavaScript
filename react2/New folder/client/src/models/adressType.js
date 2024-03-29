import { number, string ,shape} from "prop-types";



const addressType = shape({ 
                state: string,
                country: string,
                street: string,
                houseNumber: number,
                city: string,
                zip: number,
            });


export default addressType;