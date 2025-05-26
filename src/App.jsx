import React from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/fonts.min.css";
import "./assets/css/kaiadmin.min.css";
import "./assets/css/plugins.min.css";

import Home from "./pages/Home";
import Form from "./pages/Form";
import Table from "./pages/Table";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aside from "./components/Aside";

const App = () => {
  return (
    <>
     <Router>
      <Aside />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Form' element={<Form />} />
        <Route path='/Table' element={<Table />} />
      </Routes>
     </Router>
    </>
  );
};

export default App;
