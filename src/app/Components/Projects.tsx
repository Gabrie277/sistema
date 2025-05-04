'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  link: string;
  image?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'CHÁ VERDE (Camellia sinensis)',
      description:
        'O chá verde é uma bebida feita a partir das folhas frescas da planta Camellia sinensis.',
      link: '/Projeto1',
      image: 'https://mediconutrologorj.com.br/images/Fitoterapicos/Cha-Verde.jpg',
    },
    {
      title: 'Chá de Camomila',
      description:
        'O chá de camomila é uma infusão relaxante e com diversos benefícios para a saúde, como aliviar a ansiedade, melhorar o sono e reduzir a tensão pré-menstrual.',
      link: '/Projeto2',
      image:
        'https://images.tcdn.com.br/img/img_prod/602464/cha_camomila_dr_oetker_sache_10g_caixa_15_unidades_287_1_20201014102051.png',
    },
    {
      title: 'PÓ DE GUARANÁ',
      description:
        'O pó de guaraná é um estimulante natural que melhora a disposição, auxilia na perda de peso e combate a fadiga.',
      link: '/Projeto3',
      image:
        'https://images.tcdn.com.br/img/img_prod/793400/guarana_em_po_100gr_643_1_2fd282b0833915070100f8c784656596.jpg',
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Meus Projetos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
            >
              {project.image && (
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                  <Image
                    src={project.image}
                    alt={`Imagem do projeto: ${project.title}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
              {project.link.startsWith('/') ? (
                <Link href={project.link} className="text-blue-500 hover:underline">
                  Ver projeto
                </Link>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Ver projeto
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
