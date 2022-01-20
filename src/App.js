import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAllPhones } from './api';
import './App.css';
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import New from "./Components/New/New";
import Tabela from "./Components/Tabela/Tabela";
import Update from "./Components/Update/Update";


function App() {  

  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tabela/>}/>
          <Route path="/update/:id" element={<Update/>}/>
          <Route path="/new" element={<New/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
