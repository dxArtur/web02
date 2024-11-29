import { useState } from "react"

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false)
  

  const toggleMenu = () => setIsOpen(!isOpen)
  
    return (
      <nav style={{ backgroundColor: '#2242d4' }} className="shadow-md w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-24">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="brisanet-log.svg"
              alt="Logo da Brisanet"
              className="w-auto " // Ajuste a altura da logo conforme necessário
            />
          </a>

          {/* Menu Mobile */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <i className={`fas fa-${isOpen ? "times" : "bars"} text-2xl`}></i>
            </button>
          </div>

          {/* Menu Desktop */}
          <div className="hidden sm:flex space-x-8 justify-center px-4 py-2">
            <a
              href="https://wa.me/558584848836?text=Ol%C3%A1%2C+Gostaria+de+contratar+o+serviço."
              className="text-white hover:bg-orange-600 px-3 py-2 rounded-md text-lg font-bold"
            >
              Contratar pelo Whatsapp
            </a>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`sm:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <ul className="space-y-4 p-4">
          <li>
            <a
              href="https://wa.me/558584848836?text=Ol%C3%A1%2C+Gostaria+de+contratar+o+serviço."
              className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-lg"
            >
              Contrate via Whatsapp
            </a>
          </li>
        </ul>
      </div>
    </nav>
    )
}