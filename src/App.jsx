import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";
import { useState, useEffect} from "react";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart";
//import Welcome from "./components/Welcome";

const App = () => {

  return (
    <CartContextProvider>
    <BrowserRouter>
    <div>
    <Navbar/>
    <Routes>
      <Route path={"/"} element = {<ItemListContainer/>} />
      <Route path={"/category/:id"} element = {<ItemListContainer/>} />
      <Route path={"/item/:id"} element = {<ItemDetailContainer/>} />
      <Route path={"/cart"} element = {<Cart/>} />
    </Routes>
    <Footer/>
    </div> 
    </BrowserRouter>
    </CartContextProvider>
  );
}


export default App;
