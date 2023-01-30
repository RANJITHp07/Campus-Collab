import { BrowserRouter,Routes,Route } from "react-router-dom";
import React,{useState} from 'react'
import './App.css';
import Home from "./pages/home/Home";
import Sign from "./pages/signup/signup"
import Login from "./pages/login/login"
import Clgsignup from "./pages/clgsignup/clgsignup";
import Community from "./pages/community/community";
import College from "./pages/college/college";
import Tech from "./pages/tech/tech";

function App() {
  const[college,setcollege]=useState("")
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Sign/>}/>
      <Route path="/login" element={<Login/>}/>
       <Route path="/clgsignup" element={<Clgsignup/>}/>
       <Route path="/community" element={<Community/>}/>
       <Route path="/cusat" element={<College/>}/>
       <Route path="/cusat/tech" element={<Tech/>}/>

     </Routes>

  </BrowserRouter>
  );
}

export default App;
