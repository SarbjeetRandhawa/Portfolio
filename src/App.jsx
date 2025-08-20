import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero';
import "./app.scss"
import { useEffect } from 'react';
import Parallax from './components/parallax/parallax';


function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
     <section id='Homepage'>
      <Navbar/>
      <Hero/>
     </section>
     <section id='Experience'>
      <Parallax type="Experience"/>
     </section>
     <section>Experience</section>
     <section id='Projects'>
      <Parallax type="portfolio"/>
     </section>
     <section>Portfolio</section>
     <section>portfolio2</section>
     <section>portfolio3</section>
     <section id='Contact'>cntact</section>
    </div>
    
  )
}

export default App