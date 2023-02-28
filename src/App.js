import { BrowserRouter, Routes, Route } from "react-router-dom" //React-Router
import React from "react";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contests from './pages/Contests'
import Council from './pages/Council'
import JoinIEEE from './pages/JoinIEEE'
import News from './pages/News'
import Projects from './pages/Projects'

export default function App(){
  return (
    <BrowserRouter>             
    <div className="App">
      <Navbar/> 
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contests' element={<Contests />} />
        <Route path='/council' element={<Council />} />
        <Route path='/joinieee' element={<JoinIEEE />} />
        <Route path='/news' element={<News />} />
        <Route path='/Projects' element={<Projects />} /> 
      </Routes>
      <Footer/>
    </div>
  </BrowserRouter>
  );
}

