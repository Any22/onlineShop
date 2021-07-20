import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Offers }  from './Components/Offers';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
// https://www.geeksforgeeks.org/how-to-create-shopping-cart-button-in-reactjs/

function App() {
  return (
    <Router>
      <Offers/>
      <NavBar/>
      <Switch>
        <Route exact path='/'><HomePage/></Route>
        <Route exact path="/product"><ProductsPage/></Route>
      </Switch>
    </Router>
  );
  }

export default App;