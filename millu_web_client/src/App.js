import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

import MainPage from './pages';
import NotFound from './pages/404';
import MusicPage from './pages/music';
import SoftDev from './pages/softdev';
import Life from './pages/life';
import Shop from './pages/shop';
import Basket from './components/basket/Basket';

function App() {
  return (
      <Router>
        <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path='/404' component={NotFound}/>
        <Route exact path="/music" component={MusicPage}/>
        <Route exact path="/softdev" component={SoftDev}/>
        <Route exact path="/life" component={Life}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/basket" component={Basket}/>
        <Redirect to= '/404'/>
        </Switch>
      </Router>
  );
}

export default App;
