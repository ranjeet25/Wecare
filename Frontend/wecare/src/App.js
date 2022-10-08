import logo from './logo.svg';
import './App.css';
import Signin from './Components/Signin';
import Landing from './Components/Landing'
import Login from './Components/Login';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Test from './Components/Test';

function App() {
  return (
    
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/test" element={<Test></Test>}></Route>
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
