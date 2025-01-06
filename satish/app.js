import Header from "./satish/navbar";
import Products from "./satish/product"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products1 from "./satish/ProductItemdetails";
import Home from "./satish/Home"
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
         
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products1 />} /> {/* Dynamic route */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
