import './App.css';
import NavBar from './Component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Component/Login';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
        <Routes>
          <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
