import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
     </BrowserRouter>
    </>
  );
}

export default App;
