import './App.css'

export default function Testimonials() {
  const testimonials = [
    { name: 'Wallace Nascimento', quote: 'Atendimento incrível, recomendo!' },
    { name: 'Saitama', quote: 'Cuidado profissional e compassivo.' },
  ];

  return (
    <section id="testimonials" className="bg-white p-8">
        <h2 className="text-3xl font-bold mb-4">Depoimentos</h2>
        <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="border p-4 rounded shadow">
                    <p className="italic">"{testimonial.quote}"</p>
                    <p className="text-right">- {testimonial.name}</p>
                </div>
            ))}
        </div>
    </section>
  )
}
