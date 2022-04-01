import React from "react";
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main className="portfolio-app">
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Navbar></Navbar>
      </main>
    </>

  );
}

export default App;
