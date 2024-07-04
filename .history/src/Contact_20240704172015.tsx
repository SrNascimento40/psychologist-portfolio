import './App.css'

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form className="space-y-4">
          <div>
              <label className="block text-lg">Name</label>
              <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
              <label className="block text-lg">Email</label>
              <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div>
              <label className="block text-lg">Message</label>
              <textarea className="w-full p-2 border rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
      <div className="mt-8">
          <p>Address: 123 rua da jaca, Pindamonhamgaba, USA</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
      </div>
    </section>
  )
}
