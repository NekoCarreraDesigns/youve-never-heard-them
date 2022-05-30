import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
