import React from "react";
import { Route, Routes } from "react-router";
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Cars from "./Pages/Cars";
import Home from "./Pages/Home";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />} />
              <Route path='/cars' element={<Cars />} />
              
      </Routes>
    </>
  );
}

export default App;
