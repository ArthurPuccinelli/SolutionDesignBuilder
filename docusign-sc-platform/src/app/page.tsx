import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Plataforma de Apoio SC - DocuSign
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Bem-vindo à plataforma de gestão de oportunidades para Solution Consultants.
        </p>
        <Link
          href="/new-opportunity"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition-colors"
        >
          Criar Nova Oportunidade
        </Link>
      </div>
    </main>
  );
}
