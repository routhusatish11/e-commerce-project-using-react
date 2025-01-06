import Header from "./satish/navbar";
import Products from "./satish/product"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products1 from "./satish/ProductItemdetails";
import Home from "./satish/Home"

import Cartitems from "./satish/Cart"
import About from "./satish/About"
import Contact from "./satish/contact";

function App() {
  return (
    
    <>

      <BrowserRouter>
        <Header />
        <Routes>
         
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products1 />} /> 
          <Route path="/cartitems" element={<Cartitems/>}/>
          <Route path ="/About" element={<About/>}/>
          <Route path ="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
