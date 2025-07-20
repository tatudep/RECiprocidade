import React from 'react';
import Header from '@/components/organisms/Header';
import { Card, CardContent } from '@/components/atoms/ui/card';
import { Users, Target, Heart, HandHeart, Building2, Handshake } from 'lucide-react';

const Sobre = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Sobre a RECiprocidade
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Uma plataforma dedicada a conectar empresas comprometidas com ONGs que precisam de apoio, 
            criando uma rede de reciprocidade baseada nos 17 Objetivos de Desenvolvimento Sustentável da ONU.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Facilitar o apoio às ONGs através de parcerias estratégicas com empresas, 
              criando um ecossistema de reciprocidade que acelere o impacto social positivo.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Acreditamos que quando empresas e ONGs trabalham juntas, o resultado é 
              uma transformação social mais rápida e efetiva para todos.
            </p>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative">
              <Heart className="h-64 w-64 text-green-100" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Handshake className="h-32 w-32 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Como Ajudamos as ONGs
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <Heart className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">1. ONGs se Cadastram</h3>
                <p className="text-gray-600">
                  ONGs apresentam seus projetos, necessidades e objetivos alinhados aos ODS.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <Building2 className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">2. Empresas Oferecem Apoio</h3>
                <p className="text-gray-600">
                  Empresas definem como podem ajudar: recursos financeiros, expertise, voluntariado ou equipamentos.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <Target className="h-16 w-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">3. Conexões que Transformam</h3>
                <p className="text-gray-600">
                  Facilitamos o match perfeito e acompanhamos o impacto gerado pelas parcerias.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-12 text-white text-center mb-20">
          <h2 className="text-3xl font-bold mb-8">Apoio às ONGs em Números</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-green-100">ONGs Apoiadas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">250+</div>
              <div className="text-green-100">Empresas Parceiras</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Projetos Financiados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-green-100">Vidas Transformadas</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Nossos Valores</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <HandHeart className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reciprocidade</h3>
              <p className="text-gray-600">
                Acreditamos na troca mútua de valor entre empresas e ONGs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparência</h3>
              <p className="text-gray-600">
                Promovemos transparência em todas as parcerias e no uso dos recursos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Impacto Social</h3>
              <p className="text-gray-600">
                Nosso foco é maximizar o impacto positivo na sociedade e meio ambiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
