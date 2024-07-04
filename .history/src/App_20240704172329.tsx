import { useState } from 'react'
import './App.css'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Testimonials from './Testimonials'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <main>
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <Contact />
        </main>
        <Footet />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
