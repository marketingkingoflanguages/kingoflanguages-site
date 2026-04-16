import { Link } from 'react-router-dom';
import { Calendar, Target, Zap, RefreshCw, User, Clock, MessageCircle, Shield } from 'lucide-react';
import FAQ from '../components/FAQ';

const faqItems = [
  { question: 'Qual é a duração do curso?', answer: 'A duração varia conforme seus objetivos e o pacote escolhido. As aulas são personalizadas para o seu ritmo.' },
  { question: 'Preciso ter algum nível para começar?', answer: 'Não. Temos planos para todos os níveis, do zero absoluto ao avançado. Faça nosso teste de nível gratuito para descobrir onde você está.' },
  { question: 'Como funcionam as aulas?', answer: 'As aulas são 100% online e ao vivo, com professor particular em tempo real. Você tem até 5 aulas por semana com horários flexíveis das 7h às 23h.' },
  { question: 'E se eu precisar faltar a uma aula?', answer: 'Consulte nosso consultor sobre a política de reposição ao contratar. As condições variam conforme o plano.' },
  { question: 'Tem certificado?', answer: 'Sim, ao concluir cada módulo você recebe um certificado de conclusão da King of Languages.' },
];

export default function AulasParticulares() {
  return (
    <>
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-[75rem] mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl lg:text-[2.75rem] font-bold text-white mb-4">Aulas particulares de inglês</h1>
          <p className="text-lg text-white/90 mb-6 max-w-md mx-auto">100% personalizado para o seu ritmo, seu objetivo e sua agenda.</p>
          <a href="#formulario" className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-3.5 rounded-full transition-colors">Agendar minha aula →</a>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[75rem] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold text-gray-900">Ideal para quem...</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[52rem] mx-auto">
            {[
              { icon: Calendar, title: 'Tem agenda imprevisível', text: 'Horários flexíveis das 7h às 23h. Você escolhe quando estudar.' },
              { icon: Target, title: 'Precisa de foco em uma área', text: 'Inglês para entrevistas, apresentações, viagens. O conteúdo é todo seu.' },
              { icon: Zap, title: 'Quer evolução acelerada', text: 'Toda a atenção do professor é pra você. Sem dividir com turma.' },
              { icon: RefreshCw, title: 'Já tentou outros cursos', text: 'Aqui o método se adapta a você, não o contrário.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex flex-col items-center text-center p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 rounded-full bg-secondary-50 flex items-center justify-center mb-4">
                  <Icon size={28} className="text-secondary" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-500 max-w-[20rem] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-[75rem] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold text-gray-900">Como funciona</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[56rem] mx-auto">
            {[
              { num: '1', title: 'Fale com um consultor', text: 'Conte seu objetivo e a gente monta um plano personalizado.' },
              { num: '2', title: 'Escolha seus horários', text: 'De segunda a sábado, das 7h às 23h. Remarcação flexível.' },
              { num: '3', title: 'Comece suas aulas', text: 'Aulas ao vivo, 1 a 1, com professor dedicado à sua evolução.' },
            ].map(({ num, title, text }) => (
              <div key={num} className="text-center p-8 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all">
                <span className="inline-flex w-14 h-14 rounded-full bg-primary text-white font-[family-name:var(--font-heading)] font-bold text-xl items-center justify-center border-4 border-primary-50 mb-4">{num}</span>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-none">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[75rem] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold text-gray-900">O que está incluso</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[56rem] mx-auto">
            {[
              { icon: User, text: 'Até 5 aulas por semana com professor particular' },
              { icon: Clock, text: 'Horários flexíveis das 7h às 23h' },
              { icon: Target, text: 'Conteúdo adaptado ao seu objetivo' },
              { icon: MessageCircle, text: 'Teacher Ju (IA) para praticar fora das aulas' },
              { icon: Zap, text: 'Plataforma de estudos disponível 24h' },
              { icon: Shield, text: 'Do iniciante ao avançado' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-4 p-6 bg-gray-50 border border-gray-200 rounded-xl font-medium">
                <Icon size={24} className="text-primary shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-[75rem] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold text-gray-900">Perguntas frequentes</h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <section id="formulario" className="bg-secondary py-20">
        <div className="max-w-[75rem] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold text-white mb-3">Comece sua primeira aula</h2>
            <p className="text-white/80">Preencha o formulário e um consultor entra em contato em até 24h.</p>
          </div>
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="ap-nome" className="block text-sm font-medium text-white/80 mb-1">Nome completo</label>
              <input id="ap-nome" type="text" name="nome" placeholder="Ex: Maria Silva" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-white/30" />
            </div>
            <div>
              <label htmlFor="ap-email" className="block text-sm font-medium text-white/80 mb-1">E-mail</label>
              <input id="ap-email" type="email" name="email" placeholder="maria@empresa.com" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-white/30" />
            </div>
            <div>
              <label htmlFor="ap-tel" className="block text-sm font-medium text-white/80 mb-1">WhatsApp</label>
              <input id="ap-tel" type="tel" name="telefone" placeholder="(11) 99999-0000" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-white/30" />
            </div>
            <button type="submit" className="w-full bg-white hover:bg-gray-100 text-secondary font-semibold py-3.5 rounded-full transition-colors">Quero agendar →</button>
            <p className="text-xs text-white/60 mt-1">Ao enviar, você concorda com nossa <Link to="/politica-de-privacidade" className="text-white/80 underline">política de privacidade</Link>.</p>
          </form>
        </div>
      </section>
    </>
  );
}
