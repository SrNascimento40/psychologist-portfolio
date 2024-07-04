import { useState } from 'react'
import './App.css'

export default function Testimonials() {
  const testimonials = [
    { name: 'John Doe', quote: 'Amazing service, highly recommend!' },
    { name: 'Jane Smith', quote: 'Professional and compassionate care.' },
  ];
  
  return (
    <section id="services" className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-4">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p>{service.description}</p>
              </div>
          ))}
      </div>
    </section>
  )
}
