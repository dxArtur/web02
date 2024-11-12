import { useState } from "react";

import { plans } from '@/../public/plans'

export default function PlansPage() {
return (
  <section className="bg-gray-50 py-8 px-4 mx-auto w-full lg:py-16 lg:px-6">
  <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
      Oferecemos os melhores planos para você!
    </h2>
    <p className="mb-5 font-light text-gray-500 sm:text-xl">
      Somos a líder em satisfação segundo a Anatel
    </p>
  </div>

  {/* Grid de Planos */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {plans.map((plan, index) => (
      <div
        key={index}
        className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-xl xl:p-8 transform transition-all duration-300 ease-in-out hover:scale-105"
      >
        <div className="mb-2">
          <span className="bg-orange-500 text-white text-xs mr-2 font-bold px-2.5 py-0.5">
            Promoção
          </span>
        </div>
        <h3 className="mb-4 text-2xl font-bold text-white -blue-900 bg-orange-500">{plan.title}</h3>

        {/* Lista de funcionalidades */}
        <ul role="list" className="mb-8 space-y-4 text-left flex-grow">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center space-x-3 hover:bg-gray-200">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Verificação de Streaming */}
        {plan.streaming && (
          <div className="flex flex-col items-center flex-grow">
            <span className="font-semibold my-2">Streaming incluído</span>
            <img
              alt="Streaming logo"
              className="w-[64px] mt-1"
              src={plan.streaming}
            />
          </div>
        )}

        {/* Apps inclusos */}
        <div className="flex flex-col items-center">
          <span className="font-semibold my-2">Aplicativos incluídos</span>
          <div className="flex gap-1">
            {plan.apps.map((app, idx) => (
              <img
                key={idx}
                alt="App logo"
                className="w-[48px] h-[48px]"
                src={app}
              />
            ))}
          </div>
        </div>

        {/* Preço e botão */}
        <div className="flex justify-center items-baseline my-8">
          <span className="mr-2 text-3xl font-extrabold text-blue-900">R$ {plan.price}</span>
          <span className="text-gray-500">/mês</span>
        </div>
        <a
          href={plan.link}
          className="self-center text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Assine Já
        </a>
      </div>
    ))}
  </div>
</section>
)
}