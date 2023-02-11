import './App.css';
import NavBar from './Component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Component/Login';
import Signup from './Component/Signup';
import { useSelector, useDispatch } from 'react-redux'
import { loggedin, reset } from './redux/isLoggedIn';
import Home from './Component/Home';
import { useEffect } from 'react';
import axios from 'axios';
import Upload from './Component/Upload';
import SavedImage from './Component/SavedImage';

function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('/islogin', { withCredentials: true })
      .then(res => {
        console.log(res.data)
        if (res.data.logged_in) {
          dispatch({ type: "isLoggedIn/loggedin", payload: res.data.user });
        } else {
          dispatch(reset())
        }
      })
      .catch(error => console.log('api errors:', error))
  }, [])

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Signup />} />
        <Route path="/upload" element={<Upload />} />
        <Route path='/history' element={<SavedImage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
