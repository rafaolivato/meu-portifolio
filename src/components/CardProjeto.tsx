import React, { useState } from 'react';

interface ProjetoProps {
  titulo: string;
  descricao: string;
  tags: string[];
  linkGithub?: string;
  imagem: string;
  fotosGaleria: string[]; // Nova prop para as 4 fotos
}

export function CardProjeto({ titulo, descricao, tags, linkGithub, imagem, fotosGaleria }: ProjetoProps) {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition-all group">
        <div className="h-48 overflow-hidden bg-slate-200 relative cursor-pointer" onClick={() => setModalAberto(true)}>
          <img src={imagem} alt={titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <span className="text-white text-xs font-bold border-2 border-white px-3 py-1 uppercase tracking-widest">Ver Galeria</span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-black">{titulo}</h3>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed">{descricao}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="bg-zinc-100 text-zinc-800 px-2 py-1 rounded text-[10px] font-bold uppercase border border-zinc-200">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            {linkGithub && (
              <a href={linkGithub} target="_blank" className="text-red-600 hover:text-red-700 text-sm font-bold uppercase tracking-tight">
                Código GitHub →
              </a>
            )}
            <button onClick={() => setModalAberto(true)} className="text-zinc-400 hover:text-black text-[10px] font-bold uppercase tracking-widest">
              + Fotos
            </button>
          </div>
        </div>
      </div>

      {/* MODAL DA GALERIA */}
      {modalAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-6 relative">
            <button onClick={() => setModalAberto(false)} className="absolute top-4 right-4 text-2xl font-bold text-black hover:text-red-600">✕</button>
            
            <h2 className="text-2xl font-black mb-6 border-b-4 border-red-600 inline-block">{titulo}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {fotosGaleria.map((foto, idx) => (
                <img key={idx} src={foto} alt={`Foto ${idx + 1}`} className="w-full h-64 object-cover rounded-lg shadow-sm border border-slate-100" />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}