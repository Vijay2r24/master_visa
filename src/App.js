import React from "react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import  Routes  from "../src/constants/routes";

function App() {
  return (
    <BrowserRouter>
      {" "}
      {/* Wrap your components inside BrowserRouter */}
      <main className="bg-bg_color h-screen w-full">
        <Header />
        <Navbar />
        <Home />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
