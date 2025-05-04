'use client';

import Image from 'next/image';

const Bula = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 bg-white shadow-md rounded-lg">
      {/* Imagem circular e centralizada */}
      <div className="flex justify-center mb-6 mt-6">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-green-600 shadow-lg">
          <Image
            src="/G.webp"
            alt="Imagem ilustrativa do pó de guaraná"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
      </div>

      {/* Título principal */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 text-center">
        Pó de Guaraná
      </h1>

      {/* Conteúdo do artigo */}
      <article className="space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed">
        <section>
          <p><strong>Nome popular:</strong> Pó de Guaraná (Paullinia cupana)</p>
          <p><strong>Forma farmacêutica:</strong> Pó</p>
          <p><strong>Parte usada:</strong> Uso Oral</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Composição</h2>
          <p>Cada 1g de pó contém: Extrato seco de sementes de guaraná (Paullinia cupana) – 1g.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Indicação</h2>
          <p>
            Estimulante natural. Auxilia no aumento da energia e disposição, podendo ajudar na fadiga física e mental. Popularmente usado para melhorar a concentração, reduzir a sonolência e contribuir em dietas para controle de peso.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Posologia e modo de usar</h2>
          <p>
            Adultos: ingerir de 1 a 2 colheres de café (aproximadamente 1 a 2g) ao dia, diluídas em água, sucos ou vitaminas. Não exceder a dose diária recomendada.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Cápsulas ou extrato</h2>
          <p>Seguir as orientações do fabricante ou de um profissional de saúde.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Contraindicações</h2>
          <p>
            Hipersensibilidade (alergia) ao guaraná ou a qualquer componente da fórmula. Não indicado para crianças, gestantes, lactantes, hipertensos, pessoas com úlcera gástrica ou problemas cardíacos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Precauções e advertências</h2>
          <ul className="list-disc list-inside pl-5">
            <li>Pode causar insônia, irritabilidade, taquicardia e dores de cabeça, especialmente em doses elevadas.</li>
            <li>Evite uso combinado com outras fontes de cafeína.</li>
            <li>Consulte um profissional de saúde antes de iniciar o uso, especialmente se fizer uso de medicamentos ou tiver condições médicas preexistentes.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Reações adversas</h2>
          <p>
            Em doses elevadas ou sensibilidade à cafeína: Agitação, insônia, aumento dos batimentos cardíacos, náuseas, tontura, ansiedade.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Interações medicamentosas</h2>
          <p>
            Pode potencializar efeitos de estimulantes, como cafeína e anfetaminas. Pode interferir em medicamentos para hipertensão, antidepressivos e anticoagulantes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Armazenamento</h2>
          <p>Conservar em local seco, fresco e ao abrigo da luz. Manter a embalagem bem fechada após o uso.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Validade</h2>
          <p>Verifique o prazo de validade na embalagem. Não utilize o produto vencido.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Registro</h2>
          <p>
            Produto dispensado de registro pela ANVISA conforme RDC n° 240/2018 (quando vendido como suplemento alimentar ou produto natural).
          </p>
        </section>
      </article>
    </section>
  );
};

export default Bula;
