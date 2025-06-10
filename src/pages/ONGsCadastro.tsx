import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/components/Header';
import { ArrowLeft, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ONGsCadastro = () => {
  const [selectedODS, setSelectedODS] = useState([]);

  const sdgsList = [
    "Erradicação da Pobreza", "Fome Zero", "Saúde e Bem-Estar", "Educação de Qualidade",
    "Igualdade de Gênero", "Água Potável e Saneamento", "Energia Limpa", "Trabalho Decente",
    "Inovação e Infraestrutura", "Redução das Desigualdades", "Cidades Sustentáveis",
    "Consumo Responsável", "Ação Climática", "Vida na Água", "Vida Terrestre",
    "Paz e Justiça", "Parcerias"
  ];

  const handleODSChange = (ods, checked) => {
    if (checked) {
      setSelectedODS([...selectedODS, ods]);
    } else {
      setSelectedODS(selectedODS.filter(item => item !== ods));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao início
          </Link>
          
          <div className="flex items-center mb-2">
            <Heart className="h-8 w-8 text-green-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Cadastro de ONG</h1>
          </div>
          <p className="text-gray-600">
            Conecte sua organização com empresas que compartilham dos mesmos valores.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Informações da ONG</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="nomeONG">Nome da ONG *</Label>
                <Input id="nomeONG" placeholder="Ex: Instituto Meio Ambiente" />
              </div>
              <div>
                <Label htmlFor="cnpj">CNPJ *</Label>
                <Input id="cnpj" placeholder="00.000.000/0000-00" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="areaAtuacao">Área de Atuação *</Label>
                <Input id="areaAtuacao" placeholder="Ex: Meio Ambiente, Educação, Saúde..." />
              </div>
              <div>
                <Label htmlFor="anoFundacao">Ano de Fundação *</Label>
                <Input id="anoFundacao" type="number" placeholder="Ex: 2010" />
              </div>
            </div>

            <div>
              <Label htmlFor="missao">Missão da ONG *</Label>
              <Textarea 
                id="missao" 
                placeholder="Descreva a missão, visão e principais objetivos da sua organização..."
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="projetos">Principais Projetos e Atividades *</Label>
              <Textarea 
                id="projetos" 
                placeholder="Conte-nos sobre os projetos que sua ONG desenvolve e os resultados alcançados..."
                rows={4}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="website">Website</Label>
                <Input id="website" placeholder="https://www.minhaong.org.br" />
              </div>
              <div>
                <Label htmlFor="telefone">Telefone *</Label>
                <Input id="telefone" placeholder="(11) 99999-9999" />
              </div>
            </div>

            <div>
              <Label htmlFor="endereco">Endereço Completo *</Label>
              <Input id="endereco" placeholder="Rua, número, bairro, cidade, estado, CEP" />
            </div>

            <div>
              <Label className="text-base font-semibold">ODS Trabalhados *</Label>
              <p className="text-sm text-gray-600 mb-4">
                Selecione os Objetivos de Desenvolvimento Sustentável que sua ONG atualmente trabalha:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {sdgsList.map((ods, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`ods-${index}`}
                      onCheckedChange={(checked) => handleODSChange(ods, checked)}
                    />
                    <Label htmlFor={`ods-${index}`} className="text-sm">
                      {index + 1}. {ods}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="necessidades">Principais Necessidades de Apoio *</Label>
              <Textarea 
                id="necessidades" 
                placeholder="Descreva que tipo de apoio sua ONG precisa: financeiro, voluntariado, expertise, equipamentos, etc..."
                rows={3}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="beneficiarios">Número de Beneficiários</Label>
                <Input id="beneficiarios" type="number" placeholder="Ex: 500" />
              </div>
              <div>
                <Label htmlFor="voluntarios">Número de Voluntários</Label>
                <Input id="voluntarios" type="number" placeholder="Ex: 50" />
              </div>
            </div>

            <div className="pt-6 border-t">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                Cadastrar ONG
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ONGsCadastro;