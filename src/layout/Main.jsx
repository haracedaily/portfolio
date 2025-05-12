import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "../pages/Profile.jsx";

function Main(props) {
    return (
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Profile/>} />
        </Routes>
        </BrowserRouter>
    );
}

export default Main;