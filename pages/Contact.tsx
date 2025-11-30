import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-center text-gray-800 mb-12">Fale com a Tuty Pet Shop</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
            <div className="space-y-6">
               <div className="flex items-start gap-4">
                 <div className="bg-tuty-light p-3 rounded-full text-tuty-primary">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-gray-800">Endereço</h3>
                   <p className="text-gray-600">{COMPANY_INFO.address}</p>
                   <p className="text-sm text-tuty-secondary mt-1">Próximo ao Curso e Colégio Alfa</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="bg-tuty-light p-3 rounded-full text-tuty-primary">
                   <Phone size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-gray-800">Telefones</h3>
                   <p className="text-gray-600">WhatsApp: {COMPANY_INFO.whatsapp}</p>
                   <p className="text-gray-600">Fixo: {COMPANY_INFO.phone}</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="bg-tuty-light p-3 rounded-full text-tuty-primary">
                   <Mail size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-gray-800">E-mail</h3>
                   <p className="text-gray-600">{COMPANY_INFO.email}</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="bg-tuty-light p-3 rounded-full text-tuty-primary">
                   <Clock size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-gray-800">Horário de Funcionamento</h3>
                   <p className="text-gray-600">{COMPANY_INFO.hours}</p>
                 </div>
               </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <a 
                href={`https://wa.me/55${COMPANY_INFO.whatsapp.replace(/\D/g, '')}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white text-center font-bold py-4 rounded-xl transition-colors"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-md relative group">
             {/* Placeholder for iframe */}
             <img src="https://picsum.photos/800/800?grayscale" className="w-full h-full object-cover" alt="Mapa" />
             <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg shadow-lg font-bold hover:scale-105 transition-transform"
                >
                  Ver no Google Maps
                </a>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;