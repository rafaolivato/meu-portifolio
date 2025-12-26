import React from 'react';

interface ProjetoProps {
    titulo: string;
    descricao: string;
    tags: string[];
    linkGithub?: string;
  }
  
  export function CardProjeto({ titulo, descricao, tags, linkGithub }: ProjetoProps) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-slate-800">{titulo}</h3>
        <p className="mt-2 text-slate-600 text-sm">
          {descricao}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="bg-blue-50 text-red-600 px-2 py-1 rounded text-xs font-semibold">
              {tag}
            </span>
          ))}
        </div>
        {linkGithub && (
          <a 
                      href={linkGithub} 
            target="_blank" 
            className="mt-4 inline-block text-red-600 hover:underline text-sm font-medium"
          >
            Ver código →
          </a>
        )}
      </div>
    );
  }