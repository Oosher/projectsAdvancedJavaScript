import "./header.css";
import { Divider, Typography } from "@mui/material";
import { node } from "prop-types";
const PageHeader  = ({title,subTitle})=>{


    //cannot return more than 1 component but its is possible by wrapping it in a <div></div> or <></?>
    return <>
    <Typography variant="h1" component="h1" color="initial">{title}</Typography>
    <Typography variant="h4" component="h2" color="initial">{subTitle} </Typography>
    <Divider  sx={{my:2}} />
    </>;

}


export default PageHeader;


PageHeader.propTypes = {

    title:node,
    subTitle:node,

}
