import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login'
import Hearder from './Hearder'
import Menunavbar from './Menunavbar'
import frmContent from './Content'
import Footer from './footer'
import frmPreparework from './Preparework'
import PrepareAdd from './PrepareAdd'
import Receivejob from './Receivejob'
import Readqrcode from './Readqrcode'
import Sendjob from './Sendjob'
import Joball from './Joball'
import Scanqrcode from './Scanqrcode'
import Linkurl from './configurl';
//import { Route, Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";





export default class App extends Component {

  render() {
    return (
      
      <div className="App">
        {
          sessionStorage.getItem('sessStr') ? (
            <div>
              <Router basename="/Staffcrib">

                <Menunavbar/>
                <Hearder/>
                
                <Route exact path="/" component={frmContent} />
                <Route path="/Preparework" component={frmPreparework} />
                <Route path="/PrepareAdd" component={PrepareAdd} />
                <Route path="/Receivejob" component={Receivejob} />
                <Route path="/Readqrcode" component={Readqrcode} />
                <Route path="/Sendjob" component={Sendjob} />
                <Route path="/Joball" component={Joball} />
                <Route path="/Scanqrcode" component={Scanqrcode} />

              </Router>
            </div>
          ) : (
            <Login/>
          )
        }        
       
      </div>

    )
  }
}


