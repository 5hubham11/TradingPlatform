import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import HomePage from "./landing_page/home/HomePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./landing_page/signup/SignUp.jsx";
import About from "./landing_page/about/AboutPage.jsx";
import Pricing from "./landing_page/pricing/PricingPage.jsx";
import Product from "./landing_page/products/ProductPage.jsx";
import Support from "./landing_page/support/SupportPage.jsx";
import NavBar from "./landing_page/NavBar.jsx";
import Footer from "./landing_page/Footer.jsx";
import NotFound from "./landing_page/NotFound.jsx";

import PublicRoute from "./PublicRoute.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import  Login  from "./landing_page/login/login.jsx";
 
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login/>
            </PublicRoute>
          }
        />
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </AuthProvider>
  </BrowserRouter>,
);
