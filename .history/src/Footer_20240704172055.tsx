import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function Footer() {

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Psychologist's Name</div>
          <nav>
              <ul className="flex space-x-4">
                  <li><a href="#home" className="hover:underline">Home</a></li>
                  <li><a href="#about" className="hover:underline">About</a></li>
                  <li><a href="#services" className="hover:underline">Services</a></li>
                  <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
          </nav>
          <button className="bg-white text-blue-600 px-4 py-2 rounded">Get Started</button>
      </div>
    </header>
  )
}
