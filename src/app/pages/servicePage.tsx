


export default function ServicesPage () {
    return(
        <div className="bg-slate-200 text-zinc-950 min-h-screen flex flex-col gap-y-10 ">
            {/* <h2 className="mt-10 text-slate-800 font-bold text-2xl border-2 border-slate-400 p-4 rounded">Conheça os nossos planos</h2> */}
            <h1 className="text-3xl font-bold text-center mb-8 mt-10 animate-fadeInDrop">Nossas soluções</h1>

            <div className="flex flex-col sm:flex-row sm:justify-around p-6 gap-6 ">
                {/* Card 1: NOC */}
                <div className="w-full sm:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="https://images.stockcake.com/public/f/2/6/f261e73d-ec28-4e61-8df2-de632e6daac0_large/control-center-monitoring-stockcake.jpg" alt="NOC" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">NOC</h2>
                        <p className="text-gray-600 mb-4 text-sm">
                            Garantimos que sua rede funcione sem problemas com monitoramento contínuo e suporte proativo.
                        </p>
                    </div>
                </div>

                {/* Card 2: Suporte Remoto */}
                <div className="w-full sm:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="https://images.stockcake.com/public/f/e/8/fe8d5a0f-7a83-4968-a59e-ee0a1fe6613f_large/focused-call-operator-stockcake.jpg" alt="NOC" className="w-full h-48 object-cover object-center" />
                    <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Suporte Remoto</h2>
                        <p className="text-gray-600 mb-4 text-sm">
                            Suporte ágil e eficiente para qualquer problema técnico, disponível a qualquer hora.
                        </p>
                    </div>
                </div>

                {/* Card 3: Monitoramento */}
                <div className="w-full sm:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="https://images.stockcake.com/public/8/e/6/8e61e4ee-84a3-4483-aaaa-89a9b2246655_large/control-room-activity-stockcake.jpg" alt="NOC" className="w-full h-48 object-cover object-left" />
                    <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Monitoramento</h2>
                        <p className="text-gray-600 mb-4 text-sm">
                            Visibilidade total do desempenho da sua infraestrutura com resposta rápida a problemas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}