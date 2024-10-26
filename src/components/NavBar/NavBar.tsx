"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/components/images/Ein-soft(3).png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          {/* Logo */}
          <div className="flex space-x-4">
            <Link href="/">
              <div className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                {/* Puedes reemplazar esto con tu logo */}
                <Image src={logo} alt="Logo" width={80}/>
                <span className="font-bold text-3xl px-5">Einsoft</span>
              </div>
            </Link>
          </div>

          {/* Menú principal */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/">
              <div className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</div>
            </Link>
            <Link href="/nosotros">
              <div className="py-5 px-3 text-gray-700 hover:text-gray-900">Nosotros</div>
            </Link>
            <Link href="/pelea">
              <div className="py-5 px-3 text-gray-700 hover:text-gray-900">Pelea</div>
            </Link>
            <Link href="/tienda">
              <div className="py-5 px-3 text-gray-700 hover:text-gray-900">Tienda</div>
            </Link>
            <Link href="/juega">
              <div className="py-5 px-3 text-gray-700 hover:text-gray-900">Juega</div>
            </Link>
          </div>

          {/* Botón del menú móvil */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden">
          <Link href="/">
            <div className="block py-2 px-4 text-sm hover:bg-gray-200">Home</div>
          </Link>
          <Link href="/nosotros">
            <div className="block py-2 px-4 text-sm hover:bg-gray-200">Nosotros</div>
          </Link>
          <Link href="/pelea">
            <div className="block py-2 px-4 text-sm hover:bg-gray-200">Pelea</div>
          </Link>
          <Link href="/tienda">
            <div className="block py-2 px-4 text-sm hover:bg-gray-200">Tienda</div>
          </Link>
          <Link href="/juega">
            <div className="block py-2 px-4 text-sm hover:bg-gray-200">Juega</div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
