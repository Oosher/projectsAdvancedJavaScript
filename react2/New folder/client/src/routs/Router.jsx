



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
import Countries from '../sandbox/hooks/useEffect/Countries'
import Weather from '../pages/Weather'
import Render from '../sandbox/render/Render'
import Counter2 from '../sandbox/render/Counter2'
import StateColorChange from '../sandbox/hooks/allHookTasks/StateColorChange'
import StateBorderChange from '../sandbox/hooks/allHookTasks/StateBorderChange'
import MemoMyData from '../sandbox/hooks/allHookTasks/MemoMyData'
import ShowData from '../sandbox/hooks/allHookTasks/ShowData'
import Form from '../sandbox/hooks/stateHook/Form'
import Fadfad from '../sandbox/context/Fadfad'
import Form2 from '../sandbox/form/Form2'
import OfficialForm from '../sandbox/form/OfficialForm'
import ImportedForm from '../users/forms/ImportedForm'
import FavoriteCards from '../pages/FavoriteCards'
import MyCards from '../pages/MyCards'


export default function Router() {
    return (
        
        <Routes>
            <Route index path={ROUTS.ROOT} element={<CardPage/>}/>
            <Route path={ROUTS.ABOUT} element ={<AboutPage/>}/>
            <Route path={ROUTS.FAVCARDS} element ={<FavoriteCards/>}/>
            <Route path={ROUTS.MYCARDS} element ={<MyCards/>}/>
            <Route path={ROUTS.ERROR} element ={<ErrorPage/>}/>
            <Route path={ROUTS.LOGIN} element ={<LoginPage/>}/>
            <Route path={ROUTS.REGISTER} element ={<RegisterPage/>}/>
            <Route path={`${ROUTS.CARDDETAILS}/:id`} element ={<CardDetails/>}/>
            <Route path={ROUTS.FORM} element ={<ImportedForm/>}/>
            <Route path={ROUTS.SANDBOX} element ={<SandBox/>}>
                <Route path='counter' element={<Counter/>}/>
                <Route path='myinfo' element={<MyInfo/>}/>
                <Route path='todo' element={<ToDoList/>}/>
                <Route path='useeffect' element={<UseEffectHook/>}/>
                <Route path='countries' element={<Countries/>}/>
                <Route path='render' element={<Render/>}/>
                <Route path='counter2' element={<Counter2/>}/>
                <Route path='colorchange' element={<StateColorChange/>}/>
                <Route path='borderchange' element={<StateBorderChange/>}/>
                <Route path='mydata' element={<MemoMyData/>}/>
                <Route path='showdata' element={<ShowData/>}/>
                <Route path='form' element={<Form/>}/>
                <Route path='fadfad' element={<Fadfad/>}/>
                <Route path='form2' element={<Form2/>}/>
                <Route path='offform' element={<OfficialForm/>}/>
            </Route>
            <Route path={ROUTS.WEATHER} element ={<Weather/>}/>
            
        </Routes>
    )
}
