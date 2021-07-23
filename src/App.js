import React from 'react';
// import ReactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Offers }  from './Components/Offers';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
// https://www.geeksforgeeks.org/how-to-create-shopping-cart-button-in-reactjs/
// https://stackoverflow.com/questions/43351752/react-router-changes-url-but-not-view

function App() {
  return (
    <Router>
      <Offers/>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path="/product" component={ProductsPage}/>
        <Route exact path="/cart" component={CartPage}/>
      </Switch>
    </Router>
  );
  }

export default App;