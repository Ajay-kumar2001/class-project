
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Addprod from './Addprod';
import Cart from './Cart';
import Dashboard from './Dashboard';
import Home from './Home';
import Listusers from './Listusers';
import Register from './Register';
import About from './About'
import Login from './Login';
import Nav from './Nav'
import Gcon from './Gcon';
import { useState } from 'react';
import Logout from './Logout';

function App() {
  let upcred=(data)=>{
    setUcre({...ucre,...data})
  }
  let [ucre,setUcre]=useState({"isadmin":false,"isuser":false,"islogin":false,"token":"","userid":"","upcred":upcred})

  return (
    <BrowserRouter>
    <Gcon.Provider value={ucre}>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/listusers' element={<Listusers/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/addprod' element={<Addprod/>}/>
      <Route path="/logout" element={<Logout/>}/>
      
    </Routes>
    </Gcon.Provider>
    </BrowserRouter>
   
   
  );
}

export default App;
