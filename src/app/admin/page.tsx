import React from 'react';

export default function AdminHomePage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Painel Administrativo</h2>
      <p className="text-gray-700">
        Bem-vindo à área administrativa. Selecione uma opção no menu à esquerda para gerenciar
        as configurações da plataforma.
      </p>
      <div className="mt-6 p-4 border border-dashed border-gray-300 rounded-md">
        <h3 className="text-lg font-medium text-gray-900">Próximos Passos:</h3>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Implementar funcionalidade de upload e gerenciamento de templates do Google Slides.</li>
          <li>Definir e gerenciar as regras de mapeamento de dados para placeholders nos templates.</li>
          <li>(Futuro) Integração com sistema de autenticação e gerenciamento de usuários.</li>
        </ul>
      </div>
    </div>
  );
}
