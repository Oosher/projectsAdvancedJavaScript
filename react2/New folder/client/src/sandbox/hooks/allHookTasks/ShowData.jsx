










import { Box, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import MyButton from './MyButton'
import AbcIcon from "@mui/icons-material/Abc";
import useHook1 from '../customHooks/hook1';
import useAlert from '../customHooks/useAlert';


export default function ShowData() {

    const {counter,increase,decrease,reset} = useHook1(0,3)


    const {showAlert,handleAlert} = useAlert();

    const text1 = useRef();

    const text2 = useRef();

    const [useCount,setUseCount] = useState(0)



    const memoIcon = useMemo(()=>AbcIcon,[])



    const showText =  useCallback(()=>{

        console.log(text1.current.value);
        console.log(text2.current.value);

    },[])

    
    const showCapitalText = useCallback(()=>{

        console.log(text1.current.value.toUpperCase());
        console.log(text2.current.value.toUpperCase());

        setUseCount((prev)=>prev+1);

    } ,[] )


    


    return (


        <Container sx={{display:"flex",flexDirection:"column",marginTop:"6vh",width:"fit-content"}}>
            <Box>
                <TextField label="Text1"  inputRef={text1} />
                <TextField label="Text1"  inputRef={text2} />
            </Box>
                <Typography variant="body1" color="initial" sx={{justifySelf:"center",alignSelf:"center",margin:"5px"}}  >{useCount}</Typography>
                <Typography variant="body1" color="initial" sx={{justifySelf:"center",alignSelf:"center",margin:"5px"}}  >{counter}</Typography>
                {showAlert &&<Typography variant="body1" color="initial" sx={{justifySelf:"center",alignSelf:"center",margin:"5px"}}  >Alert</Typography>}
                <AbcIcon/>
            <Box  sx={{display:"flex" ,justifyContent:"space-between"}}>
                <MyButton text="Show Fields" onclick={showText}>
                    {memoIcon}
                </MyButton>
                <MyButton text="Show Capital Fields" onclick={showCapitalText}/>
                <MyButton text="+" onclick={increase}/>
                <MyButton text="-" onclick={decrease}/>
                <MyButton text="reset" onclick={reset}/>
                <MyButton text="Alert" onclick={handleAlert}/>

            </Box>
        </Container>
    )
}
