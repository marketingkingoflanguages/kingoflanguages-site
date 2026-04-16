export default function PoliticaPrivacidade() {
  return (
    <section className="py-20">
      <div className="max-w-[40rem] mx-auto px-4">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">Política de Privacidade</h1>
        <p className="mb-6"><strong>King of Languages</strong> | CNPJ: 42.871.394/0001-01</p>
        {[
          { t: '1. Dados coletados', p: 'Coletamos nome, e-mail e telefone quando você preenche nossos formulários de contato ou teste de nível.' },
          { t: '2. Finalidade', p: 'Usamos seus dados exclusivamente para entrar em contato sobre nossos cursos, conforme solicitado por você.' },
          { t: '3. Compartilhamento', p: 'Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, exceto quando necessário para a prestação do serviço (ex: plataforma de envio de e-mail).' },
          { t: '4. Armazenamento', p: 'Seus dados são armazenados de forma segura e mantidos pelo tempo necessário para a finalidade coletada.' },
          { t: '5. Seus direitos', p: 'Você pode solicitar a exclusão ou correção dos seus dados a qualquer momento pelo e-mail contato@kingoflanguages.com.br.' },
          { t: '6. Cookies', p: 'Utilizamos cookies para análise de tráfego (Google Analytics) e melhoria da experiência. Você pode desativar cookies nas configurações do seu navegador.' },
          { t: '7. Contato', p: 'Para dúvidas sobre esta política: contato@kingoflanguages.com.br' },
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
