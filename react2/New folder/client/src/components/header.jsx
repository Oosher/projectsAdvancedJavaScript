import "./header.css";
import Button from '@mui/material/Button'
const PageHeader  = ()=>{

    
//class task

const namesArray =["shimon","bibi","dias","muas","shimon"]

//class task 2

const Student = {
    firstName:"yosef ",
    lastName:"shmuelove ",
    age:16,
    phoneNumber:"05084848483 "
}

let student = JSON.stringify(Student);

student = student.replaceAll("{","");
student = student.replaceAll("}","");
student = student.replaceAll(",","");
student = student.replaceAll(`"`,` `);






    //cannot return more than 1 component but its is possible by wrapping it in a <div></div> or <?></>
    return <>
    <h2 style={{color:"cyan",fontSize:"2rem"}}>This is the page header</h2>
    <h1 className="secondHeader">brutrue {namesArray[namesArray.findIndex((name)=>{
        return name[0]==="b";
    })]}</h1>

    <h1>{namesArray.map((name)=>{
        return <h3>{name}</h3>
    })}</h1>

    <h1>{student}</h1>
    <Button variant="text" color="secondary">
      ads
    </Button>
    </>;

}


export default PageHeader;