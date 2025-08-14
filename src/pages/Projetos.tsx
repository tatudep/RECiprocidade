import { useMemo, useState } from "react";
import Header from "../components/organisms/Header";
import { Button } from "../components/atoms/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/atoms/ui/card";
import { Badge } from "../components/atoms/ui/badge";
import { Input } from "../components/atoms/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/atoms/ui/select";
import { Calendar, Users, MapPin, Search, Filter, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/atoms/ui/dialog";
import { Link } from "react-router-dom";

export default function Projetos() {
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("");
  const [busca, setBusca] = useState("");
  const [odsSelecionadas, setOdsSelecionadas] = useState<number[]>([]);
  const [localizacao, setLocalizacao] = useState("");
  const [dataDe, setDataDe] = useState<string>("");
  const [dataAte, setDataAte] = useState<string>("");
  const [openFiltros, setOpenFiltros] = useState(false);

  const [projetos] = useState([
    {
      id: 1,
      titulo: "Reflorestamento Urbano",
      descricao: "Projeto para plantar árvores em áreas urbanas degradadas, melhorando a qualidade do ar e criando espaços verdes para a comunidade.",
      categoria: "Meio Ambiente",
      autor: "EcoTech Solutions",
      dataCriacao: "2024-01-15",
      status: "Ativo",
      participantes: 25,
      vagas: 10,
      localizacao: "São Paulo, SP",
      ods: [13, 15],
      imagem: "/placeholder.svg"
    },
    {
      id: 2,
      titulo: "Educação Digital para Idosos",
      descricao: "Ensino de tecnologia básica para terceira idade, incluindo uso de smartphones, computadores e internet.",
      categoria: "Educação",
      autor: "Instituto Conecta",
      dataCriacao: "2024-02-03",
      status: "Ativo",
      participantes: 18,
      vagas: 5,
      localizacao: "Rio de Janeiro, RJ",
      ods: [4, 10],
      imagem: "/placeholder.svg"
    },
    {
      id: 3,
      titulo: "Horta Comunitária Orgânica",
      descricao: "Criação de hortas em comunidades carentes para promover alimentação saudável e sustentável.",
      categoria: "Alimentação",
      autor: "ONG Verde Vida",
      dataCriacao: "2024-02-20",
      status: "Ativo",
      participantes: 42,
      vagas: 15,
      localizacao: "Belo Horizonte, MG",
      ods: [2, 11],
      imagem: "/placeholder.svg"
    },
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
      ods: [7, 13],
      imagem: "/placeholder.svg"
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
      ods: [8, 10],
      imagem: "/placeholder.svg"
    },
    {
      id: 6,
      titulo: "Reciclagem Inteligente",
      descricao: "Sistema de coleta seletiva inteligente com pontos de coleta automatizados.",
      categoria: "Meio Ambiente",
      autor: "Reciclatech",
      dataCriacao: "2024-03-05",
      status: "Ativo",
      participantes: 28,
      vagas: 12,
      localizacao: "Curitiba, PR",
      ods: [12, 13],
      imagem: "/placeholder.svg"
    }
  ]);

  const categorias = ["Meio Ambiente", "Educação", "Saúde", "Tecnologia", "Alimentação", "Energia", "Comunidade"];
  const statusOptions = ["Ativo", "Em Andamento", "Concluído"];

  const projetosFiltrados = useMemo(() => projetos.filter(projeto => {
    const matchBusca = projeto.titulo.toLowerCase().includes(busca.toLowerCase()) ||
                     projeto.descricao.toLowerCase().includes(busca.toLowerCase());
    const matchCategoria = !filtroCategoria || projeto.categoria === filtroCategoria;
    const matchStatus = !filtroStatus || projeto.status === filtroStatus;
    const matchODS = odsSelecionadas.length === 0 || odsSelecionadas.every(o => projeto.ods.includes(o));
    const matchLocal = !localizacao || (projeto.localizacao?.toLowerCase().includes(localizacao.toLowerCase()));
    const matchDataDe = !dataDe || (projeto.dataCriacao >= dataDe);
    const matchDataAte = !dataAte || (projeto.dataCriacao <= dataAte);
    
    return matchBusca && matchCategoria && matchStatus && matchODS && matchLocal && matchDataDe && matchDataAte;
  }), [projetos, busca, filtroCategoria, filtroStatus, odsSelecionadas, localizacao, dataDe, dataAte]);

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
      
  <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Projetos em Aberto</h1>
          <p className="text-gray-600">Descubra e participe de projetos de sustentabilidade</p>
        </div>

        {/* Filtros e Busca */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar projetos..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={filtroCategoria} onValueChange={setFiltroCategoria}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas as categorias" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todas as categorias</SelectItem>
                  {categorias.map(categoria => (
                    <SelectItem key={categoria} value={categoria}>
                      {categoria}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filtroStatus} onValueChange={setFiltroStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Todos os status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todos os status</SelectItem>
                  {statusOptions.map(status => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Dialog open={openFiltros} onOpenChange={setOpenFiltros}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Mais Filtros
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Mais Filtros</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-600">ODS</label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map(n => {
                            const active = odsSelecionadas.includes(n);
                            return (
                              <Badge
                                key={n}
                                variant={active ? "default" : "outline"}
                                className={`cursor-pointer select-none ${active ? 'bg-green-600 hover:bg-green-700' : ''}`}
                                onClick={() => setOdsSelecionadas(prev => prev.includes(n) ? prev.filter(i => i !== n) : [...prev, n])}
                              >
                                ODS {n}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Localização</label>
                        <Input placeholder="Cidade/Estado" className="mt-2" value={localizacao} onChange={(e) => setLocalizacao(e.target.value)} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-600">Data de Criação (de)</label>
                        <Input type="date" className="mt-2" value={dataDe} onChange={(e) => setDataDe(e.target.value)} />
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Data de Criação (até)</label>
                        <Input type="date" className="mt-2" value={dataAte} onChange={(e) => setDataAte(e.target.value)} />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Status</label>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {['Ativo', 'Em Andamento', 'Concluído'].map(s => {
                          const active = filtroStatus === s;
                          return (
                            <Button
                              key={s}
                              variant={active ? 'default' : 'outline'}
                              className={`w-full ${active ? 'bg-green-600 hover:bg-green-700' : ''}`}
                              onClick={() => setFiltroStatus(s)}
                            >
                              {s}
                            </Button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                      <Button variant="outline" onClick={() => { setOdsSelecionadas([]); setLocalizacao(""); setDataDe(""); setDataAte(""); setFiltroStatus(""); }}>Limpar</Button>
                      <Button className="bg-green-600 hover:bg-green-700" onClick={() => setOpenFiltros(false)}>Aplicar</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{projetos.length}</div>
              <div className="text-sm text-gray-600">Projetos Ativos</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {projetos.reduce((total, p) => total + p.participantes, 0)}
              </div>
              <div className="text-sm text-gray-600">Participantes</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">
                {projetos.reduce((total, p) => total + p.vagas, 0)}
              </div>
              <div className="text-sm text-gray-600">Vagas Disponíveis</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">{categorias.length}</div>
              <div className="text-sm text-gray-600">Categorias</div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetosFiltrados.map((projeto) => (
            <Card key={projeto.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video bg-gray-200 relative">
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getStatusColor(projeto.status)}>
                    {projeto.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{projeto.categoria}</Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {projeto.titulo}
                </CardTitle>
                <p className="text-sm text-gray-600">por {projeto.autor}</p>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {projeto.descricao}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {projeto.localizacao}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(projeto.dataCriacao).toLocaleDateString()}
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

                <div className="flex gap-2">
                  <Link to={`/projetos/${projeto.id}`} className="flex-1">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Detalhes
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {projetosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum projeto encontrado com os filtros aplicados.</p>
          </div>
        )}
      </div>
    </div>
  );
}