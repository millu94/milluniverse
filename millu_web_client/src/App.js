import React, {useState, useEffect} from 'react';
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
        
      const item = { product, quantity }
      setBasket([...basket, item]);
    }

    // const handleUpdateBasketQty = async ( productId, quantity ) => {
    //   console.log(productId, quantity);
    // }

    const handleRemoveFromBasket = async ( productId ) => {
      // if the productId matches a product in the basket with the same id, remove the product(s) from basket
      for(var i in basket){
        if(basket[i].product.id === productId){
          console.log(basket[i].product.id)
          basket.splice(i, 1)
        }
        console.log(basket)
        // setBasket(...basket)
      }


      // for (let i = 0; i <= basket.length; i++){
      //   if(basket[i].product.id === undefined){
      //     return
      //   } else {
      //     console.log(basket[i].product.id)
      //   }
        // if (productId === basket[i].product.id){
        //   basket.splice(i);
        // }
      // }

      // console.log(productId);
      // console.log(basket[0].product.id);
      // console.log(basket[0].product);
      // const itemToRemove = basket.product.find(id => id === productId);
    }
    
    const handleEmptyBasket = async () => {
      setBasket([]);
    }
    
    console.log(basket);
    

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
