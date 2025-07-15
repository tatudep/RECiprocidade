import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Users, Heart, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Empresas = () => {
  const empresasParceiras = [
    {
      nome: "TechSolutions",
      setor: "Tecnologia",
      ods: ["4. Educação de Qualidade", "9. Inovação e Infraestrutura"],
      apoio: "Capacitação digital para ONGs",
      logo: "🏢"
    },
    {
      nome: "EcoEnergy",
      setor: "Energia Renovável",
      ods: ["7. Energia Limpa", "13. Ação Climática"],
      apoio: "Instalação de painéis solares",
      logo: "⚡"
    },
    {
      nome: "AgroVerde",
      setor: "Agronegócio",
      ods: ["2. Fome Zero", "15. Vida Terrestre"],
      apoio: "Doação de alimentos orgânicos",
      logo: "🌱"
    },
    {
      nome: "HealthCare+",
      setor: "Saúde",
      ods: ["3. Saúde e Bem-Estar", "10. Redução das Desigualdades"],
      apoio: "Atendimento médico gratuito",
      logo: "🏥"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Empresas Parceiras da RECiprocidade
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça as empresas que estão fazendo a diferença ao apoiar ONGs através dos 17 ODS.
          </p>
          
          <div className="mt-8">
            <Link to="/empresas/cadastro">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Building2 className="mr-2 h-5 w-5" />
                Cadastrar Minha Empresa
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">250+</div>
              <div className="text-gray-600">Empresas Cadastradas</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">150+</div>
              <div className="text-gray-600">ONGs Apoiadas</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-gray-600">Projetos Financiados</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">1M+</div>
              <div className="text-gray-600">Vidas Transformadas</div>
            </CardContent>
          </Card>
        </div>

        {/* Empresas em Destaque */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Empresas em Destaque
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {empresasParceiras.map((empresa, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{empresa.logo}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{empresa.nome}</h3>
                      <p className="text-gray-600">{empresa.setor}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">ODS Apoiados:</h4>
                    <div className="flex flex-wrap gap-2">
                      {empresa.ods.map((ods, odsIndex) => (
                        <span key={odsIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {ods}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Como Ajuda:</h4>
                    <p className="text-gray-600">{empresa.apoio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Sua empresa quer fazer parte?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se à nossa rede de empresas comprometidas com o impacto social positivo.
          </p>
          <Link to="/empresas/cadastro">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Cadastrar Empresa
              <Building2 className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Empresas;
