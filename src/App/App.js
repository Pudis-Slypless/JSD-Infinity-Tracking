import React, { useState } from "react";

import Main from "../Pages/Main/main";
import Login from "../Pages/Login/login";



import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App(){

  return (
   

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
