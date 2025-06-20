import React from 'react';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">Área Administrativa</h1>
          <nav className="space-x-4">
            <Link href="/" className="text-sm text-indigo-600 hover:text-indigo-800">
              Voltar ao Portal
            </Link>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="md:col-span-1">
            <nav className="space-y-1">
              <Link
                href="/admin/templates"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                Gerenciar Templates
              </Link>
              <Link
                href="/admin/placeholders"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                Regras de Placeholders
              </Link>
              {/* Futuramente:
              <Link
                href="/admin/users"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                Gerenciar Usuários
              </Link>
              */}
            </nav>
          </aside>
          <div className="md:col-span-3 bg-white p-6 rounded-lg shadow">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
