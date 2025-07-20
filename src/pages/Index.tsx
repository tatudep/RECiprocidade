import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Target, HandHeart } from 'lucide-react';
import { Button } from '@/components/atoms/ui/button';
import { Card, CardContent } from '@/components/atoms/ui/card';
import Header from '@/components/organisms/Header';
import FeaturedCompanies from '@/components/organisms/FeaturedCompanies';
import SDGsSection from '@/components/organisms/SDGsSection';
import StatsSection from '@/components/organisms/StatsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Conectando Empresas
            <span className="text-green-600 block">para Ajudar ONGs</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A RECiprocidade é uma plataforma que conecta empresas comprometidas com ONGs que precisam de apoio para transformar vidas através dos 17 Objetivos de Desenvolvimento Sustentável.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/ongs/cadastro">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                Sou ONG - Preciso de Ajuda
                <Heart className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/empresas/cadastro">
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Sou Empresa - Quero Ajudar
                <HandHeart className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Apoio às ONGs</h3>
                <p className="text-gray-600">Conectamos ONGs com empresas dispostas a oferecer recursos, expertise e apoio financeiro.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Foco nos ODS</h3>
                <p className="text-gray-600">Todas as conexões são baseadas nos 17 Objetivos de Desenvolvimento Sustentável da ONU.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Impacto Coletivo</h3>
                <p className="text-gray-600">Juntos, empresas e ONGs criam um impacto positivo duradouro na sociedade.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <StatsSection />
      <FeaturedCompanies />
      <SDGsSection />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Sua ONG precisa de apoio?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Cadastre-se na RECiprocidade e encontre empresas dispostas a ajudar sua causa.
          </p>
          <Link to="/sobre">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Saiba Mais
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
