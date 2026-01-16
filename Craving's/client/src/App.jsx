import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/register";
import { Toaster } from "react-hot-toast";
import UserDashBord from "./pages/dashbords/UserDashBord";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Toaster/>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/user-dashbord" element={<UserDashBord />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
