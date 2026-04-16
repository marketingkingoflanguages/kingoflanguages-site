import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/aulas-particulares', label: 'Aulas Particulares' },
  { href: '/teste-seu-nivel', label: 'Teste seu Nível' },
  { href: '/sobre-nos', label: 'Sobre' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-[75rem] mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="shrink-0">
          <img src="/imagens/logo-dark.png" alt="King of Languages" className="h-[7rem] w-auto -my-8 object-contain" />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Menu principal">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                pathname === link.href
                  ? 'text-primary font-semibold'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block shrink-0">
          <Link to="/contato" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-primary hover:bg-primary-600 px-5 py-2.5 rounded-full transition-colors">
            Comece agora
          </Link>
        </div>

        {/* Hambúrguer */}
        <button className="md:hidden p-2 text-gray-700" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden flex flex-col gap-1 px-4 pb-4 border-t border-gray-200 bg-white">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className={`text-base font-medium px-4 py-3 rounded-lg transition-colors ${
                pathname === link.href ? 'text-primary font-semibold' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contato" onClick={() => setOpen(false)} className="mt-2 text-center text-white bg-primary hover:bg-primary-600 font-semibold py-3 rounded-full transition-colors">
            Comece agora
          </Link>
        </div>
      )}
    </header>
  );
}
