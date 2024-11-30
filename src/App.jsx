
import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Maincomponent from './components/Maincomponent'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Maincomponent/>}/>
      </Routes>
      
   
 
    
    </BrowserRouter>
    </div>
  )
}

export default App
