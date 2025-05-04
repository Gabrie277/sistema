'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/w.jpg')" }}
    >
      {/* Overlay escura com transparência */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-5 py-8 rounded-xl">
          {/* Logo */}
          <div className="mx-auto mb-4 w-40 h-40 sm:w-60 sm:h-60 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/logo.jpeg"
              alt="Logo Farma Estimulantes"
              width={240}
              height={240}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 240px"
              priority
            />
          </div>

          {/* Título e Descrição */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Farma Estimulantes
          </h1>
          <p className="text-xl mb-6 text-white">
            Desenvolvedor Web apaixonado por criar interfaces incríveis e experiências digitais impactantes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
