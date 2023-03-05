





import React, { createContext, useContext } from 'react'



const context = createContext();

export default function SherdData({children}) {
    const data = {dat1:2222,dat2:41235};

    return <context.Provider value={data}>{children}</context.Provider>;
    
}



export const useData = ()=>{

const newContext = useContext(context);

if (!newContext) {
    throw new Error("useData must be used within a NameProvider");
} 
return newContext;



}
