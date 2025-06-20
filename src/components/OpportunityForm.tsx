'use client'; // Mark as a Client Component

import React, { useState } from 'react';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

interface FormData {
  opportunityName: string;
  customerName: string;
  discoveryNotes: string;
  compellingReason: string;
  businessCase: string;
  solutionDetails: string;
  timeline: string;
}

interface FormErrors {
  opportunityName?: string;
  customerName?: string;
  compellingReason?: string;
}

const OpportunityForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    opportunityName: '',
    customerName: '',
    discoveryNotes: '',
    compellingReason: '',
    businessCase: '',
    solutionDetails: '',
    timeline: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.opportunityName.trim()) {
      newErrors.opportunityName = 'Nome da oportunidade é obrigatório.';
    }
    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Nome do cliente é obrigatório.';
    }
    if (!formData.compellingReason.trim()) {
      newErrors.compellingReason = 'Compelling reason é obrigatório.';
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitMessage(null);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    setSubmitMessage('Enviando dados...');

    try {
      // console.log('Form data submitted:', formData); // Log for now
      const response = await fetch('/api/opportunity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setIsSubmitting(false);
      if (response.ok) {
        setSubmitMessage('Dados enviados com sucesso!');
        // Reset form if needed
        // setFormData({ opportunityName: '', customerName: '', discoveryNotes: '', compellingReason: '', businessCase: '', solutionDetails: '', timeline: '' });
      } else {
        const errorData = await response.json();
        setSubmitMessage(`Erro ao enviar dados: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error('Submit error:', error);
      setSubmitMessage('Erro ao enviar dados. Verifique o console.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Nova Oportunidade</h2>

      <Input
        label="Nome da Oportunidade"
        name="opportunityName"
        value={formData.opportunityName}
        onChange={handleChange}
        error={errors.opportunityName}
        maxLength={100}
        required
      />

      <Input
        label="Nome do Cliente"
        name="customerName"
        value={formData.customerName}
        onChange={handleChange}
        error={errors.customerName}
        maxLength={100}
        required
      />

      <Textarea
        label="Etapas de Discovery (Notas)"
        name="discoveryNotes"
        value={formData.discoveryNotes}
        onChange={handleChange}
        placeholder="Detalhes sobre as conversas de discovery, dores identificadas, processos atuais..."
      />

      <Textarea
        label="Compelling Reason"
        name="compellingReason"
        value={formData.compellingReason}
        onChange={handleChange}
        error={errors.compellingReason}
        placeholder="Por que o cliente precisa agir agora? Qual o impacto de não fazer nada?"
        required
      />

      <Textarea
        label="Business Case / ROI"
        name="businessCase"
        value={formData.businessCase}
        onChange={handleChange}
        placeholder="Argumentos de valor, estimativas de ROI, benefícios quantitativos e qualitativos..."
      />

      <Textarea
        label="Detalhes da Solução Proposta"
        name="solutionDetails"
        value={formData.solutionDetails}
        onChange={handleChange}
        placeholder="Descreva a solução DocuSign que atende às necessidades do cliente, produtos envolvidos, etc."
      />

      <Input
        label="Timeline Estimado (Ex: Q3, Próximos 60 dias)"
        name="timeline"
        value={formData.timeline}
        onChange={handleChange}
        maxLength={50}
      />

      <div className="flex items-center justify-end space-x-3">
        {submitMessage && <p className={`text-sm ${errors && Object.keys(errors).length > 0 ? 'text-red-600' : 'text-green-600'}`}>{submitMessage}</p>}
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Salvar Oportunidade'}
        </Button>
      </div>
    </form>
  );
};

export default OpportunityForm;
