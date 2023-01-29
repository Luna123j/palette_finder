import './App.css';
import NavBar from './Component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Component/Login';
import Signup from './Component/Signup';
import Home from './Component/Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
