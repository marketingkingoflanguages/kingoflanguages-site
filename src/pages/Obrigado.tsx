import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function Obrigado() {
  return (
    <section className="py-20">
      <div className="max-w-md mx-auto px-4 text-center py-12">
        <CheckCircle size={56} className="text-success mx-auto mb-4" />
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-3">Recebemos sua mensagem!</h1>
        <p className="text-gray-600 mb-6">Um consultor vai entrar em contato pelo WhatsApp em até 24 horas.</p>
        <p className="text-gray-600 mb-6">Enquanto isso, que tal descobrir seu nível de inglês?</p>
        <Link to="/teste-seu-nivel" className="inline-flex items-center justify-center border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold px-6 py-3 rounded-full transition-colors">
          Fazer teste de nível →
        </Link>
      </div>
    </section>
  );
}
