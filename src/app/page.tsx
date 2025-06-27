"use client";

import Image from "next/image";
import { FaChartGantt } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
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
        <div className="bg-gradient-to-b from-gray-700 to-slate-700 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between text-center md:text-left pt-16 pb-20 md:pb-0">
          <div className="md:ml-20">
            <h1 className="block text-5xl md:text-7xl text-white mb-5 text-shadow-slate-800 text-shadow-lg font-extrabold">
              Gantt Generator
            </h1>
            <p className="block text-gray-300 text-2xl md:text-3xl text-shadow-slate-800 text-shadow-lg">
              Convierte tus tareas en diagramas
            </p>
            <button className="relative group block mx-auto md:mx-0 cursor-pointer rounded-2xl p-3 md:text-3xl text-2xl mt-10 mb-5 ring-4 ring-indigo-100 overflow-hidden transition-transform duration-300 hover:scale-105 shadow-xl shadow-slate-800">
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
              className="text-center pt-12 md:pt-24 text-white text-4xl md:text-6xl text-shadow-slate-800 text-shadow-lg font-extrabold w-full max-w-4xl pb-4"
            >
              Agiliza tus proyectos
            </h2>
            <div
              data-aos="fade-down"
              data-aos-anchor-placement="top-center"
              className="flex flex-col md:flex-row items-center md:items-start w-full max-w-4xl mt-8"
            >
              <p className="pt-8  text-2xl md:text-3xl text-gray-100 flex-1 md:mr-8 text-center">
                Los diagramas de Gantt permiten visualizar el progreso de tus tareas a través del tiempo, quiénes las realizan y de qué dependen,{" "}
                <span className="font-extrabold">
                  todo en una misma gráfica
                </span>
                .
              </p>
              <FaChartGantt
                className="scale-75 md:scale-100 block"
                size={180}
              />
            </div>
            <div
              data-aos="fade-down"
              data-aos-anchor-placement="top-center"
              className="flex flex-col-reverse md:flex-row items-center md:items-start w-full max-w-4xl mb-20"
            >
              <FaRegUser className="scale-75 md:scale-100 block w-[171px] h-[200px] max-h-[200px] max-w-[171px] min-w-[171px] min-h-[200px] md:mt-30 mr-5" />
              <p className="mt-20 md:mt-40 max-w-4xl text-center text-gray-200 text-2xl md:text-3xl">
                <span className="font-extrabold text-gray-200">
                  Gantt Generator
                </span>{" "}
                te permite utilizar esta herramienta en pocos pasos:{" "}
                <span>
                  Ingresa a la página de creación, detalla tus tareas y recibe un diagrama.{" "}
                  <b>Sin necesidad de crear una cuenta</b>.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-indigo-900 to-cyan-900">
          <div
          data-aos="fade-down"
          data-aos-anchor-placement="top-center">
            <h2 className="text-center text-white text-4xl md:text-6xl text-shadow-slate-800 text-shadow-lg font-extrabold w-full pb-8">
              Funcionalidades
            </h2>
            <h3 className="text-center text-gray-300 text-xl md:text-3xl text-shadow-slate-800 text-shadow-lg font-extrabold w-full pb-12">Con Gantt Generator, puedes...</h3>
            <div className="flex flex-col flex-wrap md:flex-row sm:w-[75%] mx-auto md:gap-[3%]">
              <div className="text-center bg-black/70 w-[70%] md:w-[30%] rounded-4xl p-8 mb-8 mx-auto min-w-xs md:max-h-70 lg:max-h-83 xl:max-h-100">
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold w-full pb-4">
                  Crear diagramas de Gantt
                </h4>
                <p className="text-md sm:text-lg lg:text-xl">
                  Detalla cada tarea e hito de tu proyecto y Gantt Generator se encargará de convertirlo en un diagrama.
                </p>
              </div>
              <div className="text-center bg-black/70 w-[70%] md:w-[30%] rounded-4xl p-8 mb-8 mx-auto min-w-xs md:max-h-70 lg:max-h-83 xl:max-h-100">
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold w-full pb-4">
                  Visualizar tus gráficas
                </h4>
                <p className="text-md sm:text-lg lg:text-xl">
                  Mira cómo evoluciona tu proyecto a través del tiempo con el calendario y elige el intervalo de tiempo que desees.
                </p>
              </div>
              <div className="text-center bg-black/70 w-[70%] md:w-[30%] rounded-4xl p-8 mb-8 mx-auto min-w-xs md:max-h-70 lg:max-h-83 xl:max-h-100">
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold w-full pb-4">
                  Descargar tus creaciones
                </h4>
                <p className="text-md sm:text-lg lg:text-xl">
                  Puedes exportar los detalles de tu proyecto a un CSV y pasar el diagrama a una imagen para compartir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
