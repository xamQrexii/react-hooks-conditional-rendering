import React, { useState } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";

function App() {
  const [pageName, setPageName] = useState("Home");

  const changePageName = (pageName) => setPageName(pageName);

  return (
    <>
      <Header changePageName={changePageName} currentPage={pageName} />
      {pageName === "Home" && <Home />}
      {pageName === "About" && <About />}
      {pageName === "News" && <News />}
      {pageName === "Contact" && <Contact />}
      <Footer />
    </>
  );
}

export default App;
