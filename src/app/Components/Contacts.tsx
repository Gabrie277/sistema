'use client';

import Image from 'next/image';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contacts = () => {
  const testimonials = [
    {
      name: 'Carlos Eduardo',
      comment:
        'O Farma Estimulantes superou minhas expectativas! Conteúdo confiável e uma navegação intuitiva. Recomendo muito!',
      image: '/p1.jpg', // caminho ajustado
    },
    {
      name: 'Juliana Silva',
      comment:
        'Simplesmente adorei! O site tem um design lindo e as informações são muito úteis. Uso como referência todos os dias.',
      image: '/p2.jpg', // caminho ajustado
    },
    {
      name: 'Fernanda Rocha',
      comment:
        'Farma Estimulantes é o melhor lugar para aprender sobre estimulantes naturais. Tudo muito bem explicado!',
      image: '/p3.jpg', // caminho ajustado
    },
  ];

  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          O que dizem sobre o Farma Estimulantes
        </h2>

        {/* Depoimentos */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="rounded-full mb-4 border-2 border-blue-500"
              />
              <p className="text-gray-300 mb-4 italic">
                &quot;{item.comment}&quot;
              </p>
              <p className="text-blue-400 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Redes Sociais */}
        <div className="text-center mt-16">
          <p className="text-lg mb-4">Siga-me nas redes sociais:</p>
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="https://twitter.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
