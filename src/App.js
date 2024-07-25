import "./App.css"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About/about";
import Home from "./Pages/Home/home";
import Product from "./Pages/Product/product";
import Trending from "./Pages/Trending/trending";
import Contact from "./Pages/Contact/contact";
import Service from "./Pages/Service/service";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/trend" element={<Trending />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/service" element={<Service />}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
