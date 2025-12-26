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

        {/* Seção de Projetos */}
        <section id="projetos" className="mt-32 pb-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-black text-black">MEUS ESTUDOS</h2>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardProjeto 
              titulo="Estrutura de Dados"
              descricao="Exercícios de lógica e implementação de listas e árvores em C/C++."
              tags={['C++', 'Algoritmos', 'BTI']}
              linkGithub="https://github.com/rafaolivato"
            />
            <CardProjeto 
              titulo="Portfolio Tricolor"
              descricao="Desenvolvimento de interface moderna usando React, Vite e Tailwind CSS."
              tags={['React', 'TypeScript', 'Tailwind']}
              linkGithub="https://github.com/rafaolivato"
            />
            <CardProjeto 
              titulo="Banco de Dados"
              descricao="Modelagem e queries complexas para sistemas de gestão acadêmica."
              tags={['SQL', 'PostgreSQL', 'Modelagem']}
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