import React from "react";
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <main className="portfolio-app">
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
      </main>
    </>

  );
}

export default App;
