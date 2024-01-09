import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Profile from './pages/profile';
import Admin from './pages/admin';
import { useState } from 'react';
 

function App() {
  const [isLoggedIn,setLoggedIn] = useState(false);
  const [user,setUser] = useState({});
  return (
     <BrowserRouter>
      <Routes>
          <Route path='/' element={ <Home user={user} setUser={setUser} setLoggedIn ={setLoggedIn}/>}/>
          <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} setUser={setUser}/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profile' element={<Profile/>}/>    
          <Route path='/admin' element={<Admin/>}/>    
      </Routes>
     </BrowserRouter>
  );
}

export default App;
