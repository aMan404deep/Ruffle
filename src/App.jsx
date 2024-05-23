import React, { useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MobNavbar from "./components/MobNavbar"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Category from "./components/Category"
import FeatureSection from "./components/FeatureSection"
import FeatureSection2 from "./components/FeatureSection2"
import FeatureSection3 from "./components/FeatureSection3"
import BlogSection from "./components/BlogSection"
import NewsLetter from "./components/NewsLetter"
import Footer from "./components/Footer"
// import FeatureCard from './components/FeatureCard';
import Feature from './components/Feature';
// import Account from "./components/Account";
import { CartContextProvider } from "./context/CartContext";
// import { useState } from "react";
import Cart from "./components/Cart";
import Authentication from "./components/Authentication";
import CartPage from "./components/CartPage";
import ProductPage from "./components/ProductPage";
import CheckoutPage from './components/CheckoutPage';
import TransitionScreen from './components/TransitionScreen';
// import Banner from "./components/Banner"
const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };
    const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    // Simulate a delay before showing the home page
    const timer = setTimeout(() => {
      setShowTransition(false);
    }, 3000); // Adjust the duration as needed

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    
    <CartContextProvider>
      <BrowserRouter>
      {showTransition ? (
          <TransitionScreen />
        ) : (
          
    <main>
      <Navbar setShowCart={setShowCart}/>
      <MobNavbar setShowCart={setShowCart}/>
      <Routes>
        <Route path="/" element={
          <>
          <Hero/>
      <Category/>
      <FeatureSection/>
      <FeatureSection2/>
      <FeatureSection3/>
      <BlogSection/>
      <NewsLetter/>
          </>
        }/>
        <Route path="/signin" element={ <Authentication/> }/>
        <Route path="/cart" cartItems={cartItems} element={ <CartPage/> }/>
        <Route path="/description/:id" addToCart={addToCart} element={ <ProductPage/> }/>
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Feature/>
      <Footer/>
      {showCart && <Cart showCart={showCart} setShowCart={setShowCart}/>}
    </main>
    )}
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App