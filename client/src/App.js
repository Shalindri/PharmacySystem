import React, {Component} from "react";
import {Router, Route} from "react-router";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Landing from "./components/Layout/Landing";

import "./App.css";
import AddBatch from "./components/drug/AddBatch";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>

                <Landing {...this.props}/>

                <Footer/>
            </div>
        );
    }
}

export default App;
