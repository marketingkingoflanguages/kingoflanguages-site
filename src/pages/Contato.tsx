import { Link } from 'react-router-dom';

export default function Contato() {
  return (
    <section className="py-20">
      <div className="max-w-[75rem] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-3">Fale com a gente</h1>
          <p className="text-gray-600 mb-8">Preencha o formulário e um consultor entra em contato em até 24h. Sem compromisso, sem pressão.</p>
          <div className="flex flex-col gap-4">
            <div><strong>WhatsApp</strong><br /><a href="https://wa.link/6l9vqf" target="_blank" rel="noopener noreferrer" className="text-primary">Falar pelo WhatsApp</a></div>
            <div><strong>Instagram</strong><br /><a href="https://www.instagram.com/kingoflanguagesoficial" target="_blank" rel="noopener noreferrer" className="text-primary">@kingoflanguagesoficial</a></div>
            <div><strong>LinkedIn</strong><br /><a href="https://br.linkedin.com/company/kingoflanguages" target="_blank" rel="noopener noreferrer" className="text-primary">King of Languages</a></div>
          </div>
        </div>
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="c-nome" className="block text-sm font-medium text-gray-600 mb-1">Nome completo</label>
            <input id="c-nome" type="text" name="nome" placeholder="Ex: Maria Silva" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15" />
          </div>
          <div>
            <label htmlFor="c-email" className="block text-sm font-medium text-gray-600 mb-1">E-mail</label>
            <input id="c-email" type="email" name="email" placeholder="maria@empresa.com" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15" />
          </div>
          <div>
            <label htmlFor="c-tel" className="block text-sm font-medium text-gray-600 mb-1">WhatsApp</label>
            <input id="c-tel" type="tel" name="telefone" placeholder="(11) 99999-0000" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15" />
          </div>
          <div>
            <label htmlFor="c-como" className="block text-sm font-medium text-gray-600 mb-1">Como conheceu a King? <span className="text-gray-400">(opcional)</span></label>
            <select id="c-como" name="origem" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 bg-white appearance-none">
              <option value="">Selecione...</option>
              <option>Google</option>
              <option>Instagram</option>
              <option>Indicação de amigo</option>
              <option>YouTube</option>
              <option>Outro</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-primary hover:bg-primary-600 text-white font-semibold py-3.5 rounded-full transition-colors">Quero destravar meu inglês →</button>
          <p className="text-xs text-gray-400 mt-1">Ao enviar, você concorda com nossa <Link to="/politica-de-privacidade" className="text-gray-500 underline">política de privacidade</Link>.</p>
        </form>
      </div>
    </section>
  );
}
