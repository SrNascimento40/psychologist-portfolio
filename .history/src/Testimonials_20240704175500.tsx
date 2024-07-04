import './App.css'

export default function Testimonials() {
  const testimonials = [
    { name: 'Wallace N', quote: 'Atendimento incrível, recomendo!' },
    { name: 'Jane Smith', quote: 'Professional and compassionate care.' },
  ];

  return (
    <section id="testimonials" className="bg-white p-8">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
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
