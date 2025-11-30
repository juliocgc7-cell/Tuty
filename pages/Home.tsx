import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ShoppingBag, Truck, CheckCircle, Video, Heart, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS, COMPANY_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-tuty-primary py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-tuty-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-tuty-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
              Carinho, segurança e cuidado para o melhor amigo da sua família.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-50">
              Onde o carinho e o cuidado andam lado a lado com seu pet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/agendamento" className="bg-tuty-accent text-tuty-primary font-bold py-4 px-8 rounded-full shadow-lg hover:bg-white transition-all transform hover:-translate-y-1 text-center">
                Agendar Banho & Tosa
              </Link>
              <a href={`https://wa.me/55${COMPANY_INFO.whatsapp.replace(/\D/g, '')}`} className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-tuty-primary transition-all text-center">
                Fale Conosco pelo WhatsApp
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/id/1025/600/600" 
              alt="Cachorro feliz" 
              className="rounded-3xl shadow-2xl border-4 border-white/20 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-2xl border border-green-100 text-center hover:shadow-lg transition-shadow">
              <div className="bg-tuty-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Banho e Tosa</h3>
              <p className="text-gray-600 mb-6">Técnicas de reforço positivo e produtos hipoalergênicos para o conforto do seu pet.</p>
              <Link to="/servicos" className="text-tuty-primary font-bold hover:underline">Saiba mais</Link>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl border border-green-100 text-center hover:shadow-lg transition-shadow">
              <div className="bg-tuty-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <ShoppingBag size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Loja Completa</h3>
              <p className="text-gray-600 mb-6">Acessórios, rações premium e brinquedos selecionados com carinho.</p>
              <Link to="/loja" className="text-tuty-primary font-bold hover:underline">Ver catálogo</Link>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl border border-green-100 text-center hover:shadow-lg transition-shadow">
              <div className="bg-tuty-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Entrega e Retirada</h3>
              <p className="text-gray-600 mb-6">Comodidade e segurança. Buscamos e levamos seu pet com todo cuidado.</p>
              <Link to="/servicos" className="text-tuty-primary font-bold hover:underline">Como funciona</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-16 bg-tuty-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-800 mb-4">Por que escolher a Tuty Pet Shop?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">No Tuty Pet Shop, cada pet é cuidado com amor, atenção e produtos de alta qualidade.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
              <Video className="text-tuty-primary mb-4" size={40} />
              <h4 className="font-bold text-lg mb-2">Monitoramento ao Vivo</h4>
              <p className="text-sm text-gray-600">Acompanhe o banho e tosa em tempo real via link ou QR Code.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
              <Calendar className="text-tuty-primary mb-4" size={40} />
              <h4 className="font-bold text-lg mb-2">Hora Marcada Sem Espera</h4>
              <p className="text-sm text-gray-600">Respeitamos seu tempo e evitamos estresse para o animal.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
              <ShieldCheck className="text-tuty-primary mb-4" size={40} />
              <h4 className="font-bold text-lg mb-2">Produtos Premium</h4>
              <p className="text-sm text-gray-600">Linha orgânica e hipoalergênica para máxima segurança.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
              <Heart className="text-tuty-primary mb-4" size={40} />
              <h4 className="font-bold text-lg mb-2">Tosa Comfort</h4>
              <p className="text-sm text-gray-600">Técnicas suaves, reforço positivo e secadores silenciosos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center text-gray-800 mb-12">O que os tutores dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                 <div className="text-tuty-secondary text-4xl font-serif absolute top-4 left-4 opacity-30">"</div>
                 <p className="text-gray-700 italic mb-4 relative z-10 pt-4">{t.text}</p>
                 <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${t.gender === 'female' ? 'bg-pink-400' : 'bg-blue-400'}`}>
                      {t.name.charAt(0)}
                    </div>
                    <span className="font-bold text-gray-900">{t.name}</span>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location/CTA */}
      <section className="py-16 bg-tuty-primary text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-heading font-bold mb-4">Venha nos conhecer!</h2>
            <p className="text-lg mb-6 opacity-90">Próximo ao Curso e Colégio Alfa. Um ambiente limpo, seguro e cheio de amor para receber seu melhor amigo.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full"><Calendar size={20} /></div>
                <span>{COMPANY_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="bg-white/20 p-2 rounded-full"><CheckCircle size={20} /></div>
                 <span>Fácil acesso e estacionamento</span>
              </div>
            </div>
            <Link to="/contato" className="inline-block bg-white text-tuty-primary font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
              Ver no Mapa
            </Link>
          </div>
          <div className="md:w-1/2 h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-300 relative">
             {/* Placeholder for Map - simulating embed */}
             <img src="https://picsum.photos/800/400?grayscale" className="w-full h-full object-cover opacity-50" alt="Mapa Estático" />
             <div className="absolute inset-0 flex items-center justify-center">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="bg-tuty-accent text-tuty-dark font-bold py-2 px-6 rounded-lg shadow hover:bg-white transition-colors">
                  Abrir Mapa
                </a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;