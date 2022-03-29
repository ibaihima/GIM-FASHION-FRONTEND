import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router";
import Sweaters from './Sweaters';
import Sneakers from './Sneakers';
import Bottoms from './Bottoms'
import Header from './Header'
import Home from './Home';


function App() {
  const [cloths, setCloths] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/cloths")
    .then(res => res.json())
    .then((clothsData) => {
        // console.log(clothsData)
        setCloths(clothsData)
    })
  }, []);

  return (
    <div className="App">
      <Header /> 
        <Switch>
          <Route exact path="/">
            <Home cloths={cloths}/>
          </Route> 
          <Route path="/sweaters">
            <Sweaters />
          </Route>
          <Route path="/sneakers">
            <Sneakers />
          </Route>
          <Route path="/bottoms">
            <Bottoms />
          </Route>
        </Switch>
    </div>
  )
}

export default App;
