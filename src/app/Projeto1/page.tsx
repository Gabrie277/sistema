'use client';

import Image from 'next/image';

const Bula = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 bg-white shadow-md rounded-lg">
      {/* Imagem circular responsiva */}
      <div className="flex justify-center mb-6 mt-4">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
          <Image
            src="/tropical.jpg"
            alt="Imagem ilustrativa do chá verde"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
      </div>

      {/* Título responsivo */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gray-900 text-center">
        CHÁ VERDE (Camellia sinensis)
      </h1>

      <article className="space-y-8 text-gray-800 text-base sm:text-lg leading-relaxed">
        <section>
          <p><strong>Nome popular:</strong> Chá verde</p>
          <p><strong>Nome científico:</strong> Camellia sinensis</p>
          <p><strong>Forma de uso:</strong> Infusão (chá), cápsulas ou extrato</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Composição</h2>
          <p>
            Folhas secas de Camellia sinensis, ricas em polifenóis, catequinas (principalmente epigalocatequina galato - EGCG), cafeína, vitaminas (C, B1, B2) e minerais.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Indicações</h2>
          <ul className="list-disc list-inside">
            <li>Estimulante natural (contém cafeína)</li>
            <li>Auxilia na perda de peso (termogênico)</li>
            <li>Ação antioxidante (proteção contra radicais livres)</li>
            <li>Melhora da concentração e disposição</li>
            <li>Contribui para a saúde cardiovascular</li>
            <li>Pode ajudar no controle dos níveis de colesterol e glicose</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Modo de uso</h2>
          <p>
            <strong>Chá (infusão):</strong><br />
            Ferver 1 xícara de água (200 ml), desligar o fogo e adicionar 1 colher de chá das folhas secas. Tampar e deixar em infusão por 5 a 10 minutos. Coar e beber até 3 xícaras por dia.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Cápsulas ou extrato</h2>
          <p>
            Seguir as orientações do fabricante ou de um profissional de saúde.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Contraindicações</h2>
          <p>
            Gestantes e lactantes (sem orientação médica).<br />
            Pessoas com hipertensão, ansiedade, insônia, gastrite ou úlceras devem consultar um médico.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Efeitos colaterais (em excesso)</h2>
          <ul className="list-disc list-inside">
            <li>Insônia, irritabilidade, taquicardia</li>
            <li>Náuseas, azia, desconforto gástrico</li>
            <li>Redução da absorção de ferro de alimentos</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Interações medicamentosas</h2>
          <p>
            Pode interagir com anticoagulantes (ex.: varfarina), medicamentos para pressão e estimulantes.<br />
            Pode interferir na absorção de ferro e ácido fólico.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Armazenamento</h2>
          <p>
            Conservar em local seco, fresco e ao abrigo da luz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Advertências</h2>
          <p>
            Produto natural não isento de riscos.<br />
            Consulte um profissional de saúde antes de iniciar o uso regular.<br />
            O uso contínuo deve ser moderado.
          </p>
        </section>
      </article>
    </section>
  );
};

export default Bula;
