import OpportunityForm from '@/components/OpportunityForm';
import React from 'react';

export default function NewOpportunityPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <OpportunityForm />
      </div>
    </main>
  );
}
