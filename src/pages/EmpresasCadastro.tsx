import React, { useState } from 'react';
import { Button } from '@/components/atoms/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/atoms/ui/card';
import { Input } from '@/components/atoms/ui/input';
import { Label } from '@/components/atoms/ui/label';
import { Textarea } from '@/components/atoms/ui/textarea';
import { Checkbox } from '@/components/atoms/ui/checkbox';
import Header from '@/components/organisms/Header';
import { ArrowLeft, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmpresasCadastro = () => {
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
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao início
          </Link>
          
          <div className="flex items-center mb-2">
            <Building2 className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Cadastro de Empresa</h1>
          </div>
          <p className="text-gray-600">
            Junte-se à nossa rede de empresas comprometidas com os ODS.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Informações da Empresa</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="nomeEmpresa">Nome da Empresa *</Label>
                <Input id="nomeEmpresa" placeholder="Ex: Minha Empresa Ltda" />
              </div>
              <div>
                <Label htmlFor="cnpj">CNPJ *</Label>
                <Input id="cnpj" placeholder="00.000.000/0000-00" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="setor">Setor de Atuação *</Label>
                <Input id="setor" placeholder="Ex: Tecnologia, Varejo, Saúde..." />
              </div>
              <div>
                <Label htmlFor="porte">Porte da Empresa *</Label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="">Selecione</option>
                  <option value="micro">Microempresa</option>
                  <option value="pequena">Pequena</option>
                  <option value="media">Média</option>
                  <option value="grande">Grande</option>
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="descricao">Descrição da Empresa *</Label>
              <Textarea 
                id="descricao" 
                placeholder="Conte-nos sobre sua empresa, missão, visão e valores..."
                rows={4}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="website">Website</Label>
                <Input id="website" placeholder="https://www.minhaempresa.com.br" />
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
              <Label className="text-base font-semibold">ODS de Interesse *</Label>
              <p className="text-sm text-gray-600 mb-4">
                Selecione os Objetivos de Desenvolvimento Sustentável que sua empresa tem interesse em apoiar:
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
              <Label htmlFor="motivacao">Por que sua empresa quer apoiar ONGs? *</Label>
              <Textarea 
                id="motivacao" 
                placeholder="Compartilhe a motivação da sua empresa para apoiar causas sociais e ambientais..."
                rows={3}
              />
            </div>

            <div className="pt-6 border-t">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                Cadastrar Empresa
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmpresasCadastro;
