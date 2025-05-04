const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2">Desenvolvido com Next.js e Tailwind CSS</p>
        <p className="text-xs mt-2">
          <a href="#hero" className="hover:underline" aria-label="Voltar ao topo">
            Voltar ao topo
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
