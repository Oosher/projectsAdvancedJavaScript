
import {shape} from 'prop-types'



const cardActionBars = shape({
    likes:arrayOf(any) ,
    deleteFunc:func,
    likeFunction:func,
    editFunction:func,
    phoneFunction:func,
    phone:string,
    bizNumber:number,
});


export default cardActionBars;