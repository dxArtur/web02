import { useEffect, useRef } from 'react';
import Head from 'next/head';

const SuportPage = () => {



  return (
    <div className="bg-slate-200 min-h-screen flex flex-col items-center text-zinc-950  p-6">
      <h1 className='text-3xl font-bold text-center mb-8 mt-10 animate-fadeInDrop  ' >Suporte 24 horas para a sua rede</h1>
      <div className="flex flex-col md:flex-row ">

        <div className="flex flex-wrap -mx-4 mx-2 items-center justify-center gap-x-10 mt-10">


          <div className="w-full md:w-2/4 px-4 mb-8 ">

              

            <div className='flex flex-row md:gap-3 gap-2'>
              <div className="flex items-center  ">
                {/* Botão Imitação */}
                {/* Título Alinhado com o Botão */}
                <h1 className="text-3xl font-bold text-left truncate text-gray-800 ">
                  Estaremos
                </h1>
              </div>

              <div className="relative flex items-center bg-green-500 text-white py-2 px-2 rounded-full md:w-36 w-28    hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
                <span className="text-white font-bold text-sm md:text-xl">24 horas</span>
                <div className=" absolute end-0.5 top-1/2 transform -translate-y-1/2 flex items-center justify-center md:w-10 md:h-10 w-8 h-8 bg-white rounded-full">
                </div>
              </div>

            </div>

            <h1 className="text-3xl font-bold text-left text-gray-800 mb-6">
                cuidando da sua rede
            </h1>

            <div className="text-gray-600 text-left mb-6">
              <span>Nosso suporte está disponível </span>
              <span className="font-black">24 horas</span>
              <span> dia para auxiliar a gestão da sua rede e para garantir que você receba a assistência que precisa, a qualquer hora.</span>
            </div>
          </div>
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 md:text-3xl">Cartões de contato</h1>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center">
              <h2 className="md:text-2xl font-semibold text-blue-950 mb-4 text-base">Ligações e Whatsapp &#128071;</h2>
              <p className="md:text-xl text-lg font-bold text-gray-800 mb-2">+00 (00) 00000-0000</p>
              <p className="text-sm text-gray-600 text-center mb-4">Ou aponte a sua câmera para falar com nosso suporte!</p>
              <img src="qrcode.png" alt="Logo da G10 Solution" className="h-32 md:h-48 animate-fadeIn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuportPage
