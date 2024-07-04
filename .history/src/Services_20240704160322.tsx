import { useState } from 'react'
import './App.css'

export default function Services() {
  const services = [
    { title: 'Individual Therapy', description: 'Personalized therapy sessions to help you overcome your challenges.' },
    { title: 'Couples Therapy', description: 'Helping couples improve communication and strengthen their relationship.' },
    { title: 'Group Therapy', description: 'Support groups for shared experiences and mutual support.' },
  ];

  return (
    <section id="about" className="bg-white p-8">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg mb-4">
          I am a licensed psychologist with over 10 years of experience helping individuals overcome personal challenges and improve their mental health.
      </p>
      <p className="text-lg">
          My approach is client-centered and tailored to meet the unique needs of each individual. I use evidence-based techniques to ensure the best outcomes for my clients.
      </p>
    </section>
  )
}
