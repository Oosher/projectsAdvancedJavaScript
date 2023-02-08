import { arrayOf, shape } from "prop-types";
import gameType from "./gameType";







const gameArrayType = shape(arrayOf(gameType));

export default gameArrayType.isRequired;