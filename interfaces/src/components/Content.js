import React from "react";
import {Routes, Route} from "react-router-dom";
import {Home, Publisher, Comic} from "../pages";

const Content = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="comics" element={<Comic />}></Route>
            <Route path="publishers" element={<Publisher />}></Route>
        </Routes>
    );
};

export default Content;