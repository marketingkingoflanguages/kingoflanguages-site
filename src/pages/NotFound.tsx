import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="max-w-md mx-auto px-4 text-center py-12">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-3">Ops! Página não encontrada.</h1>
        <p className="text-gray-600 mb-6">A página que você procura não existe ou foi movida.<br />Mas a gente pode te ajudar:</p>
        <div className="flex flex-col gap-3">
          <Link to="/" className="bg-primary hover:bg-primary-600 text-white font-semibold py-3 rounded-full transition-colors no-underline">Voltar para a home</Link>
          <Link to="/aulas-particulares" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold py-3 rounded-full transition-colors no-underline">Ver aulas particulares</Link>
          <Link to="/teste-seu-nivel" className="text-gray-700 hover:bg-gray-100 font-semibold py-3 rounded-full transition-colors no-underline">Testar meu nível de inglês</Link>
        </div>
      </div>
    </section>
  );
}
