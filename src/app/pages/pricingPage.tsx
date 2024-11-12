

export default function PricingPage() {

    return (
        <div className="bg-slate-200 text-zinc-950 min-h-screen flex flex-col gap-y-10 ">
            {/* <h2 className="mt-10 text-slate-800 font-bold text-2xl border-2 border-slate-400 p-4 rounded">Conheça os nossos planos</h2> */}
            <h1 className="text-3xl font-bold text-center mb-8 mt-10 animate-fadeInDrop">Nossos Planos de Assinatura</h1>

            <div className="flex flex-col md:flex-row ">

                <div className="flex flex-wrap -mx-4 mx-2">
                    {/* <!-- Plano Básico --> */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-lg card transform transition duration-300 hover:scale-105 hover:shadow-xl focus:scale-105 focus:shadow-xl">
                            <div className="p-6 text-center">
                                <h2 className="text-2xl font-black mb-4 bg-orange-500 text-white animate-slideIn">50 FULL</h2>
                                <div className="text-4xl font-bold mb-4 animate-fadeIn">R$400<span className="text-base">/mês</span></div>
                                <ul className="mb-4 text-left animate-slideIn">
                                    <li className="mb-2">Wi-fi</li>
                                    <li className="mb-2">SLA de no máximo 4h</li>
                                    <li className="mb-2">Garantia de 100% de banda contratada</li>
                                    <li className="mb-2">Equipamentos de alta tecnologia</li>
                                    <li className="mb-2">100% de Download e Upload</li>
                                    <li className="mb-2">Atendimento técnico especializado</li>
                                </ul>
                                <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:bg-blue-600">Assinar</a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Plano Intermediário --> */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-lg card transform transition duration-300 hover:scale-105 hover:shadow-xl focus:scale-105 focus:shadow-xl">
                            <div className="p-6 text-center">
                                <h2 className="text-2xl font-black mb-4 bg-blue-500 text-white animate-slideIn">100 FULL</h2>
                                <div className="text-4xl font-bold mb-4 animate-fadeIn">$650<span className="text-base">/mês</span></div>
                                <ul className="mb-4 text-left animate-slideIn">
                                    <li className="mb-2">Wi-fi</li>
                                    <li className="mb-2">SLA de no máximo 4h</li>
                                    <li className="mb-2">Garantia de 100% de banda contratada</li>
                                    <li className="mb-2">Equipamentos de alta tecnologia</li>
                                    <li className="mb-2">100% de Download e Upload</li>
                                    <li className="mb-2">Atendimento técnico especializado</li>
                                </ul>
                                <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:bg-blue-600">Assinar</a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Plano Avançado --> */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-lg card transform transition duration-300 hover:scale-105 hover:shadow-xl focus:scale-105 focus:shadow-xl">
                            <div className="p-6 text-center">
                                <h2 className="text-2xl font-black mb-4 bg-green-500 text-white animate-slideIn">200 FULL</h2>
                                <div className="text-4xl font-bold mb-4 animate-fadeIn">$750<span className="text-base">/mês</span></div>
                                <ul className="mb-4 text-left animate-slideIn">
                                    <li className="mb-2">Wi-fi</li>
                                    <li className="mb-2">SLA de no máximo 4h</li>
                                    <li className="mb-2">Garantia de 100% de banda contratada</li>
                                    <li className="mb-2">Equipamentos de alta tecnologia</li>
                                    <li className="mb-2">100% de Download e Upload</li>
                                    <li className="mb-2">Atendimento técnico especializado</li>
                                </ul>
                                <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:bg-blue-600">Assinar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}