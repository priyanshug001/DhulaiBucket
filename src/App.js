import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Services from './pages/Services';
import AboutSection from './pages/AboutSection';
import Pricing from './pages/Pricing';
import Booking from './pages/Booking';

function App() {
  return (
    <>
      <BrowserRouter basename="dhulaibucket">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/aboutsection' element={<AboutSection />} />
          <Route path='/services' element={<Services />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/booking' element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
