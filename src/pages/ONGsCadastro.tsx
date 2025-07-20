import React, { useState } from 'react';
import { Button } from '@/components/atoms/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/atoms/ui/card';
import { Input } from '@/components/atoms/ui/input';
import { Label } from '@/components/atoms/ui/label';
import { Textarea } from '@/components/atoms/ui/textarea';
import { Checkbox } from '@/components/atoms/ui/checkbox';
import Header from '@/components/organisms/Header';
import { ArrowLeft, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface OngFormData {
  nome: string;
  cnpj: string;
  areaAtuacao: string;
  anoFundacao: string | number;
  missao: string;
  principaisProjetos: string;
  website: string;
  telefone: string;
  enderecoCompleto: string;
  odsTrabalhados: string[];
  principaisNecessidades: string;
  numeroBeneficiarios: string | number;
  numeroVoluntarios: string | number;
}

const API_BASE_URL = 'http://localhost:3000';

const ONGsCadastro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<OngFormData>({
    nome: '', cnpj: '', areaAtuacao: '', anoFundacao: '', missao: '',
    principaisProjetos: '', website: '', telefone: '', enderecoCompleto: '',
    odsTrabalhados: [],
    principaisNecessidades: '', numeroBeneficiarios: '',
    numeroVoluntarios: ''
  });

  const sdgsList = [
    "1. Erradicação da Pobreza", "2. Fome Zero", "3. Saúde e Bem-Estar", "4. Educação de Qualidade",
    "5. Igualdade de Gênero", "6. Água Potável e Saneamento", "7. Energia Limpa", "8. Trabalho Decente",
    "9. Inovação e Infraestrutura", "10. Redução das Desigualdades", "11. Cidades Sustentáveis",
    "12. Consumo Responsável", "13. Ação Climática", "14. Vida na Água", "15. Vida Terrestre",
    "16. Paz e Justiça", "17. Parcerias"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleODSChange = (ods: string, checked: boolean) => {
    setFormData(prevData => {
      if (checked) {
        return { ...prevData, odsTrabalhados: [...prevData.odsTrabalhados, ods] };
      } else {
        return { ...prevData, odsTrabalhados: prevData.odsTrabalhados.filter(item => item !== ods) };
      }
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const usuarioIdFixoParaTeste = "687d6666f7f23a4c36e65f39"; // SUBSTITUA PELO ID REAL DO USUARIO

    const dataToSend = {
      ...formData,
      anoFundacao: parseInt(formData.anoFundacao as string),
      numeroBeneficiarios: formData.numeroBeneficiarios ? parseInt(formData.numeroBeneficiarios as string) : null,
      numeroVoluntarios: formData.numeroVoluntarios ? parseInt(formData.numeroVoluntarios as string) : null,
      usuarioId: usuarioIdFixoParaTeste 
    };

    try {
      const response = await fetch(`${API_BASE_URL}/ongs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        toast.success("ONG cadastrada com sucesso!");
        setFormData({
          nome: '', cnpj: '', areaAtuacao: '', anoFundacao: '', missao: '',
          principaisProjetos: '', website: '', telefone: '', enderecoCompleto: '',
          odsTrabalhados: [], principaisNecessidades: '', numeroBeneficiarios: '',
          numeroVoluntarios: ''
        });
        navigate('/ongs');
      } else {
        const errorData = await response.json();
        toast.error(`Erro ao cadastrar ONG: ${errorData.message || response.statusText}`);
        console.error('Erro detalhado:', errorData);
      }
    } catch (error) {
      toast.error("Erro de conexão ou inesperado ao cadastrar ONG.");
      console.error('Erro de rede/inesperado:', error);
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

        <form onSubmit={handleSubmit} className="shadow-lg">
          <CardHeader>
            <CardTitle>Informações da ONG</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="nome">Nome da ONG *</Label>
                <Input
                  id="nome"
                  placeholder="Ex: Instituto Meio Ambiente"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="cnpj">CNPJ *</Label>
                <Input id="cnpj" placeholder="00.000.000/0000-00" value={formData.cnpj} onChange={handleChange} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="areaAtuacao">Área de Atuação *</Label>
                <Input id="areaAtuacao" placeholder="Ex: Meio Ambiente, Educação, Saúde..." value={formData.areaAtuacao} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="anoFundacao">Ano de Fundação *</Label>
                <Input id="anoFundacao" type="number" placeholder="Ex: 2010" value={formData.anoFundacao} onChange={handleChange} />
              </div>
            </div>

            <div>
              <Label htmlFor="missao">Missão da ONG *</Label>
              <Textarea 
                id="missao" 
                placeholder="Descreva a missão, visão e principais objetivos da sua organização..."
                rows={4}
                value={formData.missao}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="principaisProjetos">Principais Projetos e Atividades *</Label>
              <Textarea 
                id="principaisProjetos" 
                placeholder="Conte-nos sobre os projetos que sua ONG desenvolve e os resultados alcançados..."
                rows={4}
                value={formData.principaisProjetos}
                onChange={handleChange}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="website">Website</Label>
                <Input id="website" placeholder="https://www.minhaong.org.br" value={formData.website} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="telefone">Telefone *</Label>
                <Input id="telefone" placeholder="(11) 99999-9999" value={formData.telefone} onChange={handleChange} />
              </div>
            </div>

            <div>
              <Label htmlFor="enderecoCompleto">Endereço Completo *</Label>
              <Input id="enderecoCompleto" placeholder="Rua, número, bairro, cidade, estado, CEP" value={formData.enderecoCompleto} onChange={handleChange} />
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
                      checked={formData.odsTrabalhados.includes(sdgsList[index])}
                      onCheckedChange={(checked: boolean) => handleODSChange(sdgsList[index], checked)}
                    />
                    <Label htmlFor={`ods-${index}`} className="text-sm">
                      {ods}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="principaisNecessidades">Principais Necessidades de Apoio *</Label>
              <Textarea 
                id="principaisNecessidades" 
                placeholder="Descreva que tipo de apoio sua ONG precisa: financeiro, voluntariado, expertise, equipamentos, etc..."
                rows={3}
                value={formData.principaisNecessidades}
                onChange={handleChange}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="numeroBeneficiarios">Número de Beneficiários</Label>
                <Input id="numeroBeneficiarios" type="number" placeholder="Ex: 500" value={formData.numeroBeneficiarios} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="numeroVoluntarios">Número de Voluntários</Label>
                <Input id="numeroVoluntarios" type="number" placeholder="Ex: 50" value={formData.numeroVoluntarios} onChange={handleChange} />
              </div>
            </div>

            <div className="pt-6 border-t">
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                Cadastrar ONG
              </Button>
            </div>
          </CardContent>
        </form>
      </div>
    </div>
  );
};

export default ONGsCadastro;