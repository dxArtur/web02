'use client'
import { useEffect, useRef, useState } from "react"
import Navbar from "../components/Navbar";



export default function HomePage () {

    
const [isVisible, setIsVisible] = useState(false)
const ref = useRef(null)

useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

    return(

        <div>
            
            <div className=" mt-10 flex flex-col items-center md:min-h-[calc(100vh-110px)] min-h-[calc(100vh-70px)] text-blue-800 font-bold">
                <div>
                    <a>
                        <img src="g10logofull.png" alt="Logo da G10 Solution" className="h-32 md:h-48 animate-fadeIn" />
                    </a>
                </div>
                <div className="text-center text-2xl md:text-4xl drop-shadow-lg">
                    <h2 className="text-2xl md:text-3xl animate-fadeInDrop">Bem vindo a G10 Solution,</h2>
                    <h3 className="text-2xl md:text-3xl animate-fadeInDrop">sua parceira em soluções avançadas de</h3>
                    <div className="flex flex-col md:flex-row items-center justify-center text-lg md:text-2xl pt-2 md:gap-x-2">
                        <div className="flex">
                            <span className="block font-normal text-lg md:text-2xl animate-fadeInDrop underline-animation">{"Videomonitoramento"}</span>
                            <span className="inline-block font-normal text-lg md:text-2xl animate-fadeInDrop">{","}</span>
                        </div>
                        <span className="block font-normal text-lg md:text-2xl animate-fadeInDrop underline-animation">{"materiais de telecom"}</span>
                        <div className="flex gap-x-2">
                            <span className="block font-normal text-lg md:text-2xl animate-fadeInDrop">e </span>
                            <span className="inline-block font-normal text-lg md:text-2xl animate-fadeInDrop underline-animation ">{"cloud"}</span>
                        </div>
                    </div>
                    {/* <h3 className="font-normal text-lg md:text-2xl px-2">videomonitoramento, Cloud e Materiais de Telecom</h3> */}
                    <h3 className="mt-2 text-center font-light text-sm md:text-base px-2 animate-fadeInDrop animate-slideIn">Nós estamos constantemente inovando para oferecer</h3>
                    <h4 className="text-center font-light text-sm md:text-base animate-fadeInDrop animate-slideIn">soluções que impulsionem a sua conectividade com o sucesso.</h4>
                    <div className="flex flex-col md:flex-row mt-10 text-center items-center justify-center text-base font-normal text-slate-100 gap-y-4 md:gap-x-4 sm:flex-col sm:gap-y-4">
                        <a href="#contact"><button className="border border-slate-950 bg-blue-900 text-white p-4 rounded-sm animate-fadeInDrop">Conheça nossos planos</button></a>
                        <a href="#contact"><button className="border border-blue-900 text-blue-900 p-4 rounded-sm animate-fadeInDrop">Fale conosco</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}