import { Link } from 'react-router-dom';
import { MicOff, TrendingDown, RefreshCw, User, Clock, Target, MessageCircle, Briefcase, Plane, GraduationCap, Globe, CheckCircle, Shield } from 'lucide-react';
import VideoTestimonial from '../components/VideoTestimonial';
import FAQ from '../components/FAQ';

const faqItems = [
  { question: 'Qual é a duração do curso?', answer: 'A duração varia conforme seus objetivos e o pacote escolhido. As aulas são personalizadas para o seu ritmo de aprendizado.' },
  { question: 'Existe idade mínima para estudar na King?', answer: 'Sim, aceitamos alunos a partir de 11 anos. Para menores, o acompanhamento dos pais é necessário.' },
  { question: 'Como funciona o pagamento?', answer: 'Aceitamos cartão de crédito, débito, boleto, transferência e PIX. Os pagamentos podem ser mensais ou antecipados.' },
  { question: 'Como funcionam as aulas?', answer: 'As aulas são 100% online e ao vivo, com professor em tempo real. Você tem até 5 aulas particulares por semana com horários flexíveis das 7h às 23h.' },
  { question: 'Preciso ter algum nível para começar?', answer: 'Não! Temos planos para todos os níveis, do iniciante absoluto ao avançado. Faça nosso teste de nível gratuito para descobrir onde você está.' },
  { question: 'E se eu precisar faltar a uma aula?', answer: 'Consulte nosso consultor sobre a política de reposição no momento da matrícula. As condições variam de acordo com o plano contratado.' },
];

const videos = ['n4Vuu1ojvsc', 'IZvVmhuIYmk', 'mX7qKXuO4Vg', '1_NDGNHd0Vc'];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-[75rem] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-white mb-4">
              O inglês que destrava a sua carreira.
            </h1>
            <p className="text-lg text-white/90 mb-6 max-w-md mx-auto lg:mx-0">
              Pare de perder oportunidades por não falar inglês com fluência.
            </p>
            <a href="#hero-form" className="lg:hidden inline-flex items-center justify-center text-primary bg-white hover:bg-gray-100 font-semibold px-8 py-3.5 rounded-full transition-colors mb-4">
              Quero destravar meu inglês →
            </a>
            <p className="text-sm text-white/65 mt-4">+9.000 profissionais brasileiros já estudaram com a King.</p>
          </div>

          <div id="hero-form">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-gray-900 mb-1">Comece agora. É grátis!</h2>
              <p className="text-sm text-gray-500 mb-5">Preencha e um consultor entra em contato.</p>
              <form className="flex flex-col gap-3" data-kommo-form>
                <input type="text" name="nome" placeholder="Seu nome completo" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition" />
                <input type="tel" name="whatsapp" placeholder="(11) 99999-0000" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition" />
                <input type="hidden" name="pagina_origem" value="home-hero" />
                <button type="submit" className="w-full bg-primary hover:bg-primary-600 text-white font-semibold py-3.5 rounded-full transition-colors text-base">
                  Quero destravar meu inglês →
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Ao enviar, você concorda com nossa <Link to="/politica-de-privacidade" className="text-gray-500 underline">política de privacidade</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[75rem] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold text-gray-900">Você se identifica?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: MicOff, title: 'Trava na hora de falar', text: 'Você entende, lê, mas quando abre a boca em uma reunião ou call... congela.' },
              { icon: TrendingDown, title: 'Já perdeu oportunidade', text: 'Aquela vaga, aquele projeto internacional, aquela promoção. O inglês era o que faltava.' },
              { icon: RefreshCw, title: 'Já fez curso e não destravou', text: 'Já tentou app, já tentou escola, mas nunca conseguiu falar com confiança de verdade.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 rounded-full bg-primary-50 inline-flex items-center justify-center mb-4">
                  <Icon size={32} className="text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-none">{text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 text-lg font-medium text-secondary">
            Se você se identificou com pelo menos um, a King foi feita pra você.
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20">
        <div className="max-w-[75rem] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">Como a King destrava seu inglês</h2>
            <p className="text-gray-500">Um caminho direto, sem enrolação.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-[52rem] mx-auto py-2">
            {[
              { num: '1', title: 'Teste seu nível', text: 'Faça nosso teste gratuito de 5 minutos e descubra exatamente onde você está.' },
              { num: '2', title: 'Converse com um consultor', text: 'Sem compromisso. A gente entende seu objetivo e recomenda o melhor plano.' },
              { num: '3', title: 'Comece suas aulas ao vivo', text: 'Aulas online com professor particular, no horário que funciona pra você.' },
            ].map(({ num, title, text }, i) => (
              <div key={num} className="text-center relative">
                {i < 2 && <div className="hidden md:block absolute top-[2rem] left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 bg-gradient-to-r from-primary to-primary-200" />}
                <div className="flex justify-center mb-5 relative z-10">
                  <span className="w-14 h-14 rounded-full bg-primary text-white font-[family-name:var(--font-heading)] font-bold text-xl flex items-center justify-center border-4 border-primary-50">
                    {num}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 max-w-[18rem] mx-auto">{text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/teste-seu-nivel" className="inline-flex items-center justify-center bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors">
              Fazer meu teste de nível →
            </Link>
          </div>
        </div>
      </section>

      {/* AULAS PARTICULARES + TEACHER JU */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[75rem] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="inline-flex text-xs font-semibold bg-primary-50 text-primary-700 px-3 py-1 rounded-full mb-3">Nosso curso</span>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold text-gray-900 mb-3">Aulas Particulares de Inglês</h2>
            <p className="text-gray-600 mb-4">100% personalizado para o seu ritmo, seu objetivo e sua agenda. Toda a atenção do professor é pra você.</p>
            <ul className="flex flex-col gap-3 mb-6">
              {['Até 5 aulas por semana com professor particular', 'Horários flexíveis das 7h às 23h', 'Conteúdo adaptado ao seu objetivo', 'Plataforma de estudos disponível 24h', 'Do iniciante ao avançado'].map(item => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-success font-bold text-lg leading-none mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/aulas-particulares" className="inline-flex items-center justify-center bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Conhecer aulas particulares →
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { icon: User, title: 'Professor particular', desc: 'Atenção 100% focada em você' },
              { icon: Clock, title: 'Horários flexíveis', desc: 'Das 7h às 23h, de segunda a sábado' },
              { icon: Target, title: 'Conteúdo personalizado', desc: 'Focado no seu objetivo real' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3 bg-white p-4 px-5 rounded-lg border border-gray-200">
                <Icon size={24} className="text-secondary shrink-0" />
                <div>
                  <strong className="text-sm text-gray-900 block">{title}</strong>
                  <p className="text-xs text-gray-500 max-w-none">{desc}</p>
                </div>
              </div>
            ))}
            {/* Teacher Ju */}
            <div className="bg-gradient-to-br from-secondary to-secondary-700 rounded-xl p-5 text-white">
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle size={24} className="shrink-0" />
                <strong>Teacher Ju (IA)</strong>
                <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full ml-1">Novidade</span>
              </div>
              <p className="text-sm text-white/85 leading-relaxed mb-2 max-w-none">Pratique inglês com inteligência artificial fora das aulas. Exercícios, áudios e conversação 24h.</p>
              <span className="text-xs text-white/60 italic">Inclusa para todos os alunos</span>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20">
        <div className="max-w-[75rem] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">Por que escolher a King?</h2>
            <p className="text-gray-500">O que faz a diferença no seu aprendizado.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[56rem] mx-auto">
            {[
              { icon: User, title: 'Aulas 100% personalizadas', text: 'O conteúdo se adapta a você. Seu professor monta o plano ideal para o seu objetivo.' },
              { icon: MessageCircle, title: 'Suporte contínuo', text: 'Acompanhamento entre as aulas e acesso à Teacher Ju (IA) para praticar a qualquer hora.' },
              { icon: Globe, title: 'Plataforma 24h', text: 'Material didático, exercícios e recursos disponíveis na plataforma a qualquer momento.' },
              { icon: Shield, title: 'Aulas qualificadas', text: 'Professores preparados para ensinar do básico ao avançado com foco na conversação.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center p-8 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-primary-50 inline-flex items-center justify-center mb-4">
                  <Icon size={36} className="text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-500 max-w-[22rem] mx-auto">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[75rem] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">King vs. outros cursos</h2>
            <p className="text-gray-500">Veja o que nos diferencia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[56rem] mx-auto">
            {/* King */}
            <div className="bg-white border-2 border-primary rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 text-center border-b border-primary-100 bg-primary-50 min-h-[5.5rem] flex items-center justify-center">
                <span className="font-[family-name:var(--font-heading)] font-bold text-2xl text-primary">King</span>
              </div>
              <ul className="p-6 flex flex-col gap-4">
                {['Professor particular ao vivo', 'Horários flexíveis (7h-23h)', 'Conteúdo 100% personalizado', 'Teacher Ju (IA) inclusa', '100% online', 'Foco em conversação real'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium"><CheckCircle size={18} className="text-success shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            {/* Apps */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="p-6 text-center border-b border-gray-200 min-h-[5.5rem] flex items-center justify-center">
                <span className="font-[family-name:var(--font-heading)] font-semibold text-sm text-gray-500">Apps de idiomas</span>
              </div>
              <ul className="p-6 flex flex-col gap-4">
                {[
                  { text: 'Sem professor ao vivo', no: true },
                  { text: 'Horários flexíveis', no: false },
                  { text: 'Conteúdo genérico', no: true },
                  { text: 'IA básica', no: false },
                  { text: '100% online', no: false },
                  { text: 'Sem conversação real', no: true },
                ].map(({ text, no }) => (
                  <li key={text} className={`flex items-center gap-3 text-sm ${no ? 'text-gray-400' : 'text-gray-600'}`}>
                    {no ? <MicOff size={18} className="text-gray-300 shrink-0" /> : <CheckCircle size={18} className="text-gray-400 shrink-0" />}
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            {/* Escolas */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="p-6 text-center border-b border-gray-200 min-h-[5.5rem] flex items-center justify-center">
                <span className="font-[family-name:var(--font-heading)] font-semibold text-sm text-gray-500">Escolas tradicionais</span>
              </div>
              <ul className="p-6 flex flex-col gap-4">
                {[
                  { text: 'Turmas grandes', no: true },
                  { text: 'Horários fixos', no: true },
                  { text: 'Conteúdo padrão', no: true },
                  { text: 'Sem IA', no: true },
                  { text: 'Presencial', no: true },
                  { text: 'Conversação em turma', no: false },
                ].map(({ text, no }) => (
                  <li key={text} className={`flex items-center gap-3 text-sm ${no ? 'text-gray-400' : 'text-gray-600'}`}>
                    {no ? <MicOff size={18} className="text-gray-300 shrink-0" /> : <CheckCircle size={18} className="text-gray-400 shrink-0" />}
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-secondary py-20">
        <div className="max-w-[75rem] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold text-white">O que nossos alunos dizem</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {videos.map(id => <VideoTestimonial key={id} videoId={id} />)}
          </div>
        </div>
      </section>

      {/* ABRANGÊNCIA */}
      <section className="py-20">
        <div className="max-w-[75rem] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">Inglês para a vida real</h2>
            <p className="text-gray-500">Seja qual for o seu objetivo, a King prepara você.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Briefcase, title: 'Carreira', text: 'Reuniões, apresentações e e-mails em inglês sem travar.' },
              { icon: Plane, title: 'Viagens', text: 'Se virar em qualquer país com confiança.' },
              { icon: GraduationCap, title: 'Intercâmbio', text: 'Preparação para estudar e morar fora.' },
              { icon: Globe, title: 'Desenvolvimento', text: 'Crescer como pessoa e profissional.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-[4.5rem] h-[4.5rem] rounded-xl bg-white inline-flex items-center justify-center mb-4 shadow-sm">
                  <Icon size={36} className="text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-500 max-w-none">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-primary py-16">
        <div className="max-w-[75rem] mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold text-white mb-3">Pronto para destravar?</h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">Fale com um consultor. Sem compromisso, sem pressão.</p>
          <Link to="/contato" className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-3.5 rounded-full transition-colors">
            Quero começar agora →
          </Link>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-2">Assine a nossa Newsletter</h2>
          <p className="text-sm text-gray-500 mb-6">Receba dicas de inglês e novidades da King no seu e-mail.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input type="text" name="nome" placeholder="Seu nome" required className="flex-1 min-w-0 px-4 py-3 border border-gray-300 rounded-full text-base focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition" />
            <input type="email" name="email" placeholder="Seu e-mail" required className="flex-1 min-w-0 px-4 py-3 border border-gray-300 rounded-full text-base focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition" />
            <button type="submit" className="shrink-0 bg-primary hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap">Assinar →</button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-[75rem] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold text-gray-900">Perguntas frequentes</h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>
    </>
  );
}
