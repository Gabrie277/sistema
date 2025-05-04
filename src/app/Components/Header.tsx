'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaHome, FaLeaf, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold">Farma Estimulantes</h1>

        {/* Botão do menu mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-blue-400 transition">
                <FaHome /> Início
              </Link>
            </li>
            <li>
              <Link href="http://localhost:3000/#projects" className="flex items-center gap-1 hover:text-blue-400 transition">
                <FaLeaf /> Produtos
              </Link>
            </li>
            <li>
              <Link href="http://localhost:3000/#contact" className="flex items-center gap-1 hover:text-blue-400 transition">
                <FaEnvelope /> Comentários
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 p-6 z-50"
        >
          <ul className="space-y-6 text-xl">
            <li>
              <Link
                href="/"
                className="flex items-center gap-3 hover:text-blue-400"
                onClick={toggleMenu}
              >
                <FaHome /> Início
              </Link>
            </li>
            <li>
              <Link
                href="http://localhost:3000/#projects"
                className="flex items-center gap-3 hover:text-blue-400"
                onClick={toggleMenu}
              >
                <FaLeaf /> Produtos
              </Link>
            </li>
            <li>
              <Link
                href="http://localhost:3000/#contact"
                className="flex items-center gap-3 hover:text-blue-400"
                onClick={toggleMenu}
              >
                <FaEnvelope /> Comentários
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
