'use client';

import Image from 'next/image';

const Bula = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 bg-white shadow-md rounded-lg">
      {/* Imagem circular, centralizada e responsiva */}
      <div className="flex justify-center mb-6 mt-4">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
          <Image
            src="/char.webp"
            alt="Imagem ilustrativa do chá de camomila"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
      </div>

      {/* Título responsivo */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 text-center">
        Chá de Camomila
      </h1>

      <article className="space-y-8 text-gray-800 text-base sm:text-lg leading-relaxed">
        <section>
          <p><strong>Nome popular:</strong> Camomila</p>
          <p><strong>Nome científico:</strong> Matricaria recutita L.</p>
          <p><strong>Parte usada:</strong> Flores secas.</p>
          <p><strong>Forma de uso:</strong> Infusão (chá)</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Indicações</h2>
          <p>
            Calmante natural (ansiolítico leve).<br />
            Auxiliar no tratamento da insônia leve.<br />
            Alívio de cólicas intestinais e menstruais.<br />
            Anti-inflamatório e digestivo leve.<br />
            Redução de gases e desconfortos estomacais.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Modo de preparo</h2>
          <p>Infusão:</p>
          <ul className="list-disc list-inside pl-5">
            <li>1 colher de sopa de flores secas de camomila</li>
            <li>200 ml (1 xícara) de água fervente</li>
            <li>Adicionar as flores à água fervente, tampar e deixar em infusão por 5 a 10 minutos</li>
            <li>Coar e beber morno</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Posologia</h2>
          <p>Adultos: 1 xícara de chá, 2 a 3 vezes ao dia.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Cápsulas ou extrato</h2>
          <p>Seguir as orientações do fabricante ou de um profissional de saúde.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Contraindicações</h2>
          <p>
            Alergia a plantas da família Asteraceae (como ambrosia, margarida, crisântemo).<br />
            Uso em crianças menores de 2 anos sem orientação médica.<br />
            Gestantes e lactantes: uso com cautela e sempre com orientação médica.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Efeitos colaterais</h2>
          <ul className="list-disc list-inside pl-5">
            <li>Em casos raros: reações alérgicas (coceira, urticária, dificuldade para respirar)</li>
            <li>Sonolência leve</li>
            <li>Irritação gastrointestinal (em uso excessivo)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Interações medicamentosas</h2>
          <p>
            Pode potencializar o efeito de sedativos, ansiolíticos e anticoagulantes.<br />
            Evitar o uso concomitante com álcool e medicamentos que causam sonolência.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Conservação</h2>
          <p>
            Armazenar em local seco, arejado e protegido da luz.<br />
            <strong>Validade:</strong> até 12 meses após a colheita ou conforme embalagem.
          </p>
        </section>
      </article>
    </section>
  );
};

export default Bula;
