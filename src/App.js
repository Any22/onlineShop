import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';


function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/'><HomePage/></Route>
        <Route exact path="/product"><ProductsPage/></Route>
        </Switch>
    </Router>
  );
  }

export default App;