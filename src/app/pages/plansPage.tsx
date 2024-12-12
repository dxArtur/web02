import { useState } from "react";

import { plans } from '@/../public/plans'
import { plansHouse } from "../../../public/plansHOUSE";
import { plansHouseII } from '@/../public/plansHouseII'
import { plansCorp } from '@/../public/plansCorp'
import { plansEnterprise } from '@/../public/plansEnterprise'
import { plansFibra } from "../../../public/fibra";
import TextAlternator from "../components/TextAlternator";
import PlanCardHouse from "../components/GridPlanHouse";

export default function PlansPage() {
return (
  <section className="bg-gray-50 py-8 px-4 mx-auto w-full lg:py-16 lg:px-6">
    {/* <div className="relative w-full">
      <img
        src="banner_background.png" // Substitua pela URL da sua imagem
        alt="Banner"
        className="w-full h-auto object-cover" // Garantindo que a imagem ocupe toda a largura
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col lg:flex-row justify-center items-center text-white">

        <div className=" w-2/12 h-2/12  lg:w-1/2 lg:h-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(element_for_banner2.png)' }}>
        </div>


        <div className="w-full lg:w-1/2 text-center px-4 py-10">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-custom-orange">
            Oferecemos os melhores
          </h2>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-custom-orange">
            planos para você!
          </h2>
          <p className="mb-5 text-xl font-light text-custom-blue">
            Somos a líder em satisfação segundo a Anatel
          </p>
        </div>
        
        
        
      </div>
    </div> 
  
    <div className="relative w-full bg-cover bg-center h-[400px] lg:h-[500px] bg-no-repeat object-cover"

    */}

    <div className="relative w-full bg-cover bg-center h-[400px] lg:h-[500px] bg-no-repeat "
       style={{ backgroundImage: "url('banner_background.png')" }}>       
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center px-6 py-1 lg:px-12 w-full h-full">
      {/* Coluna de Imagem */}
      <div className="w-4/6 lg:w-1/2 flex justify-center mb-4 lg:mb-0">
        <img src="element_for_banner2.png" alt="Guaxinim Gamer" className="w-4/5 h-auto object-cover rounded-lg shadow-lg mt-4" />
      </div>
      
      {/* Coluna de Texto */}
      <div className="w-full lg:w-1/2 text-white text-center lg:text-left flex flex-col justify-center">
        <h2 className="text-xl lg:text-4xl font-bold mb-1 ">Somos a líder em satisfação, segundo a Anatel 🏆</h2>
        <p className="text-sm lg:text-xl mb-2">
        Navegue com Alta Velocidade! Ofertas imperdíveis para você!        </p>
        <div className="flex justify-center lg:justify-start text-sm mb-6 lg:text-lg font-semibold text-gray-300 lg:mb-4">
          <TextAlternator />
        </div>
        <button className="flex justify-center lg:justify-start">
          <a href="#" className="inline-block font-semibold bg-custom-orange text-white py-2 px-4 rounded-lg hover:bg-custom-blue transition duration-300 ease-in-out">Veja nossas ofertas</a>
        </button>
      </div>
    </div>
  </div>


  <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
    <h2 style={{ backgroundColor: '#ff5022' }} className="my-10 mb-4 text-5xl tracking-tight font-extrabold">
      Planos residênciais em promoção
    </h2>
    <p className="mb-5 font-light text-gray-500 sm:text-xl">
      Com descontos especiais para você!
    </p>
  </div>

  {/* Grid de Planos */}


  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plansHouse.map((plan, index) => (
          <PlanCardHouse key={index} plan={plan} />
        ))}
      </div>

  

  <div className="mx-auto max-w-screen-md text-center mb-8 mt-12 lg:mb-12">
    {/* <h2 style={{ backgroundColor: '#ff5022' }} className="my-10 mb-4 text-5xl tracking-tight font-extrabold">
      Planos residênciais em promoção
    </h2> */}
    <p className="mb-5 font-light text-gray-500 sm:text-xl">
      Temos os melhores planos residênciais!
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {plansHouseII.map((plan, index) => (
      <div
        key={index}
        className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-xl xl:p-8 transform transition-all duration-300 ease-in-out hover:scale-105"
      >
        <div className="mb-2">
          <span style={{ backgroundColor: '#ff5022' }} className=" text-white text-xs mr-2 font-bold px-2.5 py-0.5">
            Oferta
          </span>
        </div>
        <h3 style={{ backgroundColor: '#ff5022' }} className="mb-4 text-xl font-bold text-white -blue-900 ">{plan.title}</h3>

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
          <span style={{ color: '#2242d4' }} className="mr-2 text-3xl font-extrabold">R$ {plan.price}</span>
          <span className="text-gray-500">/mês</span>
        </div>
        <a
          href={plan.link}
          className="bg-custom-blue self-center text-white hover:bg-custom-orange font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Assine Já
        </a>
      </div>
    ))}
  </div>


  <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
    <h2 style={{ backgroundColor: '#ff5022' }} className="my-10 mb-4 text-5xl tracking-tight font-extrabold">
      Planos para sua empresa com descontos
    </h2>
    <p className="mb-5 font-light text-gray-500 sm:text-xl">
      Fibra + Fixo + Chip Brisa
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
  {plansCorp.map((plan, index) => (
      <div
        key={index}
        className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-xl xl:p-8 transform transition-all duration-300 ease-in-out hover:scale-105"
      >
        <div className="mb-2">
          <span style={{ backgroundColor: '#ff5022' }} className="text-white text-xs mr-2 font-bold px-2.5 py-0.5">
            Melhor Oferta
          </span>
        </div>
        <h3 style={{ backgroundColor: '#ff5022' }} className="mb-4 text-2xl font-bold text-white -blue-900">{plan.title}</h3>

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
          
          <div className="flex flex-col items-center">
          <span className="font-semibold my-2">Aplicativos incluídos</span>
          <div className="grid grid-cols-3 gap-4">
            {plan.apps?.map((app, idx) => (
              <img
                key={idx}
                alt="App logo"
                className="w-[48px] h-[48px]"
                src={app}
              />
            ))}
          </div>
        </div>          
        </ul>


        

        {/* <div className="flex justify-center items-baseline my-8">
          <span style={{ color: '#2242d4' }} className="mr-2 text-3xl font-extrabold ">R$ {plan.price}</span>
          <span className="text-gray-500">/mês</span>
        </div> */}
        <a
          href={plan.link}
          className="bg-custom-blue self-center text-white hover:bg-custom-orange font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Assine Já
        </a>
      </div>
    ))}
    </div>







    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
    <h2 style={{ backgroundColor: '#ff5022' }} className="my-10 mb-4 text-5xl tracking-tight font-extrabold">
      Planos com fibra para sua empresa
    </h2>
    <p className="mb-5 font-light text-gray-500 sm:text-xl">
      Conheça os nossos planos para empresas como a sua!
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {plansFibra.map((plan, index) => (
      <div
        key={index}
        className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-xl xl:p-8 transform transition-all duration-300 ease-in-out hover:scale-105"
      >
        <div className="mb-2">
          <span style={{ backgroundColor: '#ff5022' }} className="text-white text-xs mr-2 font-bold px-2.5 py-0.5">
            Oferta
          </span>
        </div>
        <h3 style={{ backgroundColor: '#ff5022' }} className="mb-4 text-2xl font-bold text-white -blue-900">{plan.title}</h3>

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
          
          <div className="flex flex-col items-center">
          <span className="font-semibold my-2">Aplicativos incluídos</span>
          <div className="grid grid-cols-3 gap-4">
            {plan.apps?.map((app, idx) => (
              <img
                key={idx}
                alt="App logo"
                className="w-[48px] h-[48px]"
                src={app}
              />
            ))}
          </div>
        </div>          
        </ul>


        

        {/* <div className="flex justify-center items-baseline my-8">
          <span style={{ color: '#2242d4' }} className="mr-2 text-3xl font-extrabold ">R$ {plan.price}</span>
          <span className="text-gray-500">/mês</span>
        </div> */}
        <a
          href={plan.link}
          className="bg-custom-blue self-center text-white hover:bg-custom-orange font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Assine Já
        </a>
      </div>
    ))}
    </div>
    
    {/* <div className=" items-start m-16">
      <ul className="list-disc pl-5">
        <li>
          <p className="mb-5 font-light text-gray-500 sm:text-base">
            Ofertas válidas apenas onde temos caixa próxima e conseguimos atender na rede GPON;
          </p>
        </li>
        <li>
          <p className="mb-5 font-light text-gray-500 sm:text-base">
            +1 IP fixo por R$ 50,00 adicional em cada pacote;
          </p>
        </li>
        <li>
          <p className="mb-5 font-light text-gray-500 sm:text-base">
            Em caso de compra de IP fixo, autenticação é feita no ativo do cliente, sendo assim, não é fornecido roteador;
          </p>
        </li>
        <li>
          <p className="mb-5 font-light text-gray-500 sm:text-base">
            Em caso de necessidade de RB ou equipamento para gerenciar o link, deve passar por viabilidade para ser considerado o custo do ativo;
          </p>
        </li>
      </ul>
    </div> */}
</section>
)
}