import React, { useState } from 'react';
import { Button } from '@/components/atoms/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/atoms/ui/card';
import { Input } from '@/components/atoms/ui/input';
import { Label } from '@/components/atoms/ui/label';
import { Textarea } from '@/components/atoms/ui/textarea';
import { Checkbox } from '@/components/atoms/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/atoms/ui/select';
import Header from '@/components/organisms/Header';
import { ArrowLeft, Building2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface EmpresaFormData {
  nome: string;
  cnpj: string;
  setorAtuacao: string;
  porteEmpresa: string;
  descricao: string;
  website: string;
  telefone: string;
  enderecoCompleto: string;
  odsInteresse: string[];
  porqueApoiarOngs: string;
}

const API_BASE_URL = 'http://localhost:3000';

const EmpresasCadastro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<EmpresaFormData>({
    nome: '', cnpj: '', setorAtuacao: '', porteEmpresa: '', descricao: '',
    website: '', telefone: '', enderecoCompleto: '',
    odsInteresse: [],
    porqueApoiarOngs: ''
  });

  const sdgsList = [
    "1. Erradicação da Pobreza", "2. Fome Zero", "3. Saúde e Bem-Estar", "4. Educação de Qualidade",
    "5. Igualdade de Gênero", "6. Água Potável e Saneamento", "7. Energia Limpa", "8. Trabalho Decente",
    "9. Inovação e Infraestrutura", "10. Redução das Desigualdades", "11. Cidades Sustentáveis",
    "12. Consumo Responsável", "13. Ação Climática", "14. Vida na Água", "15. Vida Terrestre",
    "16. Paz e Justiça", "17. Parcerias"
  ];

  const porteEmpresaOptions = ["Microempresa", "Pequena", "Média", "Grande"];

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
        return { ...prevData, odsInteresse: [...prevData.odsInteresse, ods] };
      } else {
        return { ...prevData, odsInteresse: prevData.odsInteresse.filter(item => item !== ods) };
      }
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData(prevData => ({
      ...prevData,
      porteEmpresa: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const usuarioIdFixoParaTeste = "687d6666f7f23a4c36e65f39"; // SUBSTITUA PELO ID REAL DO USUARIO

    const dataToSend = {
      ...formData,
      usuarioId: usuarioIdFixoParaTeste
    };

    try {
      const response = await fetch(`${API_BASE_URL}/empresas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        toast.success("Empresa cadastrada com sucesso!");
        setFormData({
          nome: '', cnpj: '', setorAtuacao: '', porteEmpresa: '', descricao: '',
          website: '', telefone: '', enderecoCompleto: '',
          odsInteresse: [],
          porqueApoiarOngs: ''
        });
        navigate('/empresas');
      } else {
        const errorData = await response.json();
        toast.error(`Erro ao cadastrar Empresa: ${errorData.message || response.statusText}`);
        console.error('Erro detalhado:', errorData);
      }
    } catch (error) {
      toast.error("Erro de conexão ou inesperado ao cadastrar Empresa.");
      console.error('Erro de rede/inesperado:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao início
          </Link>
          
          <div className="flex items-center mb-2">
            <Building2 className="h-8 w-8 text-indigo-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Cadastro de Empresa</h1>
          </div>
          <p className="text-gray-600">
            Encontre ONGs para apoiar e conecte-se com projetos de impacto social.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="shadow-lg">
          <CardHeader>
            <CardTitle>Informações da Empresa</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="nome">Nome da Empresa *</Label>
                <Input id="nome" placeholder="Ex: Tech Solutions S.A." value={formData.nome} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="cnpj">CNPJ *</Label>
                <Input id="cnpj" placeholder="00.000.000/0000-00" value={formData.cnpj} onChange={handleChange} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="setorAtuacao">Setor de Atuação *</Label>
                <Input id="setorAtuacao" placeholder="Ex: Tecnologia, Alimentício, Saúde..." value={formData.setorAtuacao} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="porteEmpresa">Porte da Empresa *</Label>
                <Select value={formData.porteEmpresa} onValueChange={handleSelectChange}>
                  <SelectTrigger id="porteEmpresa">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {porteEmpresaOptions.map(option => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="descricao">Descrição da Empresa *</Label>
              <Textarea 
                id="descricao" 
                placeholder="Conte-nos sobre sua empresa, seus valores e o que a torna única..."
                rows={4}
                value={formData.descricao}
                onChange={handleChange}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="website">Website</Label>
                <Input id="website" placeholder="https://www.minhaempresa.com.br" value={formData.website} onChange={handleChange} />
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
              <Label className="text-base font-semibold">ODS de Interesse *</Label>
              <p className="text-sm text-gray-600 mb-4">
                Selecione os Objetivos de Desenvolvimento Sustentável que sua empresa tem interesse em apoiar:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {sdgsList.map((ods, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`ods-${index}`}
                      checked={formData.odsInteresse.includes(sdgsList[index])}
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
              <Label htmlFor="porqueApoiarOngs">Por que sua empresa quer apoiar ONGs? *</Label>
              <Textarea 
                id="porqueApoiarOngs" 
                placeholder="Compartilhe sua motivação e expectativas para as parcerias..."
                rows={3}
                value={formData.porqueApoiarOngs}
                onChange={handleChange}
              />
            </div>

            <div className="pt-6 border-t">
              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-lg py-3">
                Cadastrar Empresa
              </Button>
            </div>
          </CardContent>
        </form>
      </div>
    </div>
  );
};

export default EmpresasCadastro;