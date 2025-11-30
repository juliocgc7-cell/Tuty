import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Filter } from 'lucide-react';

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Ração', 'Brinquedos', 'Acessórios', 'Higiene', 'Petiscos'];

  const filteredProducts = selectedCategory === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="py-12 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
           <h1 className="text-4xl font-heading font-bold text-gray-800 mb-4">Loja Tuty</h1>
           <p className="text-gray-600">Produtos selecionados para o seu melhor amigo.</p>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="md:w-1/4">
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-tuty-primary">
                <Filter size={20} />
                <h3 className="font-bold text-lg">Categorias</h3>
              </div>
              <ul className="space-y-2">
                {categories.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat 
                          ? 'bg-tuty-primary text-white font-semibold' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="md:w-3/4">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {filteredProducts.map(product => (
                 <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                   <div className="h-64 overflow-hidden relative">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                      <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-tuty-primary uppercase">
                        {product.category}
                      </div>
                   </div>
                   <div className="p-5">
                     <h3 className="font-bold text-gray-800 text-lg mb-2">{product.name}</h3>
                     <div className="flex justify-between items-center">
                       <span className="text-tuty-primary font-bold text-xl">
                         R$ {product.price.toFixed(2).replace('.', ',')}
                       </span>
                       <button className="bg-tuty-secondary hover:bg-tuty-primary text-white p-2 rounded-full transition-colors" title="Ver detalhes">
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                       </button>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
             {filteredProducts.length === 0 && (
               <div className="text-center py-20 text-gray-500">
                 Nenhum produto encontrado nesta categoria.
               </div>
             )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;