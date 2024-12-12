import { useState, useEffect } from 'react';

const TextAlternator = () => {
  const [currentText, setCurrentText] = useState('A melhor para gamers');
  const [activeIndex, setActiveIndex] = useState(0);  // Estado para o índice da frase atual

  useEffect(() => {
    const texts = [
      "A mais recomendada para os Gamers 👾",
      "A ideal para assistir o seu streaming 🍿",
      "A mais econômica para conectar empresa 🌐",
    ];

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % texts.length
      setCurrentText(texts[index])
      setActiveIndex(index)
    }, 3000)

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, []);

  return (
    <div className="text-center">
      {/* Texto Alternante */}
      <div className="text-sm lg:text-lg font-semibold text-gray-300">
        <span>{currentText}</span>
      </div>

      {/* Bolinhas Indicadoras */}
      <div className="flex justify-center lg:justify-start space-x-2 mt-1">
        {/* Bolinha 1 */}
        <div
          className={`w-2 h-2 rounded-full ${activeIndex === 0 ? 'bg-orange-500' : 'bg-gray-400'}`}
        ></div>
        {/* Bolinha 2 */}
        <div
          className={`w-2 h-2 rounded-full ${activeIndex === 1 ? 'bg-orange-500' : 'bg-gray-400'}`}
        ></div>
        {/* Bolinha 3 */}
        <div
          className={`w-2 h-2 rounded-full ${activeIndex === 2 ? 'bg-orange-500' : 'bg-gray-400'}`}
        ></div>
      </div>
    </div>
  );
};

export default TextAlternator;
