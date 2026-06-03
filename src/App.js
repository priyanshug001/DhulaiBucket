import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <BrowserRouter basename='dhulaibucket'>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
