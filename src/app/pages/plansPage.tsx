
import { plansHouse } from "../../../public/plansHOUSE";
import { plansHouseII } from '@/../public/plansHouseII'
import { plansCorp } from '@/../public/plansCorp'
import { plansFibra } from "../../../public/fibra";
import TextAlternator from "../components/TextAlternator";
import PlanCardHouse from "../components/GridPlanHouse";
import GridPlanCorp from "../components/GridPlanCorp"

export default function PlansPage() {
  return (
    <section className="bg-gray-50 py-8 px-4 mx-auto w-full lg:py-16 lg:px-6">
      <div className="relative w-full bg-cover bg-center h-[400px] lg:h-[500px] bg-no-repeat"
        style={{ backgroundImage: "url('banner_background.png')" }}>
        <div className="relative z-10 flex flex-col md:flex-row justify-center px-6 py-1 lg:px-12 w-full h-full">
          {/* Coluna de Imagem */}
          <div className="flex justify-center items-end w-full md:w-5/6 lg:w-1/2">
            <img src="https://www.brisanet.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwesley-mobile.92df6a11.webp&w=750&q=100" alt="Guaxinim Gamer" className="w-3/4 md:w-full lg:w-3/4 h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover object-bottom rounded-lg shadow-lg " />
          </div>


          {/* Coluna de Texto */}
          <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 text-white text-center lg:text-left">
            <h2 className="text-xl lg:text-4xl font-bold mb-1 md:mt-12">
              <span className="block sm:block md:block lg:inline">Somos a líder em satisfação,</span>
              <span className="block sm:block md:block lg:inline"> segundo a Anatel 🏆</span>
            </h2>
            <p className="text-sm lg:text-xl mb-2">
              Navegue com Alta Velocidade! Ofertas imperdíveis para você!
            </p>
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
        <p className="mb-5 font-light text-gray-500 sm:text-xl">
          Temos os melhores planos residênciais!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plansHouseII.map((plan, index) => (
          <PlanCardHouse key={index} plan={plan} />
        ))}
      </div>

      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 style={{ backgroundColor: '#ff5022' }} className="my-10 mb-4 text-4xl tracking-tight font-extrabold">
          Planos para sua empresa com descontos 🏢
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl">
          Fibra + Fixo + Chip Brisa
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {plansCorp.map((plan, index) => (
          <GridPlanCorp key={index} plan={plan} />

        ))}
      </div>

      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 style={{ backgroundColor: '#ff5022' }} className="my-10 mb-4 text-4xl tracking-tight font-extrabold">
          Planos com fibra para sua empresa 💼
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl">
          Conheça os nossos planos para empresas como a sua!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plansFibra.map((plan, index) => (
          <GridPlanCorp key={index} plan={plan} />
        ))}
      </div>
    </section>
  )
}