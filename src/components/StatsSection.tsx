import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: "150+", label: "ONGs Apoiadas" },
    { value: "250+", label: "Empresas Parceiras" },
    { value: "500+", label: "Projetos Financiados" },
    { value: "1M+", label: "Vidas Transformadas" }
  ];

  return (
    <section className="py-16 px-4 bg-green-600 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Impacto da RECiprocidade
          </h2>
          <p className="text-green-100 text-lg">
            Veja como estamos transformando vidas através da colaboração
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-green-100 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
