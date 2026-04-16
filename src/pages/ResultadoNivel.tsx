import { useParams, Link } from 'react-router-dom';

const niveis = {
  'a1-iniciante': { code: 'A1', name: 'Iniciante', next: 'A2', description: 'Você está começando sua jornada no inglês. Consegue entender e usar expressões simples do dia a dia, se apresentar e fazer perguntas básicas.', skills: ['Se apresentar em inglês', 'Entender frases curtas e simples', 'Pedir informações básicas (preço, direção)'] },
  'a2-pre-intermediario': { code: 'A2', name: 'Pré-intermediário', next: 'B1', description: 'Você já entende frases sobre rotina e situações familiares. Consegue se comunicar em tarefas simples do cotidiano.', skills: ['Falar sobre sua rotina e trabalho', 'Fazer compras e pedir comida em inglês', 'Entender instruções simples'] },
  'b1-intermediario': { code: 'B1', name: 'Intermediário', next: 'B2', description: 'Você se vira na maioria das situações de viagem e consegue falar sobre experiências e planos. É aqui que muita gente trava, e é aqui que a King mais ajuda.', skills: ['Participar de conversas sobre trabalho e lazer', 'Contar histórias e descrever experiências', 'Entender textos do dia a dia (e-mails, notícias)'] },
  'b2-intermediario-superior': { code: 'B2', name: 'Intermediário Superior', next: 'C1', description: 'Você já se comunica com boa fluência. Consegue participar de reuniões e debates, entender filmes sem legenda na maioria das vezes.', skills: ['Participar de reuniões de trabalho em inglês', 'Argumentar e defender opiniões', 'Entender conteúdo técnico da sua área'] },
  'c1-avancado': { code: 'C1', name: 'Avançado', next: 'C2', description: 'Você usa inglês profissionalmente com naturalidade. Consegue fazer apresentações, negociar e lidar com situações complexas.', skills: ['Apresentar projetos para equipes internacionais', 'Escrever relatórios e e-mails formais', 'Entender humor, sarcasmo e expressões idiomáticas'] },
  'c2-proficiente': { code: 'C2', name: 'Proficiente', next: '', description: 'Domínio quase nativo. Você entende praticamente tudo que lê e ouve, se expressa com precisão e nuance.', skills: ['Falar sobre qualquer assunto com fluência', 'Escrever textos complexos e bem estruturados', 'Entender sotaques e variações regionais'] },
} as const;

export default function ResultadoNivel() {
  const { nivel: slug } = useParams();
  const nivel = niveis[slug as keyof typeof niveis];

  if (!nivel) return <div className="py-20 text-center"><h1>Nível não encontrado</h1></div>;

  return (
    <>
      <section className="py-20">
        <div className="max-w-lg mx-auto px-4 text-center py-8">
          <span className="inline-flex text-xs font-semibold bg-secondary-50 text-secondary-700 px-3 py-1 rounded-full mb-3">Seu resultado</span>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-1">Você está no nível {nivel.code}</h1>
          <h2 className="font-[family-name:var(--font-heading)] text-xl text-secondary mb-4">{nivel.name}</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">{nivel.description}</p>
          <div className="text-left max-w-sm mx-auto">
            <strong>O que você consegue fazer nesse nível:</strong>
            <ul className="mt-3 flex flex-col gap-2">
              {nivel.skills.map(s => (
                <li key={s} className="flex items-start gap-2 text-gray-600">
                  <span className="text-success font-bold text-lg leading-none mt-0.5">✓</span>{s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="max-w-[75rem] mx-auto px-4 text-center">
          {nivel.next ? (
            <>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white mb-3">O curso ideal para o nível {nivel.code}</h2>
              <p className="text-white/80 mb-6 max-w-md mx-auto">Na King, você tem aulas personalizadas para sair do {nivel.code} e chegar ao {nivel.next} com confiança. Sem pular etapas, no seu ritmo.</p>
              <Link to="/contato" className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-3.5 rounded-full transition-colors">
                Quero evoluir do {nivel.code} para o {nivel.next} →
              </Link>
            </>
          ) : (
            <>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white mb-3">Parabéns pelo nível {nivel.code}!</h2>
              <p className="text-white/80 mb-6 max-w-md mx-auto">Você já tem domínio avançado. Que tal manter e aperfeiçoar com aulas de conversação?</p>
              <Link to="/contato" className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-3.5 rounded-full transition-colors">
                Quero manter meu nível →
              </Link>
            </>
          )}
        </div>
      </section>
    </>
  );
}
