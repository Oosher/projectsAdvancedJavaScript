



import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import CardDetails from '../pages/CardDetails'
import CardPage from '../pages/CardPage'
import ErrorPage from '../pages/ErrorPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import SandBox from '../sandbox/SandBox'
import ROUTS from './routsPage'

import Counter from '../sandbox/hooks/stateHook/Counter'
import MyInfo from '../sandbox/hooks/stateHook/MyInfo'
import ToDoList from '../sandbox/hooks/stateHook/ToDoList'
import UseEffectHook from '../sandbox/hooks/useEffect/UseEffectHook'

export default function Router() {
    return (
        
        <Routes>
            <Route index path={ROUTS.ROOT} element={<CardPage/>}/>
            <Route path={ROUTS.ABOUT} element ={<AboutPage/>}/>
            <Route path={ROUTS.ERROR} element ={<ErrorPage/>}/>
            <Route path={ROUTS.LOGIN} element ={<LoginPage/>}/>
            <Route path={ROUTS.REGISTER} element ={<RegisterPage/>}/>
            <Route path={`${ROUTS.CARDDETAILS}/:id`} element ={<CardDetails/>}/>
            <Route path={ROUTS.SANDBOX} element ={<SandBox/>}>
                <Route path='counter' element={<Counter/>}/>
                <Route path='myinfo' element={<MyInfo/>}/>
                <Route path='todo' element={<ToDoList/>}/>
                <Route path='useeffect' element={<UseEffectHook/>}/>
            </Route>
            
        </Routes>
    )
}
