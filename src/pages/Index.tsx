import { Button } from "../components/atoms/ui/button";
import { Leaf, Building2, Heart, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/organisms/Header";

export default function Index() {
  const location = useLocation();
  // Keep only the initial hash-based scroll to support deep-links.
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-white">
  {/* Header */}
  <Header />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <Leaf className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Conectando{" "}
              <span className="text-green-600">Sustentabilidade</span>
              <br />
              e <span className="text-blue-600">Reciprocidade</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A plataforma que une empresas, ONGs e comunidades para criar projetos 
              de impacto social e ambiental positivo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/entrar">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/#sobre">
                <Button 
                  size="lg" 
                  variant="outline"
                >
                  Saiba Mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Empresas Section */}
      <section id="empresas" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Building2 className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Para Empresas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Transforme sua responsabilidade social em impacto real. 
              Conecte-se com projetos alinhados aos seus valores e objetivos de sustentabilidade.
            </p>
            <Link to="/entrar">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Cadastrar Empresa
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ONGs Section */}
      <section id="ongs" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Para ONGs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Potencialize o impacto dos seus projetos. Encontre parceiros estratégicos 
              e recursos para transformar suas ideias em realidade.
            </p>
            <Link to="/ongs/cadastro">
              <Button className="bg-red-600 hover:bg-red-700">
                Cadastrar ONG
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre a RECiprocidade</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Nossa missão é criar um ecossistema de colaboração sustentável, 
              onde cada projeto gera valor compartilhado para todos os envolvidos.
            </p>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Juntos, podemos criar um impacto maior
              </h3>
              <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                <div>
                  <div className="text-3xl font-bold text-green-600">20+</div>
                  <div className="text-sm text-gray-600">Projetos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">40+</div>
                  <div className="text-sm text-gray-600">ONGs Cadastradas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">100+</div>
                  <div className="text-sm text-gray-600">Empresas Interessadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Tem alguma dúvida ou quer saber mais sobre como participar? 
              Nossa equipe está pronta para ajudar!
            </p>
            <div className="space-y-2 mb-8">
              <p className="text-gray-600">📧 ascom@cin.ufpe.br</p>
              <p className="text-gray-600">📞 (81) 2126-8430</p>
              <p className="text-gray-600">📍 Recife, PE - Brasil</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold">RECiprocidade</span>
            </div>
            <p className="text-gray-400 mb-4">
              Conectando sustentabilidade e reciprocidade para um mundo melhor.
            </p>
            <p className="text-gray-400">
              © 2025 RECiprocidade. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
