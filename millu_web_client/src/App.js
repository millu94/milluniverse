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

function App() {

    const [basket, setBasket] = useState([]);


    const fetchBasket = async () => {
      setBasket(basket)
    }

    useEffect(() => {
      fetchBasket();
    }, [])

    const handleAddToBasket = async ( product, quantity ) => {
      // if item is present in basket, increase that item's quantity by one
      // if (basket === undefined){
      //   console.log("ok")
      // } else {
      //   for(var i in basket){
      //     var isProductInBasket = product in basket;
      //   }
      // }

      console.log(product in basket)
      
      if(basket.length > 0){
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
    
    // console.log(item.product.id)


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
    
    // console.log(basket);
    

    return (
        <Router>
          <Switch>
          <Route exact path="/" component={() => <MainPage basket={basket}/>}/>
          <Route exact path='/404' component={NotFound}/>
          <Route exact path="/music" component={() => <MusicPage basket={basket}/>}/>
          <Route exact path="/softdev" component={() => <SoftDev basket={basket}/>}/>
          <Route exact path="/life" component={() => <Life basket={basket}/>}/>

          <Route exact path="/shop" render={() => 
            <Shop 
            basket={basket} 
            handleAddToBasket={handleAddToBasket}
            />}
          />

          <Route exact path="/basket" render={() => 
            <Basket 
            basket={basket}
            handleUpdateBasketQty={handleUpdateBasketQty}
            handleRemoveFromBasket={handleRemoveFromBasket}
            handleEmptyBasket={handleEmptyBasket}
            />}
          />

          <Redirect to= '/404'/>
          </Switch>
          {/* <Shop basket={basket} handleAddToBasket={handleAddToBasket}/> */}
        </Router>
        
  );
}

export default App;
