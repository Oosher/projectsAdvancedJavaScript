



import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import CardPage from '../pages/CardPage'
import ErrorPage from '../pages/ErrorPage'
import ROUTS from './routsPage'

export default function Router() {
    return (
        <Routes>
            <Route index path={ROUTS.ROOT} element={<CardPage/>}/>
            <Route path={ROUTS.ABOUT} element ={<AboutPage/>}/>
            <Route path={ROUTS.ERROR} element ={<ErrorPage/>}/>
        </Routes>
    )
}
