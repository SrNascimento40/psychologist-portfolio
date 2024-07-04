import { useState } from 'react'
import './App.css'

export default function Hero() {
  const [count, setCount] = useState(0)

  return (
    <section id="home" className="bg-gray-100 p-8 text-center">
    <h1 className="text-4xl font-bold mb-4">Bem vindo a psicologia Baptista</h1>
    <p className="text-lg mb-6">Forneço serviços psicológicos profissionais para ajudá-lo a alcançar o bem-estar mental.</p>
    <button className="bg-blue-600 text-white px-6 py-3 rounded">Agende uma sessão</button>
</section>  )
}
