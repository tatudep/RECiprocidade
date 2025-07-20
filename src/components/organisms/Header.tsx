import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/atoms/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">RECiprocidade</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${
                isActive('/') 
                  ? 'text-green-600 font-semibold' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Início
            </Link>
            <Link 
              to="/empresas" 
              className={`transition-colors ${
                isActive('/empresas') 
                  ? 'text-green-600 font-semibold' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Empresas
            </Link>
            <Link 
              to="/ongs" 
              className={`transition-colors ${
                isActive('/ongs') 
                  ? 'text-green-600 font-semibold' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              ONGs
            </Link>
            <Link 
              to="/sobre" 
              className={`transition-colors ${
                isActive('/sobre') 
                  ? 'text-green-600 font-semibold' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Sobre
            </Link>
            <Link 
              to="/contato" 
              className={`transition-colors ${
                isActive('/contato') 
                  ? 'text-green-600 font-semibold' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
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
              <Link 
                to="/" 
                className={`transition-colors ${
                  isActive('/') 
                    ? 'text-green-600 font-semibold' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Início
              </Link>
              <Link 
                to="/empresas" 
                className={`transition-colors ${
                  isActive('/empresas') 
                    ? 'text-green-600 font-semibold' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Empresas
              </Link>
              <Link 
                to="/ongs" 
                className={`transition-colors ${
                  isActive('/ongs') 
                    ? 'text-green-600 font-semibold' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                ONGs
              </Link>
              <Link 
                to="/sobre" 
                className={`transition-colors ${
                  isActive('/sobre') 
                    ? 'text-green-600 font-semibold' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Sobre
              </Link>
              <Link 
                to="/contato" 
                className={`transition-colors ${
                  isActive('/contato') 
                    ? 'text-green-600 font-semibold' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
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
