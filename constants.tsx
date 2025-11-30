import { Testimonial, Product, TeamMember } from './types';

export const COMPANY_INFO = {
  name: "Tuty Pet Shop",
  address: "R. Arapongas, 4231 – Zona II – Umuarama – PR",
  whatsapp: "44 99999-9999",
  phone: "44 3626-2464",
  email: "tutyshop@tutyshop.com.br",
  hours: "Seg–Sex 08:00–18:00 / Sáb 08:00–12:00",
  facebook: "https://www.facebook.com/tutypetshop.umu/"
};

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Ana M.', text: 'A equipe é maravilhosa! Meu cachorro volta sempre cheiroso e calmo.', gender: 'female' },
  { id: '2', name: 'Juliana R.', text: 'Nunca vi tanto carinho com os pets. Confio de olhos fechados.', gender: 'female' },
  { id: '3', name: 'Paula C.', text: 'O monitoramento ao vivo me ganhou! Amei acompanhar minha gata no banho.', gender: 'female' },
  { id: '4', name: 'Carlos T.', text: 'Atendimento pontual e superprofissional. Recomendo muito!', gender: 'male' },
  { id: '5', name: 'Ricardo L.', text: 'Meu cão tem ansiedade, e a Tosa Comfort fez toda diferença.', gender: 'male' },
  { id: '6', name: 'Marcelo V.', text: 'Produtos excelentes e ótima variedade. Sempre compro a ração aqui.', gender: 'male' },
];

export const PRODUCTS: Product[] = [
  { id: '1', name: 'Ração Premium Adulto', category: 'Ração', price: 149.90, image: 'https://picsum.photos/400/400?random=101' },
  { id: '2', name: 'Brinquedo Mordedor Resistente', category: 'Brinquedos', price: 45.00, image: 'https://picsum.photos/400/400?random=102' },
  { id: '3', name: 'Coleira de Couro Ajustável', category: 'Acessórios', price: 89.90, image: 'https://picsum.photos/400/400?random=103' },
  { id: '4', name: 'Shampoo Hipoalergênico', category: 'Higiene', price: 35.50, image: 'https://picsum.photos/400/400?random=104' },
  { id: '5', name: 'Petiscos Naturais Frango', category: 'Petiscos', price: 22.90, image: 'https://picsum.photos/400/400?random=105' },
  { id: '6', name: 'Caminha Nuvem G', category: 'Acessórios', price: 180.00, image: 'https://picsum.photos/400/400?random=106' },
  { id: '7', name: 'Arranhador Torre', category: 'Brinquedos', price: 250.00, image: 'https://picsum.photos/400/400?random=107' },
  { id: '8', name: 'Ração Gatos Castrados', category: 'Ração', price: 120.90, image: 'https://picsum.photos/400/400?random=108' },
];

export const TEAM: TeamMember[] = [
  { id: '1', name: 'Dra. Mariana', role: 'Médica Veterinária', image: 'https://picsum.photos/300/300?random=201' },
  { id: '2', name: 'Roberto Silva', role: 'Especialista em Tosa', image: 'https://picsum.photos/300/300?random=202' },
  { id: '3', name: 'Carla Souza', role: 'Atendimento & Carinho', image: 'https://picsum.photos/300/300?random=203' },
];