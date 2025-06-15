import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <div className="bg-gray-700 flex items-center justify-between">
          <div className="ml-20">
            <h1 className="block text-6xl text-indigo-100 mb-5">Gantt Generator</h1>
            <p className="block text-gray-300 text-2xl">Convierte tus tareas en diagramas</p>
          </div>
          <div>
            <Image
              className="mr-20 mt-10 mb-10 fade-in"
              src="/logo.svg"
              alt="Logo del sitio"
              width={360}
              height={76}
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
