import Image from "next/image";
import logoEinsof from "../components/images/Ein-soft(2).png"
import Carousel from "@/components/Carrusel/Carrusel";

import photo1 from "@/components/images/carrusel/photo1.jpg"
import photo2 from "@/components/images/carrusel/photo2.jpg"
import photo3 from "@/components/images/carrusel/photo3.jpg"

const images = [
  {photo1},
  {photo2},
  {photo3},
];

export default function Home() {

    const titulo  : string  = "Soluciones Informáticas";
    const texto   : string  = "En nuestro enfoque para la resolución de problemas, creemos que la mejor solución se construye en capas bien definidas. Cada problema es único y presenta múltiples facetas que deben abordarse progresivamente. Por eso, trabajamos a través de un proceso estructurado, asegurando una comprensión completa y una ejecución precisa en cada etapa de la solución.";



  return (
    <div className="mx-auto flex flex-col md:flex-row items-center md:items-start mt-5 p-6 md:p-8 bg-white  w-3/4">
          <div>
      
    </div>
      
      {/* Logo Section */}
      <div className="flex-shrink-0 md:w-1/3 w-full flex justify-center md:justify-start mb-4 md:mb-0">
        <Image src={logoEinsof} alt="Logo" width={360} />
      </div>

      {/* Text Section */}
      <div className="md:w-2/3 w-full text-center md:text-left">
        <h1 className="text-3xl md:text-3xl font-semibold text-gray-800 m-10 vertical-align: middle; lg:text-center flex justify-center">{titulo}</h1>
        {/* <p className="text-gray-600 mt-2">{texto}</p> */}
      </div>
    </div>
  );
}
