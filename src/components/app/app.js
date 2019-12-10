import React from 'react';
import CoffeeHouse from "../page/coffee-house";
import {Route, Switch} from "react-router-dom";

import './app.sass'
import CoffeePage from "../page/coffee-page";
import ForYourPleasure from "../page/for-your-pleasure";
import ShopItem from "../page/coffee-page/shop/shopItem/shopItem";

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path='/' exact component={CoffeeHouse}/>
          <Route path='/coffee-page' exact component={CoffeePage}/>
          <Route path='/coffee-page/:id' render={
            ({match}) => {
              const {id} = match.params;
              return <ShopItem bookId={id}/>
            }
          }/>
          <Route path='/for-your-pleasure' exact component={ForYourPleasure}/>
        </Switch>
    </div>
  );
}

export default App;
