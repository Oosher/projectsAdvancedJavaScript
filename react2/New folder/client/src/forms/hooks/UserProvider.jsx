


import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {getUser,getToken} from '../utils/localStorageService';
const UserProvide = createContext();
export default function UserProvider({children}) {

    const  [user,setUser] = useState(null);

    const [token,setToken] = useState(getToken());

    const value =  useMemo(()=>({user,setUser,token,setToken}), [user,token]);

    useEffect (()=>{
        if(!user){
            setUser(getUser());

        }
    },[user]);

    return (
        <UserProvide.Provider value={value} >
            {children}
        </UserProvide.Provider>
    )
}





export const useDataProvider = ()=>{

const context = useContext(UserProvide);

    if (!context) {
    throw new Error("useData must be used within a NameProvider");
    } 

    return context;

}
