import React from 'react';
// import ReactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Offers }  from './Components/Offers';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
// import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <Offers/>
      <NavBar/>
      <Switch>
        <Route exact path="/"><HomePage/></Route>
        <Route exact path="/product"><ProductsPage/></Route>
        <Route path="*">
        <h2>Page Not Found</h2>
      </Route>
      </Switch>
    </Router>
  );
  }

export default App;