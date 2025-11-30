import React from 'react';
import { TEAM } from '../constants';
import { Shield, Heart, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero */}
      <div className="bg-tuty-light py-16">
        <div className="container mx-auto px-4 text-center">
           <h1 className="text-4xl font-heading font-bold text-tuty-primary mb-6">Quem Somos</h1>
           <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
             O Tuty Pet Shop nasceu do desejo de oferecer um atendimento acolhedor e transparente, 
             onde cada pet é tratado como parte da família. Com uma equipe apaixonada por animais, 
             prezamos por segurança, higiene e um ambiente tranquilo para garantir que a experiência 
             seja positiva tanto para o pet quanto para o tutor.
           </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Mission / Vision / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 border rounded-2xl border-gray-100 shadow-sm">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-tuty-primary">
              <Star size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Missão</h3>
            <p className="text-gray-600">Proporcionar bem-estar, conforto e cuidado especializado para cada pet.</p>
          </div>
          <div className="text-center p-8 border rounded-2xl border-gray-100 shadow-sm">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-tuty-primary">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Valores</h3>
            <p className="text-gray-600">Transparência, carinho, qualidade, respeito aos animais, higiene rigorosa e atendimento humanizado.</p>
          </div>
          <div className="text-center p-8 border rounded-2xl border-gray-100 shadow-sm">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-tuty-primary">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Certificações</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Especialização em banho e tosa humanizada</li>
              <li>Certificação em reforço positivo</li>
              <li>Treinamentos contínuos em bem-estar</li>
            </ul>
          </div>
        </div>

        {/* Team */}
        <h2 className="text-3xl font-heading font-bold text-center text-gray-800 mb-12">Nossa Equipe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {TEAM.map(member => (
            <div key={member.id} className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-tuty-light shadow-lg group-hover:border-tuty-secondary transition-colors">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-tuty-primary font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;