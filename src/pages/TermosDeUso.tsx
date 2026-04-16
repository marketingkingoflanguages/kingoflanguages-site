export default function TermosDeUso() {
  return (
    <section className="py-20">
      <div className="max-w-[40rem] mx-auto px-4">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">Termos de Uso</h1>
        <p className="mb-6"><strong>King of Languages</strong> | CNPJ: 42.871.394/0001-01</p>
        {[
          { t: '1. Aceitação', p: 'Ao utilizar este site, você concorda com estes termos.' },
          { t: '2. Serviços', p: 'A King of Languages oferece cursos de inglês online. As condições específicas de cada curso (duração, preço, política de cancelamento) são informadas pelo consultor no momento da contratação.' },
          { t: '3. Propriedade intelectual', p: 'Todo o conteúdo deste site (textos, imagens, vídeos, marca) é de propriedade da King of Languages e protegido por direitos autorais.' },
          { t: '4. Limitação de responsabilidade', p: 'A King of Languages não se responsabiliza por interrupções temporárias do site ou da plataforma de aulas por motivos técnicos.' },
          { t: '5. Modificações', p: 'Reservamo-nos o direito de alterar estes termos a qualquer momento. A versão atualizada estará sempre disponível nesta página.' },
          { t: '6. Contato', p: 'contato@kingoflanguages.com.br' },
        ].map(({ t, p }) => (
          <div key={t}>
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold mt-8 mb-2">{t}</h2>
            <p className="text-gray-600 mb-3 max-w-none">{p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
