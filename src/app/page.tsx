"use client";

import Image from "next/image";
import { FaChartGantt } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <div className="bg-gradient-to-b from-gray-700 to-slate-700 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between text-center md:text-left pt-32 pb-20 md:pb-10">
          <div className="md:ml-20">
            <h1 className="block text-4xl md:text-7xl text-white mb-5 text-shadow-slate-800 text-shadow-lg font-extrabold">
              Gantt Generator
            </h1>
            <p className="block text-gray-300 text-xl md:text-3xl text-shadow-slate-800 text-shadow-lg">
              Convierte tus tareas en diagramas
            </p>
            <button className="relative group block mx-auto md:mx-0 cursor-pointer rounded-2xl p-3 md:text-2xl text-md mt-10 mb-5 ring-4 ring-indigo-100 overflow-hidden transition-transform duration-300 hover:scale-105">
              <span className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-600 transition-opacity duration-500"></span>
              <span className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 text-white">
                Empieza a generar
              </span>
            </button>
          </div>
          <div>
            <Image
              data-aos="fade-left"
              className="hidden md:block mr-20 mb-10"
              src="/logo.svg"
              alt="Logo del sitio"
              width={420}
              height={200}
              priority
            />
          </div>
        </div>
        <div className="bg-gradient-to-b from-slate-700 to-indigo-900 flex flex-col items-center p-5 w-full min-h-[400px] snap-center">
          <div>
            <h2
              data-aos="fade-down"
              data-aos-anchor-placement="top-center"
              className="text-center pt-12 md:pt-24 text-white text-6xl text-shadow-slate-800 text-shadow-lg font-extrabold w-full max-w-4xl pb-4"
            >
              Agiliza tus proyectos
            </h2>
            <div
              data-aos="fade-down"
              data-aos-anchor-placement="top-center"
              className="flex flex-col md:flex-row items-center md:items-start w-full max-w-4xl mt-8"
            >
              <p className="pt-8  text-2xl md:text-3xl text-gray-100 flex-1 md:mr-8">
                Los diagramas de Gantt permiten visualizar el progreso de tus tareas a través del tiempo, quiénes las realizan y de qué dependen,{" "}
                <span className="font-extrabold">
                  todo en una misma gráfica
                </span>
                .
              </p>
              <FaChartGantt className="hidden md:block" size={180} />
            </div>
            <div
              data-aos="fade-down"
              data-aos-anchor-placement="top-center"
              className="flex flex-col md:flex-row items-center md:items-start w-full max-w-4xl"
            >
              <p className="mt-60 max-w-4xl text-center text-gray-200 text-base md:text-3xl">
                <span className="font-extrabold text-gray-200">
                  Gantt Generator
                </span>{" "}
                te permite utilizar esta herramienta en pocos pasos:{" "}
                <span>
                  ingresa a la página de creación, detalla tus tareas y recibe un diagrama.
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
