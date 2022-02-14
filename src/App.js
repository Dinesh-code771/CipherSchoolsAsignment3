
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Componets/Login';
import Register from './Componets/Register';
import DisplayRecipies from './Componets/DisplayRecipies';
import AddRecipie from "./Componets/AddRecipie";
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/DisplayRecipies" element={<DisplayRecipies/>}></Route>
      <Route path="/AddRecipie" element={<AddRecipie/>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
