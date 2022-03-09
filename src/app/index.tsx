import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../features/Footer";
import NavBar from "../features/navbar";
import AppRouter from "../pages";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
