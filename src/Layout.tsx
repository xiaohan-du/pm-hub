import React from 'react';
import Home from './pages/Home';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Champions from './pages/Champions';

const Layout = () => {
    return (
        <Router>            
            <Routes>
                <Route path="/champions" element={<Champions />}></Route>
                <Route path="/" element={<Home />}></Route>
            </Routes>

        </Router>
    )
}

export default Layout;