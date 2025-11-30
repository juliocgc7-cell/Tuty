import React from 'react';
import { Scissors, ShoppingBag, Truck, Award, Video, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold text-gray-800 mb-4">Nossos Cuidados Especiais</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços pensados para o bem-estar físico e emocional do seu pet.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Banho e Tosa */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 relative">
              <img src="https://picsum.photos/400/600?random=1" alt="Banho e Tosa" className="w-full h-64 md:h-full object-cover" />
              <div className="absolute top-4 left-4 bg-tuty-accent text-tuty-dark font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide">
                Carro Chefe
              </div>
            </div>
            <div className="p-8 md:w-3/5">
              <div className="flex items-center gap-3 mb-4">
                <Scissors className="text-tuty-primary" size={28} />
                <h2 className="text-2xl font-bold text-gray-800">Banho e Tosa</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Higiene completa com produtos premium, secadores silenciosos e técnicas de reforço positivo.
                Nosso ambiente é climatizado e projetado para reduzir a ansiedade.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Video size={18} className="text-tuty-secondary" />
                  <span>Monitoramento ao vivo (Link/QR Code)</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Volume2 size={18} className="text-tuty-secondary" />
                  <span>Secadores silenciosos (Tosa Comfort)</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Award size={18} className="text-tuty-secondary" />
                  <span>Produtos hipoalergênicos e orgânicos</span>
                </li>
              </ul>
              <Link to="/agendamento" className="inline-block bg-tuty-primary text-white font-bold py-2 px-6 rounded-full hover:bg-green-700 transition-colors">
                Agendar Horário
              </Link>
            </div>
          </div>

          {/* Adestramento */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <img src="https://picsum.photos/400/600?random=2" alt="Adestramento" className="w-full h-64 md:h-full object-cover" />
            </div>
            <div className="p-8 md:w-3/5">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-tuty-primary" size={28} />
                <h2 className="text-2xl font-bold text-gray-800">Adestramento</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Orientações e treinos baseados em reforço positivo. Ajudamos a melhorar a comunicação entre você e seu pet, corrigindo comportamentos indesejados com amor e paciência.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-tuty-secondary rounded-full"></div>
                  <span>Socialização para filhotes</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-tuty-secondary rounded-full"></div>
                  <span>Correção de ansiedade de separação</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-tuty-secondary rounded-full"></div>
                  <span>Truques e obediência básica</span>
                </li>
              </ul>
              <Link to="/contato" className="inline-block border-2 border-tuty-primary text-tuty-primary font-bold py-2 px-6 rounded-full hover:bg-tuty-primary hover:text-white transition-colors">
                Consultar Disponibilidade
              </Link>
            </div>
          </div>
        </div>

        {/* Other Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-tuty-secondary">
              <div className="flex items-center gap-3 mb-3">
                 <Truck className="text-tuty-primary" size={24} />
                 <h3 className="text-xl font-bold text-gray-800">Entrega e Retirada</h3>
              </div>
              <p className="text-gray-600">
                Comodidade total para quem tem rotina corrida. Buscamos seu pet com segurança em veículo climatizado e o levamos de volta cheiroso e feliz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-tuty-secondary">
              <div className="flex items-center gap-3 mb-3">
                 <ShoppingBag className="text-tuty-primary" size={24} />
                 <h3 className="text-xl font-bold text-gray-800">Loja Completa</h3>
              </div>
              <p className="text-gray-600">
                Rações, petiscos, brinquedos, acessórios e itens de higiene selecionados com carinho. Trabalhamos apenas com marcas que confiamos.
              </p>
            </div>
        </div>

        {/* Gallery */}
        <div className="mt-20">
          <h2 className="text-3xl font-heading font-bold text-center text-gray-800 mb-10">Galeria de Fofura</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <img src="https://picsum.photos/300/300?random=10" alt="Pet 1" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300 w-full h-full object-cover" />
             <img src="https://picsum.photos/300/300?random=11" alt="Pet 2" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300 w-full h-full object-cover" />
             <img src="https://picsum.photos/300/300?random=12" alt="Pet 3" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300 w-full h-full object-cover" />
             <img src="https://picsum.photos/300/300?random=13" alt="Pet 4" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300 w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;