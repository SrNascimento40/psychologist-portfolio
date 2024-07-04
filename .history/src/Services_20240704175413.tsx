import './App.css'

export default function Services() {
  const services = [
    { title: 'Terapia Individual', description: 'Sessões de terapia personalizadas para ajudá-lo a superar seus desafios.' },
    { title: 'Terapia de casal', description: 'Ajudar casais a melhorar a comunicação e fortalecer seu relacionamento.' },
    { title: 'Atendimento online', description: 'Terapia on-line personalizada para seu conforto.' },
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
