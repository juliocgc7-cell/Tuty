import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tuty-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-tuty-secondary mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-gray-400 mb-4">
              Onde o carinho e o cuidado andam lado a lado com seu pet. Segurança, higiene e amor em primeiro lugar.
            </p>
            <div className="flex gap-4">
              <a href={COMPANY_INFO.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tuty-accent transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-tuty-accent transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/servicos" className="text-gray-400 hover:text-white hover:underline decoration-tuty-primary">Banho e Tosa</Link></li>
              <li><Link to="/loja" className="text-gray-400 hover:text-white hover:underline decoration-tuty-primary">Nossa Loja</Link></li>
              <li><Link to="/sobre" className="text-gray-400 hover:text-white hover:underline decoration-tuty-primary">Sobre Nós</Link></li>
              <li><Link to="/agendamento" className="text-gray-400 hover:text-white hover:underline decoration-tuty-primary">Agendar Horário</Link></li>
              <li><Link to="/politica-privacidade" className="text-gray-400 hover:text-white hover:underline decoration-tuty-primary">Política de Privacidade</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-tuty-primary shrink-0" size={20} />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-tuty-primary shrink-0" size={20} />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-tuty-primary shrink-0" size={20} />
                <span>{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Horário</h4>
            <div className="flex items-start gap-3 text-gray-400">
              <Clock className="text-tuty-primary shrink-0" size={20} />
              <span>{COMPANY_INFO.hours}</span>
            </div>
            <p className="mt-4 text-sm text-tuty-secondary font-semibold">Próximo ao Curso e Colégio Alfa.</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;