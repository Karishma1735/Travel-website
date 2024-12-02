
import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Maincomponent from './components/Maincomponent'
import Buscomponent from './components/Buscomponent'
import Traincomponent from './components/Traincomponent'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Maincomponent/>}/>
        <Route path='/buscomponent' element={<Buscomponent/>}/>
        <Route path='/traincomponent' element={<Traincomponent/>}/>
      </Routes>
      
   
 
    
    </BrowserRouter>
    </div>
  )
}

export default App
