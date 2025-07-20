import React from 'react';
import Header from '@/components/organisms/Header';
import { Card, CardContent } from '@/components/atoms/ui/card';
import { Heart, Users, Target, Handshake } from 'lucide-react';
import { Button } from '@/components/atoms/ui/button';
import { Link } from 'react-router-dom';

const ONGs = () => {
  const ongsParceiras = [
    {
      nome: "Instituto Casa Amarela Social",
      area: "Meio Ambiente",
      ods: ["13. Ação Climática", "15. Vida Terrestre"],
      missao: "Preservação de florestas e educação ambiental",
      beneficiarios: 2500,
      logo: "🌳"
    },
    {
      nome: "Programa Quem Ama Cuida",
      area: "Educação",
      ods: ["4. Educação de Qualidade", "10. Redução das Desigualdades"],
      missao: "Acesso à educação de qualidade para comunidades carentes",
      beneficiarios: 1800,
      logo: "📚"
    },
    {
      nome: "Casa da Comunidade Pirou Geral",
      area: "Saúde",
      ods: ["3. Saúde e Bem-Estar", "1. Erradicação da Pobreza"],
      missao: "Atendimento médico gratuito em comunidades vulneráveis",
      beneficiarios: 3200,
      logo: "🏥"
    },
    {
      nome: "Alimento Solidário",
      area: "Segurança Alimentar",
      ods: ["2. Fome Zero", "11. Cidades Sustentáveis"],
      missao: "Combate à fome e distribuição de alimentos",
      beneficiarios: 5000,
      logo: "🍽️"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            ONGs Cadastradas na RECiprocidade
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça as organizações que estão transformando vidas e construindo um futuro melhor através dos 17 ODS.
          </p>
          
          <div className="mt-8">
            <Link to="/ongs/cadastro">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                <Heart className="mr-2 h-5 w-5" />
                Cadastrar Minha ONG
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">180+</div>
              <div className="text-gray-600">ONGs Cadastradas</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">50K+</div>
              <div className="text-gray-600">Vidas Impactadas</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">320+</div>
              <div className="text-gray-600">Projetos Ativos</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <Handshake className="h-12 w-12 text-orange-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">150+</div>
              <div className="text-gray-600">Parcerias Ativas</div>
            </CardContent>
          </Card>
        </div>

        {/* ONGs em Destaque */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            ONGs em Destaque
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {ongsParceiras.map((ong, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{ong.logo}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{ong.nome}</h3>
                      <p className="text-gray-600">{ong.area}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">ODS Trabalhados:</h4>
                    <div className="flex flex-wrap gap-2">
                      {ong.ods.map((ods, odsIndex) => (
                        <span key={odsIndex} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {ods}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Missão:</h4>
                    <p className="text-gray-600">{ong.missao}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Beneficiários:</h4>
                    <p className="text-2xl font-bold text-green-600">{ong.beneficiarios.toLocaleString()}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-600 rounded-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Sua ONG precisa de apoio?</h2>
          <p className="text-xl text-green-100 mb-8">
            Cadastre-se em nossa plataforma e conecte-se com empresas que querem ajudar sua causa.
          </p>
          <Link to="/ongs/cadastro">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 border-white">
              Cadastrar ONG
              <Heart className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ONGs;
