import React from "react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import Header from "./sections/Header";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      {" "}
      {/* Wrap your components inside BrowserRouter */}
      <main>
        <Header />
        <Navbar />
        <Home />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
