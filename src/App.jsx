import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';



import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar';

const App= ()=>{
 return (
  <>
  <Navbar/>
  <Switch>
    <Route exact path="/" component={Home}/>
      <Route exact path="/services" component={Services}/>
      <Route exact path="/about" component={About}/>
       <Route exact path="/contact" component={Contact}/>
       <Redirect to="/"/>
     
  </Switch>
 
 </>

 )
}

export default App