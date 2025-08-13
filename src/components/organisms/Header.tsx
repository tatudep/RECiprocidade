import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../atoms/ui/button";
import { Menu, X, Leaf, LogOut, User } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname, hash } = location;
  const isLanding = pathname === "/";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // When on landing and URL has a hash, scroll to it and set active
  useEffect(() => {
    if (!isLanding) return;
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
        setActiveSection(id);
      }
    } else {
      setActiveSection('home');
    }
  }, [isLanding, hash]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">RECiprocidade</span>
          </Link>

          {/* Desktop Navigation */}
          {!user ? (
            // Navigation for non-authenticated users (scroll navigation)
            <>
        <nav className="hidden md:flex items-center space-x-8">
                {isLanding ? (
                  <>
                    <button 
          onClick={() => scrollToSection('home')}
          className={`${activeSection === 'home' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'} transition-colors`}
                    >
                      Home
                    </button>
                    <button 
          onClick={() => scrollToSection('empresas')}
          className={`${activeSection === 'empresas' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'} transition-colors`}
                    >
                      Empresas
                    </button>
                    <button 
          onClick={() => scrollToSection('ongs')}
          className={`${activeSection === 'ongs' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'} transition-colors`}
                    >
                      ONGs
                    </button>
                    <button 
          onClick={() => scrollToSection('sobre')}
          className={`${activeSection === 'sobre' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'} transition-colors`}
                    >
                      Sobre
                    </button>
                    <button 
          onClick={() => scrollToSection('contato')}
          className={`${activeSection === 'contato' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'} transition-colors`}
                    >
                      Contato
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/#home" className="text-gray-700 hover:text-green-600 transition-colors">
                      Home
                    </Link>
                    <Link to="/#empresas" className="text-gray-700 hover:text-green-600 transition-colors">
                      Empresas
                    </Link>
                    <Link to="/#ongs" className="text-gray-700 hover:text-green-600 transition-colors">
                      ONGs
                    </Link>
                    <Link to="/#sobre" className="text-gray-700 hover:text-green-600 transition-colors">
                      Sobre
                    </Link>
                    <Link to="/#contato" className="text-gray-700 hover:text-green-600 transition-colors">
                      Contato
                    </Link>
                  </>
                )}
              </nav>

              <div className="hidden md:flex items-center space-x-4">
                <Link to="/entrar">
                  <Button size="sm" className="bg-green-600 text-white hover:bg-green-700">Entrar</Button>
                </Link>
              </div>
            </>
          ) : (
            // Navigation for authenticated users (route navigation)
            <>
              <nav className="hidden md:flex items-center space-x-8">
                <Link 
                  to="/dashboard" 
                  className={`transition-colors ${pathname.startsWith('/dashboard') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/empresas" 
                  className={`transition-colors ${pathname.startsWith('/empresas') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
                >
                  Empresas
                </Link>
                <Link 
                  to="/ongs" 
                  className={`transition-colors ${pathname.startsWith('/ongs') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
                >
                  ONGs
                </Link>
              </nav>

              <div className="hidden md:flex items-center space-x-4">
                <Link to="/perfil">
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    {user.nome}
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sair
                </Button>
              </div>
            </>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {!user ? (
                // Mobile navigation for non-authenticated users
    <>
                  {isLanding ? (
                    <>
                      <button 
      onClick={() => scrollToSection('home')}
      className={`block px-3 py-2 text-base font-medium hover:bg-gray-50 w-full text-left ${activeSection === 'home' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
                      >
                        Home
                      </button>
                      <button 
      onClick={() => scrollToSection('empresas')}
      className={`block px-3 py-2 text-base font-medium hover:bg-gray-50 w-full text-left ${activeSection === 'empresas' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
                      >
                        Empresas
                      </button>
                      <button 
      onClick={() => scrollToSection('ongs')}
      className={`block px-3 py-2 text-base font-medium hover:bg-gray-50 w-full text-left ${activeSection === 'ongs' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
                      >
                        ONGs
                      </button>
                      <button 
      onClick={() => scrollToSection('sobre')}
      className={`block px-3 py-2 text-base font-medium hover:bg-gray-50 w-full text-left ${activeSection === 'sobre' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
                      >
                        Sobre
                      </button>
                      <button 
      onClick={() => scrollToSection('contato')}
      className={`block px-3 py-2 text-base font-medium hover:bg-gray-50 w-full text-left ${activeSection === 'contato' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
                      >
                        Contato
                      </button>
                    </>
                  ) : (
                    <>
                      <Link 
                        to="/#home" 
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Home
                      </Link>
                      <Link 
                        to="/#empresas" 
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Empresas
                      </Link>
                      <Link 
                        to="/#ongs" 
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        ONGs
                      </Link>
                      <Link 
                        to="/#sobre" 
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sobre
                      </Link>
                      <Link 
                        to="/#contato" 
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contato
                      </Link>
                    </>
                  )}
                  <Link 
                    to="/entrar"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Entrar
                    </Button>
                  </Link>
                </>
              ) : (
                // Mobile navigation for authenticated users
                <>
                  <Link 
                    to="/dashboard" 
                    className={`block px-3 py-2 text-base font-medium hover:bg-gray-50 ${pathname.startsWith('/dashboard') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to="/empresas" 
                    className={`block px-3 py-2 text-base font-medium hover:bg-gray-50 ${pathname.startsWith('/empresas') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Empresas
                  </Link>
                  <Link 
                    to="/ongs" 
                    className={`block px-3 py-2 text-base font-medium hover:bg-gray-50 ${pathname.startsWith('/ongs') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ONGs
                  </Link>
                  {/* Removed 'Projetos' from mobile menu when authenticated */}
                  <Link 
                    to="/perfil" 
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Perfil
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="block px-3 py-2 text-base font-medium text-red-600 hover:bg-gray-50 w-full text-left"
                  >
                    Sair
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}