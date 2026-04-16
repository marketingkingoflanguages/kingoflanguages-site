import { Link } from 'react-router-dom';
import { Target, Shield, CheckCircle } from 'lucide-react';

export default function SobreNos() {
  return (
    <>
      <section className="bg-secondary py-16 lg:py-20">
        <div className="max-w-[75rem] mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl lg:text-[2.75rem] font-bold text-white mb-4">Sobre a King of Languages</h1>
          <p className="text-lg text-white/85 max-w-lg mx-auto">Uma escola de inglês brasileira, feita por quem entende<br />as dificuldades de aprender um novo idioma.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[40rem] mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold mb-4">Nossa história</h2>
          <p className="text-gray-600 mb-3">A King of Languages nasceu com uma missão simples: ajudar brasileiros a destravar o inglês de verdade.</p>
          <p className="text-gray-600 mb-3">Sabemos que o Brasil tem milhões de pessoas que já estudaram inglês em escolas, apps e cursinhos, mas que ainda travam na hora de falar. A gente existe pra mudar isso.</p>
          <p className="text-gray-600">Com aulas 100% online e ao vivo, conectamos alunos a professores que entendem as dificuldades de quem fala português. Sem metodologias milagrosas, sem promessas vazias. Só prática, consistência e acompanhamento de verdade.</p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-[75rem] mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { value: '+9.000', label: 'alunos que já passaram pela King' },
            { value: '100%', label: 'online, de qualquer lugar do Brasil' },
            { value: '7h-23h', label: 'horários disponíveis para aulas' },
            { value: '24h', label: 'plataforma disponível para estudos' },
          ].map(({ value, label }) => (
            <div key={value}>
              <div className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-bold text-primary mb-2">{value}</div>
              <p className="text-sm text-gray-600 max-w-none">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[75rem] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold">No que acreditamos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[52rem] mx-auto">
            {[
              { icon: Target, title: 'Ensino com propósito', text: 'Inglês não é só gramática. É a ferramenta que abre portas na carreira, nas viagens e na vida.' },
              { icon: Shield, title: 'Transparência', text: 'A gente fala a verdade. Sobre prazos, sobre expectativas, sobre como funciona. Sem letra miúda.' },
              { icon: CheckCircle, title: 'Resultado real', text: 'Nosso sucesso se mede pelo seu: reuniões em inglês, promoções conquistadas, viagens aproveitadas.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center p-8 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 rounded-full bg-primary-50 inline-flex items-center justify-center mb-4">
                  <Icon size={32} className="text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-500 max-w-none">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="max-w-[75rem] mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white mb-3">Quer conhecer nossos cursos?</h2>
          <Link to="/aulas-particulares" className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-3.5 rounded-full transition-colors">Ver aulas particulares →</Link>
        </div>
      </section>
    </>
  );
}
