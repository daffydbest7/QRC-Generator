import './App.css';
import {Routes, Route } from "react-router-dom"; 
import QrCodeGenerator from './QrCodeGenerator';
import UserInput from './UserInput';


function App() {
 return (
  <div>
    <Routes>
      <Route path="/" element={<QrCodeGenerator/>}/>
      <Route index path="/auth/generate/" element={<UserInput/>}/>
    </Routes>
  </div>
 )
}

export default App;
