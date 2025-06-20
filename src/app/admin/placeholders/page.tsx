"use client";

import React from 'react';
import Button from '@/components/ui/Button';

export default function ManagePlaceholdersPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Gerenciar Regras de Placeholders</h2>
        <Button variant="primary" onClick={() => alert('Funcionalidade de nova regra de placeholder a ser implementada.')}>
          Nova Regra
        </Button>
      </div>
      <p className="text-gray-700 mb-4">
        Defina como os dados do formulário de oportunidade serão mapeados para os placeholders
        nos templates de apresentação. Por exemplo, <code>{`{{customer_name}}`}</code> no template
        será substituído pelo campo &quot;Nome do Cliente&quot; do formulário.
      </p>

      {/* Placeholder para lista de regras */}
      <div className="border border-dashed border-gray-300 rounded-md p-6 min-h-[200px] flex items-center justify-center">
        <div className="text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 5l7 7-7 7" />
        </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhuma regra de placeholder definida</h3>
          <p className="mt-1 text-sm text-gray-500">Comece adicionando uma nova regra.</p>
          {/* Futuramente, aqui será exibida uma lista/tabela de regras */}
        </div>
      </div>

      {/* Exemplo de como um item de regra poderia parecer (estático por enquanto) */}
      <div className="mt-8 hidden">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Regras Definidas:</h3>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            <li className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-indigo-600 truncate"><code>{`{{customer_name}}`}</code></p>
                  <p className="text-sm text-gray-500">Mapeado para: <code>formData.customerName</code></p>
                </div>
                <div className="space-x-2">
                  <Button variant="secondary" onClick={() => alert('Editar regra')}>Editar</Button>
                  <Button variant="secondary" className="text-red-600 hover:bg-red-100" onClick={() => alert('Remover regra')}>Remover</Button>
                </div>
              </div>
            </li>
            <li className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-indigo-600 truncate"><code>{`{{compelling_reason_summary}}`}</code></p>
                  <p className="text-sm text-gray-500">Mapeado para: <code>iaService.summarize(formData.compellingReason)</code> (Lógica customizada)</p>
                </div>
                <div className="space-x-2">
                  <Button variant="secondary" onClick={() => alert('Editar regra')}>Editar</Button>
                  <Button variant="secondary" className="text-red-600 hover:bg-red-100" onClick={() => alert('Remover regra')}>Remover</Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
