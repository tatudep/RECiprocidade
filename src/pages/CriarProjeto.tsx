import { useState } from "react";
import Header from "../components/organisms/Header";
import { Button } from "../components/atoms/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/atoms/ui/card";
import { Input } from "../components/atoms/ui/input";
import { Textarea } from "../components/atoms/ui/textarea";
import { Label } from "../components/atoms/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/atoms/ui/select";
import { Checkbox } from "../components/atoms/ui/checkbox";
import { ArrowLeft, Save } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../hooks/use-toast";
import { useProjects } from "../contexts/ProjectsContext";

export default function CriarProjeto() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { addProject } = useProjects();
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    categoria: "",
    objetivos: "",
    metodologia: "",
    publico_alvo: "",
    recursos_necessarios: "",
    cronograma: "",
    impacto_esperado: "",
    localizacao: "",
    ods_selecionados: [] as number[]
  });

  const categorias = [
    "Meio Ambiente",
    "Educação",
    "Saúde",
    "Tecnologia",
    "Alimentação",
    "Energia",
    "Comunidade",
    "Economia",
    "Infraestrutura"
  ];

  const ods = [
    { id: 1, titulo: "Erradicação da Pobreza" },
    { id: 2, titulo: "Fome Zero" },
    { id: 3, titulo: "Saúde e Bem-Estar" },
    { id: 4, titulo: "Educação de Qualidade" },
    { id: 5, titulo: "Igualdade de Gênero" },
    { id: 6, titulo: "Água Potável e Saneamento" },
    { id: 7, titulo: "Energia Limpa" },
    { id: 8, titulo: "Trabalho Decente" },
    { id: 9, titulo: "Inovação e Infraestrutura" },
    { id: 10, titulo: "Redução das Desigualdades" },
    { id: 11, titulo: "Cidades Sustentáveis" },
    { id: 12, titulo: "Consumo Responsável" },
    { id: 13, titulo: "Ação Contra Mudança Global do Clima" },
    { id: 14, titulo: "Vida na Água" },
    { id: 15, titulo: "Vida Terrestre" },
    { id: 16, titulo: "Paz, Justiça e Instituições Eficazes" },
    { id: 17, titulo: "Parcerias e Meios de Implementação" }
  ];

  const handleOdsChange = (odsId: number, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      ods_selecionados: checked 
        ? [...prev.ods_selecionados, odsId]
        : prev.ods_selecionados.filter(id => id !== odsId)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.titulo || !formData.descricao || !formData.categoria) {
      toast({
        title: "Erro",
        description: "Por favor, preencha os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    const created = addProject({
      titulo: formData.titulo,
      descricao: formData.descricao,
      categoria: formData.categoria,
      localizacao: formData.localizacao,
      ods: formData.ods_selecionados,
    });

    toast({
      title: "Projeto criado!",
      description: "Seu projeto foi criado com sucesso.",
    });

    navigate(`/projetos/${created.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
  <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Criar Novo Projeto</h1>
            <p className="text-gray-600">Compartilhe sua ideia de sustentabilidade</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Básicas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="titulo">Título do Projeto *</Label>
                    <Input
                      id="titulo"
                      value={formData.titulo}
                      onChange={(e) => setFormData(prev => ({ ...prev, titulo: e.target.value }))}
                      placeholder="Digite o título do seu projeto"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="categoria">Categoria *</Label>
                    <Select value={formData.categoria} onValueChange={(value) => setFormData(prev => ({ ...prev, categoria: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        {categorias.map(categoria => (
                          <SelectItem key={categoria} value={categoria}>
                            {categoria}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="descricao">Descrição *</Label>
                    <Textarea
                      id="descricao"
                      value={formData.descricao}
                      onChange={(e) => setFormData(prev => ({ ...prev, descricao: e.target.value }))}
                      placeholder="Descreva seu projeto de forma clara e objetiva"
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="localizacao">Localização</Label>
                    <Input
                      id="localizacao"
                      value={formData.localizacao}
                      onChange={(e) => setFormData(prev => ({ ...prev, localizacao: e.target.value }))}
                      placeholder="Cidade, Estado ou região onde será realizado"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Detalhes do Projeto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="objetivos">Objetivos</Label>
                    <Textarea
                      id="objetivos"
                      value={formData.objetivos}
                      onChange={(e) => setFormData(prev => ({ ...prev, objetivos: e.target.value }))}
                      placeholder="Quais são os objetivos específicos do projeto?"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="metodologia">Metodologia</Label>
                    <Textarea
                      id="metodologia"
                      value={formData.metodologia}
                      onChange={(e) => setFormData(prev => ({ ...prev, metodologia: e.target.value }))}
                      placeholder="Como o projeto será executado?"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="publico_alvo">Público Alvo</Label>
                    <Input
                      id="publico_alvo"
                      value={formData.publico_alvo}
                      onChange={(e) => setFormData(prev => ({ ...prev, publico_alvo: e.target.value }))}
                      placeholder="Quem será beneficiado pelo projeto?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="recursos_necessarios">Recursos Necessários</Label>
                    <Textarea
                      id="recursos_necessarios"
                      value={formData.recursos_necessarios}
                      onChange={(e) => setFormData(prev => ({ ...prev, recursos_necessarios: e.target.value }))}
                      placeholder="Materiais, pessoas, financiamento, etc."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="cronograma">Cronograma</Label>
                    <Textarea
                      id="cronograma"
                      value={formData.cronograma}
                      onChange={(e) => setFormData(prev => ({ ...prev, cronograma: e.target.value }))}
                      placeholder="Quando e como o projeto será realizado?"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="impacto_esperado">Impacto Esperado</Label>
                    <Textarea
                      id="impacto_esperado"
                      value={formData.impacto_esperado}
                      onChange={(e) => setFormData(prev => ({ ...prev, impacto_esperado: e.target.value }))}
                      placeholder="Que mudanças positivas espera alcançar?"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>ODS Relacionados</CardTitle>
                  <p className="text-sm text-gray-600">
                    Selecione os Objetivos de Desenvolvimento Sustentável relacionados ao seu projeto
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {ods.map((objetivo) => (
                      <div key={objetivo.id} className="flex items-start space-x-2">
                        <Checkbox
                          id={`ods-${objetivo.id}`}
                          checked={formData.ods_selecionados.includes(objetivo.id)}
                          onCheckedChange={(checked) => handleOdsChange(objetivo.id, checked as boolean)}
                        />
                        <label
                          htmlFor={`ods-${objetivo.id}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          <span className="font-semibold">{objetivo.id}.</span> {objetivo.titulo}
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  <Save className="w-4 h-4 mr-2" />
                  Criar Projeto
                </Button>
                <Link to="/dashboard">
                  <Button variant="outline" className="w-full">
                    Cancelar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}