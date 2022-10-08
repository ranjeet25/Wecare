import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Test from './Components/Test';

function App() {
  return (
    
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/test" element={<Test></Test>}></Route>
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
