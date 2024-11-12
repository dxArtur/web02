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
            <li><a href="#" className="text-gray-500 hover:text-gray-300">Suporte</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-4 text-gray-300">Contato</h4>
          <ul className="space-y-3">
            <li className="text-gray-500">📧 atendimento@g10solution.com.br</li>
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

       /*
       <footer className="bg-gray-800 py-8 text-gray-300 text-md flex flex-col justify-start items-center w-full">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-bold pl-4 mb-4 text-gray-200">Informações para contato</h3>
          <ul className="space-y-1">
            <li><p className="text-sm font-light pl-4 hover:underline">comercial@g10solution.com.br</p></li>
            <li><p className="text-sm font-light pl-4 hover:underline">financeiro@g10solution.com.br</p></li>
            <li><p className="text-sm font-light pl-4 hover:underline">suporte@g10solution.com.br</p></li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
        <h3 className="text-lg font-bold pl-4 mb-4 text-gray-200">telefone para contato</h3>
        <ul className="space-y-1">
          <li><p className="text-sm font-light pl-4">Ligações e WhatsApp</p></li>
          <li><p className="text-sm font-light pl-4">+(85) 988060437</p></li>
        </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-bold pl-4 mb-4 text-gray-200">Siga nos</h3>
        </div>
        
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} G10 Solution. Todos os direitos reservados.</p>
        </div>

      <div className="mt-4 border-t border-gray-700 pt-4 text-center font-light text-slate-400">
        <p className="text-sm">Desenvolvido por &copy;danielcódigos {new Date().getFullYear()}. Todos os direitos reservados.</p>
      </div>




    </div>
  </footer> */
    )
}