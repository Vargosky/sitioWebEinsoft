import React from 'react';
import { ArrowRight, Shield, Cpu, Cloud, Users, ChevronRight, MessageSquare } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      title: "Soluciones Cloud",
      description: "Infraestructura escalable y segura para tu negocio",
      icon: <Cloud className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Ciberseguridad",
      description: "Protección avanzada contra amenazas digitales",
      icon: <Shield className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Desarrollo Software",
      description: "Aplicaciones personalizadas de alta calidad",
      icon: <Cpu className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Soporte 24/7",
      description: "Asistencia técnica continua y personalizada",
      icon: <Users className="w-6 h-6 text-indigo-600" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 to-blue-900">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Soluciones tecnológicas</span>
                  <span className="block text-indigo-400">para el futuro</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Transformamos tu negocio con soluciones informáticas innovadoras y personalizadas. Expertos en tecnología al servicio de tu éxito.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Comenzar
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      Contáctanos
                      <MessageSquare className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Servicios</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Soluciones integrales para tu empresa
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Ofrecemos un conjunto completo de servicios tecnológicos diseñados para impulsar tu negocio.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div key={index} className="relative group">
                  <div className="h-full bg-white rounded-lg shadow-lg transition-all duration-300 transform group-hover:-translate-y-2 p-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 group-hover:bg-indigo-600 transition-colors duration-300">
                      {React.cloneElement(feature.icon, {
                        className: "w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300"
                      })}
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </p>
                    <div className="mt-4 flex items-center text-indigo-600">
                      <span className="text-sm font-medium">Saber más</span>
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">¿Listo para transformar tu negocio?</span>
            <span className="block text-indigo-200">Contacta con nuestro equipo hoy.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                Agenda una consulta
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;