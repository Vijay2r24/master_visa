import React from "react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import Header from "./sections/Header";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <BrowserRouter>
      {" "}
      {/* Wrap your components inside BrowserRouter */}
      <main className="bg-bg_color h-screen w-full">
        <Header />
        <Navbar />
      </main>
    </BrowserRouter>
  );
}

export default App;
