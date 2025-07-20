import React from 'react';
import { Card, CardContent } from '@/components/atoms/ui/card';
import { Badge } from '@/components/atoms/ui/badge';

const FeaturedCompanies = () => {
  const companies = [
    {
      name: "EcoTech Solutions",
      sector: "Tecnologia",
      ods: ["Energia Limpa", "Inovação"],
      description: "Desenvolvemos soluções tecnológicas sustentáveis para empresas.",
      impact: "500+ toneladas de CO2 reduzidas"
    },
    {
      name: "GreenBuild Corp",
      sector: "Construção",
      ods: ["Cidades Sustentáveis", "Consumo Responsável"],
      description: "Construção sustentável com materiais eco-friendly.",
      impact: "100+ edifícios sustentáveis"
    },
    {
      name: "AgroSustentável",
      sector: "Agricultura",
      ods: ["Fome Zero", "Vida Terrestre"],
      description: "Agricultura regenerativa e produção orgânica.",
      impact: "5.000 hectares preservados"
    },
    {
      name: "CleanEnergy Brasil",
      sector: "Energia",
      ods: ["Energia Limpa", "Ação Climática"],
      description: "Energia renovável para um futuro sustentável.",
      impact: "1GW de energia limpa gerada"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Empresas que Fazem a Diferença
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça algumas das empresas parceiras que estão transformando o mundo através dos ODS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {company.name}
                  </h3>
                  <Badge variant="secondary" className="mb-3">
                    {company.sector}
                  </Badge>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {company.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-green-700 mb-2">ODS Focados:</p>
                  <div className="flex flex-wrap gap-1">
                    {company.ods.map((ods, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-green-200 text-green-700">
                        {ods}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-sm font-medium text-blue-600">
                    {company.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;
