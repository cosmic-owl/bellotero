import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from "./components/header/CustomNavbar";
import Panel1 from "./components/content/Panel1/Panel1";




class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Panel1/>
                </div>
            </Router>
        );
    }
}

export default App;