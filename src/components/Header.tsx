import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/3ba05c6e-375d-4e29-a298-d8e6e6247677.png" 
              alt="RECiprocidade Logo" 
              className="h-12 w-12"
            />
            <span className="text-2xl font-bold text-gray-900">RECiprocidade</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Início
            </Link>
            <Link to="/empresas" className="text-gray-700 hover:text-green-600 transition-colors">
              Empresas
            </Link>
            <Link to="/ongs" className="text-gray-700 hover:text-green-600 transition-colors">
              ONGs
            </Link>
            <Link to="/sobre" className="text-gray-700 hover:text-green-600 transition-colors">
              Sobre
            </Link>
            <Link to="/contato" className="text-gray-700 hover:text-green-600 transition-colors">
              Contato
            </Link>
            <Link to="/entrar">
              <Button className="bg-green-600 hover:bg-green-700">
                Entrar
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Início
              </Link>
              <Link to="/empresas" className="text-gray-700 hover:text-green-600 transition-colors">
                Empresas
              </Link>
              <Link to="/ongs" className="text-gray-700 hover:text-green-600 transition-colors">
                ONGs
              </Link>
              <Link to="/sobre" className="text-gray-700 hover:text-green-600 transition-colors">
                Sobre
              </Link>
              <Link to="/contato" className="text-gray-700 hover:text-green-600 transition-colors">
                Contato
              </Link>
              <Link to="/entrar">
                <Button className="bg-green-600 hover:bg-green-700 w-fit">
                  Entrar
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
