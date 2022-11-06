import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import { Header, Navbar, Content } from "./components";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Navbar/>
        <Content />
    </BrowserRouter>
  );
}

export default App;