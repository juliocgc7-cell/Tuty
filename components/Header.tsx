import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PawPrint } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path ? 'text-tuty-primary font-bold' : 'text-gray-600 hover:text-tuty-primary';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Loja', path: '/loja' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Agendamento', path: '/agendamento' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="bg-tuty-primary p-2 rounded-full text-white">
            <PawPrint size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-heading font-bold text-tuty-primary leading-none">Tuty</h1>
            <span className="text-xs text-tuty-secondary tracking-widest uppercase font-bold">Pet Shop</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`transition-colors text-sm uppercase tracking-wide ${isActive(link.path)}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/agendamento" 
            className="bg-tuty-primary hover:bg-green-700 text-white px-5 py-2 rounded-full font-bold transition-transform hover:-translate-y-0.5 shadow-sm text-sm"
          >
            Agendar Agora
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`px-6 py-3 border-l-4 border-transparent hover:bg-gray-50 hover:border-tuty-primary ${isActive(link.path)}`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;