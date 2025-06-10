import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SDGsSection = () => {
  const sdgs = [
    { 
      id: 1, 
      title: "Erradicação da Pobreza", 
      color: "bg-red-500"
    },
    { 
      id: 2, 
      title: "Fome Zero", 
      color: "bg-yellow-500"
    },
    { 
      id: 3, 
      title: "Saúde e Bem-Estar", 
      color: "bg-green-500"
    },
    { 
      id: 4, 
      title: "Educação de Qualidade", 
      color: "bg-red-600"
    },
    { 
      id: 5, 
      title: "Igualdade de Gênero", 
      color: "bg-orange-500"
    },
    { 
      id: 6, 
      title: "Água Potável e Saneamento", 
      color: "bg-blue-400"
    },
    { 
      id: 7, 
      title: "Energia Limpa", 
      color: "bg-yellow-400"
    },
    { 
      id: 8, 
      title: "Trabalho Decente", 
      color: "bg-red-700"
    },
    { 
      id: 9, 
      title: "Inovação e Infraestrutura", 
      color: "bg-orange-600"
    },
    { 
      id: 10, 
      title: "Redução das Desigualdades", 
      color: "bg-pink-500"
    },
    { 
      id: 11, 
      title: "Cidades Sustentáveis", 
      color: "bg-yellow-600"
    },
    { 
      id: 12, 
      title: "Consumo Responsável", 
      color: "bg-yellow-700"
    },
    { 
      id: 13, 
      title: "Ação Contra Mudança Global do Clima", 
      color: "bg-green-600"
    },
    { 
      id: 14, 
      title: "Vida na Água", 
      color: "bg-blue-500"
    },
    { 
      id: 15, 
      title: "Vida Terrestre", 
      color: "bg-green-700"
    },
    { 
      id: 16, 
      title: "Paz, Justiça e Instituições Eficazes", 
      color: "bg-blue-600"
    },
    { 
      id: 17, 
      title: "Parcerias e Meios de Implementação", 
      color: "bg-blue-800"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            17 Objetivos de Desenvolvimento Sustentável
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma conecta empresas e ONGs baseada nos ODS da ONU para criar um impacto positivo no mundo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {sdgs.map((sdg) => (
            <Card key={sdg.id} className="hover:scale-105 transition-transform cursor-pointer border-0 shadow-md">
              <CardContent className="p-4">
                <div className={`${sdg.color} rounded-lg p-6 mb-3 text-center flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-white">{sdg.id}</span>
                </div>
                <h3 className="text-sm font-medium text-gray-900 text-center leading-tight">
                  {sdg.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SDGsSection;
