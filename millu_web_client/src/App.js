import React, {useState, useEffect} from 'react';
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

    const [basket, setBasket] = useState([]);


    const fetchBasket = async () => {
      setBasket(basket)
    }

    useEffect(() => {
      fetchBasket();
    }, [])

    const handleAddToBasket = async ( product, quantity ) => {
        
      const item = { product, quantity }
      setBasket([...basket, item]);
      console.log(basket)
    }

    console.log(basket)

    return (
        <Router>
          <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path='/404' component={NotFound}/>
          <Route exact path="/music" component={MusicPage}/>
          <Route exact path="/softdev" component={SoftDev}/>
          <Route exact path="/life" component={Life}/>
          <Route exact path="/shop" render={() => <Shop basket={basket} handleAddToBasket={handleAddToBasket}/>}/>
          <Route exact path="/basket" render={() => <Basket basket={basket}/>}/>
          <Redirect to= '/404'/>
          </Switch>
          {/* <Shop basket={basket} handleAddToBasket={handleAddToBasket}/> */}
        </Router>
        
  );
}

export default App;
