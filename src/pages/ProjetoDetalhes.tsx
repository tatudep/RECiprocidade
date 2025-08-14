import Header from '@/components/organisms/Header';
import { Badge } from '@/components/atoms/ui/badge';
import { Button } from '@/components/atoms/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/atoms/ui/card';
import { Calendar, MapPin, Users, ArrowLeft, Edit } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useProjects } from '@/contexts/ProjectsContext';

export default function ProjetoDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getById } = useProjects();
  const projectId = Number(id);
  const { project, isMine } = getById(projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
          <div className="container mx-auto px-4 pt-24 pb-12">
          <p className="text-gray-600">Projeto não encontrado.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
        <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" size="sm" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">{project.titulo}</h1>
          <Badge className="ml-auto">{project.categoria}</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Descrição</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{project.descricao}</p>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Criado em {new Date(project.dataCriacao).toLocaleDateString()}
                </div>
                {project.localizacao && (
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.localizacao}
                  </div>
                )}
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {project.participantes} participantes
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.ods.map((o) => (
                  <Badge key={o} variant="outline">ODS {o}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {isMine && (
              <Link to={`/projetos/${project.id}/editar`}>
                <Button className="w-full">
                  <Edit className="w-4 h-4 mr-2" />
                  Editar Projeto
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
