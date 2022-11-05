import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Blog from './pages/Blog'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboar' element={<Dashboard />} />
      <Route path='/blog' element={<Blog />} />
    </Routes>
  )
}

export default App
