import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Profile from './pages/profile';
import Admin from './pages/admin';
 

function App() {
  return (
     <BrowserRouter>
      <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profile' element={<Profile/>}/>    
          <Route path='/admin' element={<Admin/>}/>    
      </Routes>
     </BrowserRouter>
  );
}

export default App;
