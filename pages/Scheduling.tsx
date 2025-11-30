import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const Scheduling: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-tuty-primary mb-4">Agende com Facilidade</h1>
          <p className="text-xl text-gray-600">Seu pet merece um atendimento pontual e sem estresse.</p>
        </div>

        <div className="bg-tuty-light p-8 rounded-3xl shadow-sm border border-green-100 mb-12 text-center">
           <div className="flex flex-col items-center justify-center gap-4 mb-6">
              <Clock className="text-tuty-primary w-16 h-16" />
              <h2 className="text-2xl font-bold text-gray-800">Hora Marcada Sem Espera</h2>
           </div>
           <p className="text-gray-700 max-w-2xl mx-auto mb-8">
             Sabemos que a espera pode gerar ansiedade nos animais. Por isso, trabalhamos com agendamento rigoroso para que seu pet seja atendido assim que chegar.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={`https://wa.me/55${COMPANY_INFO.whatsapp.replace(/\D/g, '')}?text=Olá, gostaria de agendar um horário para meu pet.`}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Agendar pelo WhatsApp
              </a>
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className="bg-white border-2 border-tuty-primary text-tuty-primary font-bold py-4 px-8 rounded-full hover:bg-green-50 transition-all flex items-center justify-center gap-2"
              >
                Ligar {COMPANY_INFO.phone}
              </a>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border border-gray-100 rounded-2xl">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <CheckCircle className="text-tuty-secondary" size={20} />
              Informações Necessárias
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Nome do Pet e Raça</li>
              <li>• Idade aproximada</li>
              <li>• Serviços desejados (Banho, Tosa, Hidratação)</li>
              <li>• Observações de saúde ou comportamento</li>
            </ul>
          </div>
          <div className="p-6 border border-gray-100 rounded-2xl">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <Calendar className="text-tuty-secondary" size={20} />
              Horários Disponíveis
            </h3>
            <p className="text-gray-600 mb-2">Trabalhamos de Segunda a Sábado.</p>
            <p className="text-gray-600">{COMPANY_INFO.hours}</p>
            <p className="text-sm text-gray-500 mt-2 italic">* Recomendamos agendar com antecedência para fins de semana.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;