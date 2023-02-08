import { arrayOf, number, shape, string } from "prop-types";
import scorerType from "./scorerType";

const detailsType = shape({
                nameTeam1: string,
                nameTeam2: string,
                goalTeam1: number,
                goalTeam2: number,
                goalScorers1:arrayOf(scorerType),
                goalScorers2:arrayOf(scorerType)});


export default detailsType;