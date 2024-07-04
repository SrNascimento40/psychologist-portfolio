
import './App.css'

export default function Header() {

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Psicólogo Baptista</div>
          <button className="bg-white font-semibold text-blue-600 px-4 py-2 rounded">Agendar consulta</button>
      </div>
    </header>
  )
}
