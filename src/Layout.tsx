import React from 'react';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Champions from './pages/Champions';
import Navbar from './components/Navbar';

const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/champions" element={<Champions />}></Route>
                <Route path="/home" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Layout;