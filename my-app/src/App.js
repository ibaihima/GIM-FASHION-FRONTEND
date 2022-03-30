import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router";
import Sweaters from './Sweaters';
import Sneakers from './Sneakers';
import Bottoms from './Bottoms'
import Header from './Header'
import Home from './Home';
import Login from './Login';
import About from './About';
import ShoppingCart from './ShoppingCart'; 


function App() {
  const [cloths, setCloths] = useState([]);
  const [users, setUsers] = useState([]);
  const [loginUser, setLoginUser] = useState({});

  //fetch for cloths below
  useEffect(() => {
    fetch("http://localhost:9292/cloths")
    .then(res => res.json())
    .then((clothsData) => {
        setCloths(clothsData)
    })
  }, []);
  //fetch for users below
  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then(res => res.json())
    .then((userData) => {
        setUsers(userData)
    })
  }, []);

  function onLogin (username, password){
    let filteredUser = users.find(user => user.username === username && user.password === password)
    setLoginUser(filteredUser)
  }

  console.log(cloths)
  return (
    <div className="App">
      <Header loginUser={loginUser}/> 
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
          <Route path ="/login">
            <Login onLogin={onLogin} users={users}/>
          </Route>
          <Route path ="/about">
            <About />
          </Route>
          <Route path ="/shopping-cart">
            <ShoppingCart loginUser={loginUser}/>
          </Route>
        </Switch>
    </div>
  )
}

export default App;
