import { Link } from 'react-router-dom';
import { BarChart3, CheckCircle, Zap, Clock, Target } from 'lucide-react';

const niveis = [
  { code: 'A1', name: 'Iniciante', desc: 'Entende frases simples e se apresenta.', slug: 'a1-iniciante', color: 'text-success' },
  { code: 'A2', name: 'Pré-intermediário', desc: 'Conversa sobre rotina e situações do dia a dia.', slug: 'a2-pre-intermediario', color: 'text-success' },
  { code: 'B1', name: 'Intermediário', desc: 'Se vira em viagens e conta experiências.', slug: 'b1-intermediario', color: 'text-secondary' },
  { code: 'B2', name: 'Intermediário superior', desc: 'Participa de reuniões e debates com fluência.', slug: 'b2-intermediario-superior', color: 'text-secondary' },
  { code: 'C1', name: 'Avançado', desc: 'Usa inglês profissionalmente com naturalidade.', slug: 'c1-avancado', color: 'text-primary' },
  { code: 'C2', name: 'Proficiente', desc: 'Domínio quase nativo. Entende tudo, fala tudo.', slug: 'c2-proficiente', color: 'text-primary' },
];

export default function TesteSeuNivel() {
  return (
    <>
      <section className="bg-secondary py-16 lg:py-20">
        <div className="max-w-[75rem] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-[family-name:var(--font-heading)] text-3xl lg:text-[2.75rem] font-bold text-white mb-4">Descubra seu nível<br />de inglês</h1>
            <p className="text-lg text-white/90 mb-6">Teste gratuito de 5 minutos. Resultado na hora.</p>
            <Link to="/teste-de-nivelamento-de-ingles" className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-secondary font-semibold px-8 py-3.5 rounded-full transition-colors">Começar o teste →</Link>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { icon: BarChart3, title: '20 perguntas', desc: 'Do básico ao avançado' },
              { icon: Clock, title: '5 minutos', desc: 'Rápido e objetivo' },
              { icon: Zap, title: 'Resultado na hora', desc: 'Sem espera, sem custo' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3 bg-white/12 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                <Icon size={24} className="text-white shrink-0" />
                <div>
                  <strong className="text-sm text-white block">{title}</strong>
                  <span className="text-xs text-white/70">{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[75rem] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold">Como funciona o teste</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
            {[
              { icon: CheckCircle, title: 'Múltipla escolha', text: 'Responda perguntas simples. Sem escrita, sem áudio.' },
              { icon: BarChart3, title: 'Progride em dificuldade', text: 'As perguntas vão do básico ao avançado automaticamente.' },
              { icon: Target, title: 'Resultado personalizado', text: 'Descubra seu nível CEFR e receba uma recomendação de curso.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <div className="w-14 h-14 rounded-full bg-secondary-50 inline-flex items-center justify-center mb-3">
                  <Icon size={28} className="text-secondary" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-500 max-w-none">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-[75rem] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold mb-2">O que significam os níveis de inglês?</h2>
            <p className="text-gray-500">O CEFR é o padrão internacional para medir proficiência em idiomas.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[52rem] mx-auto">
            {niveis.map(n => (
              <Link key={n.code} to={`/${n.slug}`} className="text-center p-6 bg-white border border-gray-200 rounded-xl no-underline hover:shadow-md hover:-translate-y-1 transition-all">
                <div className={`font-[family-name:var(--font-heading)] text-3xl font-bold mb-1 ${n.color}`}>{n.code}</div>
                <div className="font-semibold text-gray-900 mb-2">{n.name}</div>
                <div className="text-sm text-gray-500">{n.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="max-w-[75rem] mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white mb-3">Pronto para descobrir?</h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">São apenas 5 minutos. Sem custo, sem compromisso.</p>
          <Link to="/teste-de-nivelamento-de-ingles" className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-3.5 rounded-full transition-colors">Começar o teste agora →</Link>
        </div>
      </section>
    </>
  );
}
