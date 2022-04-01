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
  const [userItems, setUserItems] = useState([]);

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
  
  useEffect(() => {
    if (loginUser.id){
    fetch(`http://localhost:9292/users/${loginUser.id}`)
        .then(res => res.json())
        .then((userItemsData) => {
            setUserItems(userItemsData)
    })}
  }, [loginUser]);

  function onLogin (username, password){
    let filteredUser = users.find(user => user.username === username && user.password === password)
    setLoginUser(filteredUser)
  }

  function handleAddToCart(clickedCloth) {
    if (loginUser.id){
      fetch(`http://localhost:9292/users/${loginUser.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          user_id: loginUser.id,
          cloth_id: clickedCloth.id         
         })
      })
      .then(res => res.json())
      .then((addedNewItem) => {
          console.log(userItems)
          setUserItems([...userItems, addedNewItem])
      }
      )
    }
    else{
      alert("You are not logged in")
    }
  }
  
  function handleRemoveFromCart(clickedCloth) {
    if (loginUser.id){
      fetch(`http://localhost:9292/cloths/${clickedCloth.id}/${loginUser.id}`, {
        method: 'DELETE'
      })
      .then(resp=> resp.json())
      .then(data=>{
        const filteredItems = userItems.filter(item => item.id !== data.cloth_id)
        setUserItems(filteredItems)
      })
    } else{
      alert("You are not logged in")
    }
  }

  return (
    <div className="App">
      <Header loginUser={loginUser}/> 
        <Switch>
          <Route exact path="/">
            <Home cloths={cloths}/>
          </Route> 
          <Route path="/sweaters">
            <Sweaters handleAddToCart={handleAddToCart}/>
          </Route>
          <Route path="/sneakers">
            <Sneakers handleAddToCart={handleAddToCart}/>
          </Route>
          <Route path="/bottoms">
            <Bottoms handleAddToCart={handleAddToCart}/>
          </Route>
          <Route path ="/login">
            <Login onLogin={onLogin} users={users}/>
          </Route>
          <Route path ="/about">
            <About />
          </Route>
          <Route path ="/shopping-cart">
            <ShoppingCart userItems={userItems} handleRemoveFromCart={handleRemoveFromCart} loginUser={loginUser}/>
          </Route>
        </Switch>
    </div>
  )
}

export default App;