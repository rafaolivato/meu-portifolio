import React from 'react';
import { CardProjeto } from './components/CardProjeto';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navbar Tricolor */}
      <nav className="p-6 flex justify-between items-center bg-black text-white border-b-4 border-red-600">
        <h1 className="text-xl font-bold tracking-tighter">
          RAFAEL<span className="text-red-600">.</span>DEV
        </h1>
        <div className="space-x-6 font-medium">
          <a href="#sobre" className="hover:text-red-500 transition">Sobre</a>
          <a href="#projetos" className="hover:text-red-500 transition">Projetos</a>
          <a
            href="https://github.com/rafaolivato"
            target="_blank"
            className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700 transition"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto mt-16 px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="text-red-600 font-bold tracking-widest uppercase text-sm">
              Bacharelado em Tecnologia da Informação
            </span>
            <h2 className="text-6xl font-black mt-4 leading-none text-black">
              RAFAEL <br /> OLIVATO
            </h2>
            <p className="mt-6 text-lg text-slate-600 max-w-lg">
              Estudante de TI focado em desenvolvimento de software e análise de dados.
              Soberano na busca pelo conhecimento técnico.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="https://www.linkedin.com/in/rafael-francisco-o-47a273240/"
                target="_blank"
                className="bg-black text-white px-8 py-3 rounded-md font-bold hover:bg-zinc-800 transition shadow-lg"
              >
                LinkedIn
              </a>
              <a
                href="#projetos"
                className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-md font-bold hover:bg-red-50 transition"
              >
                Ver Projetos
              </a>
            </div>
          </div>

          {/* Elemento Visual Decorativo (Faixas do São Paulo) */}
          <div className="hidden md:flex flex-col gap-2">
            <div className="w-32 h-4 bg-red-600"></div>
            <div className="w-32 h-4 bg-white border border-slate-200"></div>
            <div className="w-32 h-4 bg-black"></div>
          </div>
        </div>

        <section id="sobre" className="max-w-5xl mx-auto py-20 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-8 border-l-8 border-red-600"></div>
              <p className="text-xl leading-relaxed text-slate-700 font-medium relative z-10">
                Desenvolvedor focado em sistemas de missão crítica.
                Atualmente cursando <span className="text-black font-bold">Bacharelado em Tecnologia da Informação</span>,
                possuo experiência prática no ciclo completo de software: do desenvolvimento com
                <span className="text-black font-bold"> TypeScript e React</span> à implantação de infraestruturas escaláveis em
                <span className="text-black font-bold"> Cloudflare e Digital Ocean.</span> Especializado em criar soluções robustas para a gestão pública. Busco unir rigor acadêmico com a agilidade das ferramentas mais modernas do mercado, como
                <span className="text-red-600"> React, Node.js e ecossistemas Cloud.</span>
              </p>
            </div>
            <div className="bg-zinc-100 p-8 rounded-2xl border-r-8 border-black shadow-inner">
              <h3 className="font-black text-lg mb-4 uppercase tracking-tighter italic text-red-600">Objetivo Técnico</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Especializar-me em arquitetura de sistemas escaláveis e georreferenciamento,
                contribuindo para a digitalização de serviços e melhoria da interação entre tecnologia e sociedade.
              </p>
            </div>
          </div>
        </section>

        <section id="projetos" className="mt-32 pb-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-black text-black italic">PROJETOS EM DESTAQUE</h2>
            <div className="flex-1 h-1 bg-red-600"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEU PROJETO REAL */}
            <CardProjeto
              titulo="Gestão Nacional de Medicamentos"
              descricao="Sistema ERP completo para logística farmacêutica municipal. Controle de estoque, rastreabilidade de lotes, dispensação assistida e relatórios de auditoria."
              tags={['React', 'Node.js', 'Prisma', 'Digital Ocean', 'PostgreSQL']}
              linkGithub="https://github.com/rafaolivato"
              imagem="/projetos/ragda4.png"
              fotosGaleria={[
                '/projetos/ragda1.png',
                '/projetos/ragda2.png',
                '/projetos/ragda3.png',
                '/projetos/ragda4.png'
              ]}
            />

            {/* 2. SISTEMA DA BIBLIOTECA (Projeto Integrador) */}
            <CardProjeto
              titulo="Biblioteca Infantil Digital"
              descricao="Gestão de acervo com importação de alunos via Excel (XLSX) e controle de empréstimos. Domínio próprio via Registro.br."
              tags={['Excel Integration', 'TypeScript', 'Digital Ocean']}
              linkGithub="https://github.com/rafaolivato"
              imagem="/projetos/biblioteca5.jpg"
              fotosGaleria={['/projetos/biblioteca1.jpg', '/projetos/biblioteca2.jpg', '/projetos/biblioteca3.jpg', '/projetos/biblioteca4.jpg']}
            />
            <CardProjeto
              titulo="GeoPrefeitura: Notificações Cidadãs"
              descricao="Aplicativo de zeladoria urbana que permite ao cidadão reportar problemas via geolocalização e fotos, otimizando o fluxo de trabalho das secretarias municipais."
              tags={['Node.js', 'Prisma', 'PostgreSQL', 'TypeScript']}
              linkGithub="https://github.com/rafaolivato" // Coloque o link real do repo aqui
              imagem="/projetos/prefeitura3.jpeg"
              fotosGaleria={[
                '/projetos/prefeitura1.jpeg',
                '/projetos/prefeitura2.jpeg',
                '/projetos/prefeitura4.jpeg',
                '/projetos/prefeitura5.jpeg'
              ]}
            />

            <CardProjeto
              titulo="Site: Arquitetura"
              descricao="Site para uma arquiteta."
              tags={['React', 'CSS', 'Bootstrap', 'TypeScript']}
              linkGithub="https://github.com/rafaolivato" 
              imagem="/projetos/arquit.png"
              fotosGaleria={[
                '/projetos/arquit1.png',
                '/projetos/arquit.png',
                '/projetos/arquit2.png',
                '/projetos/arquit3.png'
              ]}
            />

            {/* OUTROS PROJETOS */}
            <CardProjeto
              titulo="Portfolio Tricolor"
              descricao="Site institucional desenvolvido para demonstrar competências técnicas de front-end, focado em performance e responsividade."
              tags={['React', 'Vite', 'Tailwind']}
              linkGithub="https://github.com/rafaolivato/meu-portfolio"
              imagem="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800"
              fotosGaleria={[
                '/projetos/portifolio1.png',
                '/projetos/portifolio2.png',
                
              ]}
            />


          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-100 py-10 text-center text-slate-500 text-sm border-t border-slate-200">
        <p>© 2025 Rafael Francisco Olivato - Desenvolvido com React. </p>
      </footer>
    </div>
  );
};

export default App;