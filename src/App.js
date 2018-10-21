import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';
import Navbar from "./components/header/CustomNavbar";
import Panel1 from "./components/content/Panel1/Panel1";
import Panel2 from "./components/content/Panel2/Panel2";
import Panel3 from "./components/content/Panel3/Panel3";
import Panel4 from "./components/content/Panel4/Panel4";
import Panel5 from "./components/content/Panel5/Panel5";
import Panel6 from "./components/content/Panel6/Panel6";
import Panel7 from "./components/content/Panel7/Panel7";




class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Panel1/>
                    <Panel2/>
                    <Panel3/>
                    <Panel4/>
                    <Panel5/>
                    <Panel6/>
                    <Panel7/>
                </div>
            </Router>
        );
    }
}

export default App;