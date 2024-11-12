

export default function ContactFormPage() {
    return(
        <div className="bg-blue-950 min-h-screen flex flex-col justify-start items-center w-full gap-y-10">
            <h1 className="text-3xl font-bold text-center mb-8 mt-10 animate-fadeInDrop text-white">Entre em contato</h1>
            <div className=" shadow-lg border border-slate-600 rounded bg-gray-900 p-6 md:p-10 text-slate-100 space-y-4 gap-y-4 mx-10 mb-4 max-w-md ">
                <h2 className="text-xl font-semibold text-slate-100">Envie um email</h2>
                <form className="grid gap-y-2" action="mailto:comercial@g10solution.com.br" method="post" encType="text/plain">
                    <label className="font-light" htmlFor="name">Nome completo:</label>
                    <input className="font-light bg-gray-600 rounded p-2 border border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-none" type="text" id="name" name="name" required />

                    <label className="font-light" htmlFor="email">Email:</label>
                    <input className="font-light bg-gray-600 rounded p-2 border border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-none" type="email" id="email" name="email" required />

                    <label className="font-light" htmlFor="message">Mensagem:</label>
                    <textarea className="font-light p-2 bg-gray-600 rounded border border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-none" id="message" name="message" rows={4} required></textarea>

                    <button className="bg-blue-900 rounded border border-slate-600 mt-4 p-2 font-semibold" type="submit">Enviar</button>
                </form>

                <a className="flex items-center gap-2 mt-4 border border-white rounded p-2" href="https://wa.me/558588060437?text=Olá,%20estou%20entrando%20em%20contato%20com%20você%20através%20do%20site">
                    <label className="font-semibold">Ou clique aqui e entre em contato pelo Whatsapp</label>
                    <img src="wpp.png" alt="Ícone do Whatsapp" className="h-6 md:h-8" />
                </a>
            </div>
        </div>
    )
}