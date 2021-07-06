import React, {useState, useEffect, location} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import MainPage from './pages';
import NotFound from './pages/404';
import MusicPage from './pages/music';
import SoftDev from './pages/softdev';
import Life from './pages/life';
import Shop from './pages/shop';
import Basket from './components/basket/Basket';
import Checkout from './components/checkoutForm/checkout/Checkout'

function App() {

    const [basket, setBasket] = useState([]);


    const fetchBasket = async () => {
      setBasket(basket)
    }

    useEffect(() => {
      fetchBasket();
    }, [])

    const handleAddToBasket = async ( product, quantity ) => {

      const isItemInBasket = basket.some(basketItem => basketItem.product.id === product.id)
      
      if(isItemInBasket){
        for(var i in basket){
          if(basket[i].product.id === product.id){
            basket[i].quantity += 1;
            setBasket([...basket])
          } 
        }
      } else {
        const item = { product, quantity }
        setBasket([...basket, item]);
      }
    }

    const handleUpdateBasketQty = async ( productId, quantity ) => {
      for(var i in basket){
        if(basket[i].product.id === productId){
          basket[i].quantity = quantity;
        } 
        if(basket[i].quantity < 1){
          basket.splice(i, 1)
        }
        setBasket([...basket])
      }  
      console.log(productId, quantity);
      console.log(basket)
    }

    const handleRemoveFromBasket = async ( productId ) => {
      for(var i in basket){
        if(basket[i].product.id === productId){
          basket.splice(i, 1)
        }
        setBasket([...basket])
      }
    }
    
    const handleEmptyBasket = async () => {
      setBasket([]);
    }

    const basketQty = basket.reduce((tempTotal, item) => {
      return tempTotal + item.quantity
    }, 0)

    return (
        <Router>
          <Switch>
          <Route exact path="/" component={() => <MainPage basketQty={basketQty}/>}/>
          <Route exact path='/404' component={NotFound}/>
          <Route exact path="/music" component={() => <MusicPage basketQty={basketQty}/>}/>
          <Route exact path="/softdev" component={() => <SoftDev basketQty={basketQty}/>}/>
          <Route exact path="/life" component={() => <Life basketQty={basketQty}/>}/>

          <Route exact path="/shop" render={() => 
            <Shop 
            basketQty={basketQty}
            handleAddToBasket={handleAddToBasket}
            />}
          />

          <Route exact path="/basket" render={() => 
            <Basket 
            basket={basket}
            basketQty={basketQty}
            handleUpdateBasketQty={handleUpdateBasketQty}
            handleRemoveFromBasket={handleRemoveFromBasket}
            handleEmptyBasket={handleEmptyBasket}
            />}
          />

          <Route exact path="/checkout">
            <Checkout basket={basket} basketQty={basketQty}/>

          </Route>

          <Redirect to= '/404'/>
          </Switch>
          {/* <Shop basket={basket} handleAddToBasket={handleAddToBasket}/> */}
        </Router>
        
  );
}

export default App;
