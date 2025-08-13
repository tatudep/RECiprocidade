import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/organisms/Header";
import { Button } from "../components/atoms/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/atoms/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/atoms/ui/tabs";
import { Badge } from "../components/atoms/ui/badge";
import { Input } from "../components/atoms/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/atoms/ui/select";
import { 
  Plus, Calendar, Users, Eye, Edit, Trash2, Search, Filter, 
  MapPin, FolderOpen, BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "../hooks/use-toast";

export default function DashboardPrincipal() {
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const initialTab = query.get("tab") || "overview";
  const [activeTab, setActiveTab] = useState(initialTab);

  // Keep URL in sync when tab changes
  useEffect(() => {
    const q = new URLSearchParams(location.search);
    if (activeTab) {
      q.set("tab", activeTab);
      navigate({ pathname: location.pathname, search: q.toString() }, { replace: true });
    }
  }, [activeTab]);

  // Estados do Dashboard
  const [projetos] = useState([
    {
      id: 1,
      titulo: "Reflorestamento Urbano",
      descricao: "Projeto para plantar árvores em áreas urbanas degradadas",
      categoria: "Meio Ambiente",
      dataCriacao: "2024-01-15",
      status: "Ativo",
      participantes: 25,
      ods: [13, 15]
    },
    {
      id: 2,
      titulo: "Educação Digital para Idosos",
      descricao: "Ensino de tecnologia básica para terceira idade",
      categoria: "Educação",
      dataCriacao: "2024-02-03",
      status: "Concluído",
      participantes: 18,
      ods: [4, 10]
    },
    {
      id: 3,
      titulo: "Horta Comunitária",
      descricao: "Criação de hortas em comunidades carentes",
      categoria: "Alimentação",
      dataCriacao: "2024-02-20",
      status: "Em Andamento",
      participantes: 42,
      ods: [2, 11]
    }
  ]);

  // Estados dos Projetos Públicos
  const [projetosPublicos] = useState([
    {
      id: 4,
      titulo: "Energia Solar Comunitária",
      descricao: "Instalação de painéis solares em centros comunitários para reduzir custos de energia.",
      categoria: "Energia",
      autor: "Solar Para Todos",
      dataCriacao: "2024-02-25",
      status: "Ativo",
      participantes: 12,
      vagas: 8,
      localizacao: "Recife, PE",
      ods: [7, 13]
    },
    {
      id: 5,
      titulo: "Capacitação Profissional Jovens",
      descricao: "Programa de capacitação profissional para jovens em situação de vulnerabilidade social.",
      categoria: "Educação",
      autor: "Fundação Futuro",
      dataCriacao: "2024-03-01",
      status: "Ativo",
      participantes: 35,
      vagas: 20,
      localizacao: "Salvador, BA",
      ods: [8, 10]
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo": return "bg-green-100 text-green-800";
      case "Em Andamento": return "bg-blue-100 text-blue-800";
      case "Concluído": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Gerencie seus projetos e explore oportunidades</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="flex justify-center gap-8 w-full mb-6 bg-transparent border-none shadow-none">
            <TabsTrigger value="overview" className="flex flex-col items-center gap-1 px-6 py-2 rounded-md data-[state=active]:bg-green-100 data-[state=active]:text-green-800 transition-colors">
              <BarChart3 className="w-5 h-5 mb-1" />
              <span className="text-base font-medium">Visão Geral</span>
            </TabsTrigger>
            <TabsTrigger value="meus-projetos" className="flex flex-col items-center gap-1 px-6 py-2 rounded-md data-[state=active]:bg-green-100 data-[state=active]:text-green-800 transition-colors">
              <FolderOpen className="w-5 h-5 mb-1" />
              <span className="text-base font-medium">Meus Projetos</span>
            </TabsTrigger>
            <TabsTrigger value="explorar" className="flex flex-col items-center gap-1 px-6 py-2 rounded-md data-[state=active]:bg-green-100 data-[state=active]:text-green-800 transition-colors">
              <Search className="w-5 h-5 mb-1" />
              <span className="text-base font-medium">Explorar Projetos</span>
            </TabsTrigger>
          </TabsList>

          {/* Visão Geral */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Meus Projetos</p>
                      <p className="text-2xl font-bold text-gray-900">{projetos.length}</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FolderOpen className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Projetos Ativos</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {projetos.filter(p => p.status === "Ativo" || p.status === "Em Andamento").length}
                      </p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <Calendar className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Participantes Total</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {projetos.reduce((total, projeto) => total + projeto.participantes, 0)}
                      </p>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Projetos Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {projetos.slice(0, 3).map((projeto) => (
                      <div key={projeto.id} className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <p className="font-medium">{projeto.titulo}</p>
                          <p className="text-sm text-gray-600">{projeto.categoria}</p>
                        </div>
                        <Badge className={getStatusColor(projeto.status)}>
                          {projeto.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ações Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/criar-projeto">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Plus className="w-4 h-4 mr-2" />
                      Criar Novo Projeto
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setActiveTab("explorar")}
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Explorar Projetos
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Meus Projetos */}
          <TabsContent value="meus-projetos" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Meus Projetos</h2>
                <p className="text-gray-600">Gerencie seus projetos de sustentabilidade</p>
              </div>
              <Link to="/criar-projeto">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Projeto
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projetos.map((projeto) => (
                <Card key={projeto.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {projeto.titulo}
                      </CardTitle>
                      <Badge className={getStatusColor(projeto.status)}>
                        {projeto.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm">
                      {projeto.descricao}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(projeto.dataCriacao).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        {projeto.participantes} participantes
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {projeto.ods.map((ods) => (
                          <Badge key={ods} variant="outline" className="text-xs">
                            ODS {ods}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-1" />
                        Ver
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="w-4 h-4 mr-1" />
                        Editar
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Explorar Projetos */}
          <TabsContent value="explorar" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Explorar Projetos</h2>
              <p className="text-gray-600">Descubra e participe de projetos de sustentabilidade</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Buscar projetos..."
                      className="pl-10"
                    />
                  </div>
                  
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="meio-ambiente">Meio Ambiente</SelectItem>
                      <SelectItem value="educacao">Educação</SelectItem>
                      <SelectItem value="energia">Energia</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Mais Filtros
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projetosPublicos.map((projeto) => (
                <Card key={projeto.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {projeto.titulo}
                      </CardTitle>
                      <Badge className={getStatusColor(projeto.status)}>
                        {projeto.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">por {projeto.autor}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm">
                      {projeto.descricao}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        {projeto.localizacao}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        {projeto.participantes} participantes • {projeto.vagas} vagas
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {projeto.ods.map((ods) => (
                          <Badge key={ods} variant="outline" className="text-xs">
                            ODS {ods}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Link to={`/projeto/${projeto.id}`}>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <Eye className="w-4 h-4 mr-2" />
                        Ver Detalhes
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Perfil removido */}
        </Tabs>
      </div>
    </div>
  );
}