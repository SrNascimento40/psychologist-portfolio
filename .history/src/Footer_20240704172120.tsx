import './App.css'

export default function Footer() {

  return (
        <footer className="bg-blue-600 text-white p-4 text-center">
            <p>&copy; 2024 Psychologist's Name. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
                <a href="#privacy" className="hover:underline">Privacy Policy</a>
                <a href="#terms" className="hover:underline">Terms of Service</a>
            </div>
        </footer>
  )
}
