import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Profile from './pages/profile';
import Admin from './pages/admin';
import { createContext, useEffect, useState } from 'react';
import {userContext} from "./context"
import Cart from './components/Cart';

function App() {
  const [isLoggedIn,setLoggedIn] = useState(false);
  const [user,setUser] = useState({});
  const [cart,setCart] = useState([]);

  return (
    <userContext.Provider value={user}>
     <BrowserRouter>
      <Routes>
          <Route path='/' element={ <Home setLoggedIn ={setLoggedIn} setUser={setUser} setCart={setCart}  cart={cart}/>}/>
          <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} setUser={setUser} />}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profile' element={<Profile/>}/>    
          <Route path='/cart' element={<Cart cartProducts = {cart}/>}/>    
          <Route path='/admin' element={<Admin/>}/>    
      </Routes>
     </BrowserRouter>
     </userContext.Provider>
  );
}

export default App;
