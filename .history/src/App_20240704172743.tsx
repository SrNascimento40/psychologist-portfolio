import { useState } from 'react'
import './App.css'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'

function App() {

  return (
    <div>
      <Header />
      <main>
          <Hero />
          <About />
          <Services />
          <Testimonials />
          <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
