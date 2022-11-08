// App.js
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Preparacion from './pages/Preparacion'
import Listo from './pages/Listo'
import Menu from './pages/Menu';


function App() {
  return (
   <Router>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/preparacion" element={<Preparacion/>}/>
        <Route path="/listo" element={<Listo/>}/>
      </Routes>
   </Router> 
  )
}

export default App;
