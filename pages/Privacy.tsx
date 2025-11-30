import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-heading font-bold text-gray-800 mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-green text-gray-600">
          <p className="mb-4">
            A <strong>Tuty Pet Shop</strong> preza pela segurança e privacidade dos dados de seus clientes. Esta política descreve como utilizamos e protegemos as informações fornecidas por você.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Coleta de Dados</h3>
          <p className="mb-4">
            Coletamos apenas informações básicas necessárias para o agendamento de serviços, entrega de produtos e comunicação, como: nome, telefone, endereço e dados do seu pet (nome, raça, histórico de saúde).
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Uso das Informações</h3>
          <p className="mb-4">
            Seus dados são utilizados exclusivamente para:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Agendar banhos, tosa e consultas.</li>
            <li>Realizar entregas de produtos comprados na loja.</li>
            <li>Entrar em contato para confirmações ou avisos sobre o serviço.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Proteção e Compartilhamento</h3>
          <p className="mb-4">
            Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing. Suas informações são armazenadas em ambiente seguro e acessadas apenas por nossa equipe autorizada.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Contato</h3>
          <p className="mb-4">
            Caso queira atualizar seus dados ou solicitar a exclusão de nosso cadastro, entre em contato pelo telefone ou e-mail disponibilizados em nossa página de Contato.
          </p>

          <p className="mt-8 text-sm text-gray-500">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;