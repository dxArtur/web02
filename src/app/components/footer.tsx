export default function Footer () {
    return (
      <footer className="bg-gray-800 text-gray-900 py-8 px-1">
      <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Logo e descrição */}
        <div className="flex flex-col items-start">
          <img
            src="logobrisa.png"
            alt="Logo"
            className="w-40 mb-4"
          />
          <p className="font-bold text-gray-300 text-lg">
            Agente Autorizado | G10
          </p>
          <p className="text-gray-500 text-sm">
            Brisanet Telecomunicações S.A. CNPJ: 04.601.397/0001-28 
          </p>
        </div>

        {/* Links Rápidos */}
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-4 text-gray-300">Links Rápidos</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-500 hover:text-gray-300">Planos</a></li>
            <li><a href="https://wa.me/558584848836?text=Ol%C3%A1%2C+Gostaria+de+contatar+o+suporte." className="text-gray-500 hover:text-gray-300">Suporte</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-4 text-gray-300">Contato</h4>
          <ul className="space-y-3">
            <li className="text-gray-500">📞 +55 (85) 98484-8836</li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-4 text-gray-300">Siga-nos</h4>
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" className="text-gray-500 hover:text-blue-600">Facebook</a>
            <a href="https://twitter.com" target="_blank" className="text-gray-500 hover:text-blue-400">Twitter</a>
            <a href="https://instagram.com" target="_blank" className="text-gray-500 hover:text-pink-600">Instagram</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t pt-4 text-center border-gray-600 font-light text-gray-400">
          <p className="text-sm">Desenvolvido por &copy;danielcódigos {new Date().getFullYear()}. Todos os direitos reservados.</p>
        </div>
    </div>
</footer>
    )
}