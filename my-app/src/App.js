import React, { Component } from 'react';
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// Script
import "./scripts/script";

// Pages
import Home from "./pages/_Home";

class App extends Component {
    render() {
        return (
            // <Router>
            //     <Routes>
            //         <Route path="/" element={Home} />
            //     </Routes>
            // </Router>
            <Home />
        );
    }
}

export default App;
