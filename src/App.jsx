import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

// import Resume from './components/Resume'
import Project from './components/Project'
// import Footer from './components/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Projects' element={<Project/>}/>
        {/* <Route path='/Resume' element={<Resume/>}/> */}
        {/* <Route path='/Footer' element={<Footer/>}/> */}

     
      </Routes>
      {/* <Footer /> */}
     
    </BrowserRouter>
  )
}

export default App
