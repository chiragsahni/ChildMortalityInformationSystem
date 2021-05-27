import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// import { Message } from 'primereact/message';

import GDP from './components/GDP';
import LER from './components/LER';
import ED from './components/Education';
import HC from './components/HealthCare';
import FER from './components/FemaleYears'
import ChartDisplay from './containers/ChartDisplay';
import HomePage from './containers/HomePage';
import Dashboard from './containers/Dashboard';
import PageError from './components/PageError';


// const isUserLoggedIn = false;  

export default class App extends Component{
  componentDidMount(){
    if (!sessionStorage.getItem('isUserLoggedIn')){
        sessionStorage.setItem('isUserLoggedIn',true)
        this.showInfo();
      }
}
showInfo = () => {
  alert(
    
      "PLEASE NOTE: This application is the result of the efforts of students at Rensselaer’s for ITWS Project."+ 
      "It is presented here to showcase the efforts of our students for building an Information System." + 
      "The application may not meet all of the standards one might expect of a production commercial product."

  )
}
  render() {
    return (
  
      <Router>
        <div className="App">
          <Switch>
            <Route path='/Home' exact component={HomePage} />
            <Route path='/Home/Dashboard' exact component={Dashboard}></Route>
            <Route path='/Home/ChartDisplay' exact component={ChartDisplay} />
            <Route path='/Home/Reports/GDP' exact component={GDP}/>
            <Route path='/Home/Reports/LER' exact component={LER}/>
            <Route path='/Home/Reports/HC' exact component={HC}/>
            <Route path='/Home/Reports/FER' exact component={FER}/>
            <Route path='/Home/Reports/ED' exact component={ED}/>
            <Route path='*' component={PageError} />
          </Switch>
        </div>
      </Router>
  
      
    );
  }
}
