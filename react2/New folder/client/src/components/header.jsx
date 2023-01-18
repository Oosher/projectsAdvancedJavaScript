
const PageHeader  = ()=>{


    let sum =5*7;

    console.log(sum);

    //cannot return more than 1 component but its is posibble by wrapping it in a <div></div> or <?></>
    return <>
    <h2>This is the page header</h2>
    <h1>brutrue {sum}</h1>
    </>;

}


export default PageHeader;