import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-[75rem] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src="/imagens/logo.webp" alt="King of Languages" className="h-8 w-auto mb-4" />
          <p className="text-sm leading-relaxed max-w-[20rem]">
            Escola de inglês 100% online. Mais de 9.000 profissionais brasileiros já estudaram com a King.
          </p>
        </div>

        <div>
          <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4 font-[family-name:var(--font-heading)]">Cursos</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/aulas-particulares" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">Aulas Particulares</Link></li>
            <li><Link to="/teste-seu-nivel" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">Teste seu Nível</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4 font-[family-name:var(--font-heading)]">Institucional</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/sobre-nos" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">Sobre nós</Link></li>
            <li><Link to="/contato" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">Contato</Link></li>
            <li><Link to="/politica-de-privacidade" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">Política de Privacidade</Link></li>
            <li><Link to="/termos-de-uso" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">Termos de Uso</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4 font-[family-name:var(--font-heading)]">Contato</h4>
          <ul className="flex flex-col gap-2">
            <li><a href="https://wa.link/6l9vqf" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">WhatsApp</a></li>
            <li><a href="https://www.instagram.com/kingoflanguagesoficial" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">Instagram</a></li>
            <li><a href="https://www.facebook.com/kingoflanguagesoficial/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">Facebook</a></li>
            <li><a href="https://br.linkedin.com/company/kingoflanguages" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors no-underline">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[75rem] mx-auto px-4 pt-8 mt-8 border-t border-gray-700">
        <span className="text-xs text-gray-500">&copy; {year} King of Languages | CNPJ: 42.871.394/0001-01</span>
      </div>
    </footer>
  );
}
