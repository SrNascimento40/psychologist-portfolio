import { useState } from 'react'
import './App.css'

export default function About() {
  const [count, setCount] = useState(0)

  return (
    <section id="home" className="bg-gray-100 p-8 text-center">
    <h1 className="text-4xl font-bold mb-4">Welcome to My Practice</h1>
    <p className="text-lg mb-6">Providing professional psychological services to help you achieve mental well-being.</p>
    <button className="bg-blue-600 text-white px-6 py-3 rounded">Book a Session</button>
</section>  )
}
