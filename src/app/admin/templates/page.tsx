"use client";

import React from 'react';
import Button from '@/components/ui/Button';

export default function ManageTemplatesPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Gerenciar Templates de Apresentação</h2>
        <Button variant="primary" onClick={() => alert('Funcionalidade de upload de novo template a ser implementada.')}>
          Novo Template
        </Button>
      </div>
      <p className="text-gray-700 mb-4">
        Aqui você poderá visualizar, adicionar, editar e remover os templates do Google Slides
        que serão utilizados para gerar as apresentações.
      </p>

      {/* Placeholder para lista de templates */}
      <div className="border border-dashed border-gray-300 rounded-md p-6 min-h-[200px] flex items-center justify-center">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3v6h6" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhum template cadastrado</h3>
          <p className="mt-1 text-sm text-gray-500">Comece adicionando um novo template.</p>
          {/* Futuramente, aqui será exibida uma lista/tabela de templates */}
        </div>
      </div>

      {/* Exemplo de como um item de template poderia parecer (estático por enquanto) */}
      <div className="mt-8 hidden">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Templates Existentes:</h3>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            <li className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-indigo-600 truncate">Template Padrão Vendas</p>
                  <p className="text-sm text-gray-500">ID: template_default_v1</p>
                </div>
                <div className="space-x-2">
                  <Button variant="secondary" onClick={() => alert('Editar template')}>Editar</Button>
                  <Button variant="secondary" className="text-red-600 hover:bg-red-100" onClick={() => alert('Remover template')}>Remover</Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
