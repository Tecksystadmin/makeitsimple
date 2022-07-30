import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./Components/index";
import Footer from "./Components/Pages/Footer";
import Header from "./Components/Pages/Header";
import About from "./Components/Pages/About";
import Portfolio from "./Components/Pages/Portfolio";
import Price from "./Components/Pages/Price";
import Testimonial from "./Components/Pages/Testimonial";


function App() {
  return (
    <Router>
      <div>
        <Header/>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/price" element={<Price/>} />
            <Route path="/testimonial" element={<Testimonial/>} />
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
