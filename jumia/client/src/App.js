import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import CreateAccount from './components/CreateAccount/CreatAccount';
import Home from './components/Home/Home';


function App() {

  return (
    <Router>
    <div className="app">
        <div className="head">
          <Header/>
        </div>

      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/createAccount" component={CreateAccount}/>

    </div>
    </Router>
    )
}

export default App;
