import React from 'react'
import { Home } from './Home'
import { Route, Routes } from 'react-router-dom'
import { Cuisine } from './Cuisine'

export const Pages = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cuisine' element={<Cuisine/>}/>
        </Routes>
        <Home/>
    </div>
  )
}
