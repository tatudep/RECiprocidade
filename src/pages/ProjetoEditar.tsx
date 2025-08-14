import { useEffect, useState } from 'react';
import Header from '@/components/organisms/Header';
import { Button } from '@/components/atoms/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/atoms/ui/card';
import { Input } from '@/components/atoms/ui/input';
import { Textarea } from '@/components/atoms/ui/textarea';
import { Label } from '@/components/atoms/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/atoms/ui/select';
import { ArrowLeft, Save, Minus, Plus } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProjects } from '@/contexts/ProjectsContext';
import { useToast } from '@/hooks/use-toast';

export default function ProjetoEditar() {
  const { id } = useParams();
  const projectId = Number(id);
  const navigate = useNavigate();
  const { getById, updateProject } = useProjects();
  const { toast } = useToast();
  const { project, isMine } = getById(projectId);

  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    categoria: '',
    localizacao: '',
    status: 'Ativo' as 'Ativo' | 'Em Andamento' | 'Concluído',
  participantes: 0,
  });

  useEffect(() => {
    if (project) {
      setFormData({
        titulo: project.titulo,
        descricao: project.descricao,
        categoria: project.categoria,
        localizacao: project.localizacao ?? '',
        status: project.status,
  participantes: project.participantes ?? 0,
      });
    }
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <p className="text-gray-600">Projeto não encontrado.</p>
        </div>
      </div>
    );
  }

  if (!isMine) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <p className="text-gray-600">Você não tem permissão para editar este projeto.</p>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProject(projectId, formData);
    toast({ title: 'Projeto atualizado!', description: 'Alterações salvas com sucesso.' });
    navigate(`/projetos/${projectId}`);
  };

  const categorias = [
    'Meio Ambiente',
    'Educação',
    'Saúde',
    'Tecnologia',
    'Alimentação',
    'Energia',
    'Comunidade',
    'Economia',
    'Infraestrutura',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
  <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="sm" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Editar Projeto</h1>
            <p className="text-gray-600">Atualize as informações do seu projeto</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>Informações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="titulo">Título *</Label>
                <Input id="titulo" value={formData.titulo} onChange={(e) => setFormData({ ...formData, titulo: e.target.value })} required />
              </div>
              <div>
                <Label htmlFor="categoria">Categoria *</Label>
                <Select value={formData.categoria} onValueChange={(v) => setFormData({ ...formData, categoria: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categorias.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="descricao">Descrição *</Label>
                <Textarea id="descricao" value={formData.descricao} onChange={(e) => setFormData({ ...formData, descricao: e.target.value })} rows={4} required />
              </div>
              <div>
                <Label htmlFor="localizacao">Localização</Label>
                <Input id="localizacao" value={formData.localizacao} onChange={(e) => setFormData({ ...formData, localizacao: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <Select value={formData.status} onValueChange={(v) => setFormData({ ...formData, status: v as any })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ativo">Ativo</SelectItem>
                    <SelectItem value="Em Andamento">Em Andamento</SelectItem>
                    <SelectItem value="Concluído">Concluído</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="participantes">Participantes</Label>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setFormData({ ...formData, participantes: Math.max(0, (formData.participantes ?? 0) - 1) })}
                    aria-label="Diminuir participantes"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <Input
                    id="participantes"
                    type="number"
                    min={0}
                    value={formData.participantes}
                    onChange={(e) => {
                      const v = parseInt(e.target.value, 10);
                      setFormData({ ...formData, participantes: isNaN(v) ? 0 : Math.max(0, v) });
                    }}
                    className="w-28 text-center"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setFormData({ ...formData, participantes: (formData.participantes ?? 0) + 1 })}
                    aria-label="Aumentar participantes"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <Button type="submit" className="bg-green-600 hover:bg-green-700">
              <Save className="w-4 h-4 mr-2" />
              Salvar Alterações
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
