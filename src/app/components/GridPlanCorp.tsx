import { useState } from 'react';
import { services } from '../../../public/services';

const GridPlanCorp = ({ plan }:{plan:IPlanCorp}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ name: '', description: '', logo: '' });

  const openModal = (name:string, type:keyof IServices, logo:string) => {
    const description = getServiceDescription(name, type);
    setModalContent({ name, description, logo });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent({ name: '', description: '', logo: '' });
  };

  const getServiceDescription = (name:string, type: keyof IServices) => {
    const service = services[0][type].find(service => service.name === name);
    return service ? service.description : 'Descrição não encontrada.';
  };

  const getPromotionColor = (type:string) => {
    switch (type) {
      case 'economic':
        return '#28a745'; // Verde
      case 'entertainment':
        return '#dc3545'; // Vermelho
      case 'all':
        return '#007bff'; // Azul
      default:
        return '#ff5022'; // Cor padrão
    }
  };

  return (
    <>
      <div
        className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-xl xl:p-8 transform transition-all duration-300 ease-in-out hover:scale-105 border-b-4"
        style={{ borderBottomColor: getPromotionColor(plan.type) }}
      >
        <span
          className="text-xl font-medium text-gray-500 mb-4 border-b-4"
          style={{ borderBottomColor: getPromotionColor(plan.type) }}
        >
          {plan.badge}
        </span>
        <h3
          style={{ backgroundColor: getPromotionColor(plan.type) }}
          className="mb-4 text-xl font-bold text-white px-4"
        >
          PROMOÇÃO {plan.title}
        </h3>

        {/* Lista de funcionalidades com ícones SVG */}
        <ul role="list" className="mb-8 space-y-4 text-left flex-grow">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center space-x-3 hover:bg-gray-200">
                {feature.icon ? (
                    <img src={feature.icon}
                    alt={feature.name}
                    className="flex-shrink-0 w-5 h-5" /> 
                ) : ( 
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg" >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd" >
                        </path>
                    </svg>
                )}
              {/* <img src={feature.icon} alt="" /> */}
              <span>{feature.name}</span>
            </li>
          ))}
        </ul>

        <span className="text-sm font-medium text-gray-500 mb-4 border-b-4">Clique nos ícones para ver as vantagens.</span>

        {/* Verificação de Streaming */}
        {plan.services.streaming && (
          <div
            className="flex flex-col items-center flex-grow cursor-pointer"
            onClick={() => openModal(plan.services.streaming!.name, 'streamings', plan.services.streaming!.logo)}
          >
            <span className="font-semibold my-2">Streaming incluído</span>
            <img
              alt={plan.services.streaming!.name + "logo"}
              className="w-[100px] mt-1"
              src={plan.services.streaming.logo}
            />
          </div>
        )}

        {/* Apps inclusos */}
        <div className="flex flex-col items-center">
          <span className="font-semibold my-2">Aplicativos incluídos</span>
          <div className="grid grid-cols-3 gap-4">
            {plan.services.apps.map((app, idx) => (
              <img
                key={idx}
                alt={app.name + " logo"}
                className="w-[48px] h-[48px] cursor-pointer"
                src={app.logo}
                onClick={() => openModal(app.name, 'apps', app.logo)}
              />
            ))}
          </div>
        </div>

        <a
          href={plan.link}
          className="bg-custom-blue self-center text-white hover:bg-custom-orange font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
        >
          Consulte nossos valores
        </a>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="bg-white p-8 rounded-lg w-11/12 max-w-4xl mx-auto z-50 lg:w-1/2 lg:max-w-md">
            <h3 className="text-2xl font-bold text-custom-blue">{modalContent.name}</h3>
            <div className="flex flex-col items-start mt-4">
              <img src={modalContent.logo} alt={`${modalContent.name} logo`} className="w-[100px] mb-4 " />
              <p className="text-gray-800 font-semibold text-justify">{modalContent.description}</p>
            </div>
            <button
              className="mt-4 bg-custom-orange text-white px-4 py-2 rounded-lg"
              onClick={closeModal}
            >
              Ok, entendi!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GridPlanCorp
