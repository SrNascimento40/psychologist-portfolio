import { useState } from 'react'
import './App.css'

export default function About() {
  const [count, setCount] = useState(0)

  return (
    <section id="about" className="bg-white p-8">
      <h2 className="text-3xl font-bold mb-4">Sobre</h2>
      <p className="text-lg mb-4">
        Como psicólogo recém formado, minha missão é plantar sementes de esperança e compreensão.
      </p>
      <p className="text-lg mb-4">
        Acredito que, através do acolhimento e da escuta, posso contribuir para um mundo mais empático e saudável.
      </p>
      <p className="text-lg">
        Na minha abordagem psicanalítica e niilista, mergulho nas profundezas da mente humana, desvendando os abismos da existência. Entre sonhos e vazios, busco compreender o inexprimível.
      </p>
    </section>
  )
}
