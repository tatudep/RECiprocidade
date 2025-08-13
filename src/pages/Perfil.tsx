import { useState } from "react";
import Header from "../components/organisms/Header";
import { Button } from "../components/atoms/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/atoms/ui/card";
import { Input } from "../components/atoms/ui/input";
import { Textarea } from "../components/atoms/ui/textarea";
import { Label } from "../components/atoms/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/atoms/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "../components/atoms/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/atoms/ui/tabs";
import { Badge } from "../components/atoms/ui/badge";
import { Camera, Save, Edit, MapPin, Calendar, Mail, Phone } from "lucide-react";
import { useToast } from "../hooks/use-toast";

export default function Perfil() {
  const { toast } = useToast();
  const [editMode, setEditMode] = useState(false);
  const [perfilData, setPerfilData] = useState({
    nome: "EcoTech Solutions",
    email: "contato@ecotech.com.br",
    telefone: "(11) 99999-9999",
    tipo_usuario: "empresa", // ou "ong"
    cnpj: "12.345.678/0001-99",
    area_atuacao: "Meio Ambiente",
    responsavel: "Maria Silva",
    data_fundacao: "2010-03-15",
    descricao_institucional: "Empresa dedicada a soluções sustentáveis para o meio ambiente.",
    endereco: {
      rua: "Rua das Árvores",
      numero: "123",
      bairro: "Centro",
      cidade: "São Paulo",
      estado: "SP",
      cep: "01000-000"
    },
    site: "https://ecotech.com.br",
    interesses: ["Meio Ambiente", "Tecnologia"],
    data_cadastro: "2024-01-10"
  });

  const [estatisticas] = useState({
    projetos_criados: 5,
    projetos_participando: 12,
    conexoes: 48,
    impacto_total: 250
  });

  const tiposUsuario = [
    { value: "empresa", label: "Empresa" },
    { value: "ong", label: "ONG" }
  ];

  const interessesDisponiveis = [
    "Meio Ambiente", "Educação", "Saúde", "Tecnologia", "Alimentação", 
    "Energia", "Comunidade", "Economia", "Infraestrutura", "Cultura"
  ];

  const handleSave = () => {
    toast({
      title: "Perfil atualizado!",
      description: "Suas informações foram salvas com sucesso.",
    });
    setEditMode(false);
  };

  const handleInteresseToggle = (interesse: string) => {
    setPerfilData(prev => ({
      ...prev,
      interesses: prev.interesses.includes(interesse)
        ? prev.interesses.filter(i => i !== interesse)
        : [...prev.interesses, interesse]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="perfil" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="perfil">Cadastro</TabsTrigger>
              <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
              <TabsTrigger value="atividades">Atividades</TabsTrigger>
            </TabsList>

            <TabsContent value="perfil" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Informações da {perfilData.tipo_usuario === "ong" ? "ONG" : "Empresa"}</CardTitle>
                    <Button
                      variant="outline"
                      onClick={() => setEditMode(!editMode)}
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      {editMode ? "Cancelar" : "Editar"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Dropdown para tipo de usuário */}
                  <div className="mb-6 max-w-xs">
                    <Label htmlFor="tipo_usuario">Tipo de Cadastro</Label>
                    <Select
                      value={perfilData.tipo_usuario}
                      onValueChange={value => setPerfilData(prev => ({ ...prev, tipo_usuario: value }))}
                      disabled={!editMode}
                    >
                      <SelectTrigger id="tipo_usuario">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {tiposUsuario.map(tipo => (
                          <SelectItem key={tipo.value} value={tipo.value}>
                            {tipo.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {/* Fim do dropdown */}
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="relative">
                        <Avatar className="h-32 w-32">
                          <AvatarImage src="/placeholder.svg" alt="Foto do perfil" />
                          <AvatarFallback className="text-2xl">{perfilData.nome.slice(0,2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        {editMode && (
                          <Button
                            size="sm"
                            className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0"
                          >
                            <Camera className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-lg">{perfilData.nome}</h3>
                        <p className="text-gray-600">{perfilData.area_atuacao}</p>
                        <p className="text-sm text-gray-500">{perfilData.site}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-3 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="nome">Nome da {perfilData.tipo_usuario === "ong" ? "ONG" : "Empresa"}</Label>
                          <Input
                            id="nome"
                            value={perfilData.nome}
                            onChange={(e) => setPerfilData(prev => ({ ...prev, nome: e.target.value }))}
                            disabled={!editMode}
                          />
                        </div>
                        <div>
                          <Label htmlFor="cnpj">CNPJ</Label>
                          <Input
                            id="cnpj"
                            value={perfilData.cnpj}
                            onChange={(e) => setPerfilData(prev => ({ ...prev, cnpj: e.target.value }))}
                            disabled={!editMode}
                          />
                        </div>
                        <div>
                          <Label htmlFor="area_atuacao">Área de Atuação</Label>
                          <Input
                            id="area_atuacao"
                            value={perfilData.area_atuacao}
                            onChange={(e) => setPerfilData(prev => ({ ...prev, area_atuacao: e.target.value }))}
                            disabled={!editMode}
                          />
                        </div>
                        <div>
                          <Label htmlFor="responsavel">Responsável</Label>
                          <Input
                            id="responsavel"
                            value={perfilData.responsavel}
                            onChange={(e) => setPerfilData(prev => ({ ...prev, responsavel: e.target.value }))}
                            disabled={!editMode}
                          />
                        </div>
                        <div>
                          <Label htmlFor="data_fundacao">Data de Fundação</Label>
                          <Input
                            id="data_fundacao"
                            type="date"
                            value={perfilData.data_fundacao}
                            onChange={(e) => setPerfilData(prev => ({ ...prev, data_fundacao: e.target.value }))}
                            disabled={!editMode}
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">E-mail</Label>
                          <Input
                            id="email"
                            type="email"
                            value={perfilData.email}
                            onChange={(e) => setPerfilData(prev => ({ ...prev, email: e.target.value }))}
                            disabled={!editMode}
                          />
                        </div>
                        <div>
                          <Label htmlFor="telefone">Telefone</Label>
                          <Input
                            id="telefone"
                            value={perfilData.telefone}
                            onChange={(e) => setPerfilData(prev => ({ ...prev, telefone: e.target.value }))}
                            disabled={!editMode}
                          />
                        </div>
                        <div>
                          <Label htmlFor="site">Site</Label>
                          <Input
                            id="site"
                            value={perfilData.site}
                            onChange={(e) => setPerfilData(prev => ({ ...prev, site: e.target.value }))}
                            disabled={!editMode}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="descricao_institucional">Descrição Institucional</Label>
                          <Textarea
                            id="descricao_institucional"
                            value={perfilData.descricao_institucional}
                            onChange={(e) => setPerfilData(prev => ({ ...prev, descricao_institucional: e.target.value }))}
                            disabled={!editMode}
                            rows={3}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label>Endereço</Label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <Input
                              placeholder="Rua"
                              value={perfilData.endereco.rua}
                              onChange={(e) => setPerfilData(prev => ({ ...prev, endereco: { ...prev.endereco, rua: e.target.value } }))}
                              disabled={!editMode}
                            />
                            <Input
                              placeholder="Número"
                              value={perfilData.endereco.numero}
                              onChange={(e) => setPerfilData(prev => ({ ...prev, endereco: { ...prev.endereco, numero: e.target.value } }))}
                              disabled={!editMode}
                            />
                            <Input
                              placeholder="Bairro"
                              value={perfilData.endereco.bairro}
                              onChange={(e) => setPerfilData(prev => ({ ...prev, endereco: { ...prev.endereco, bairro: e.target.value } }))}
                              disabled={!editMode}
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                            <Input
                              placeholder="Cidade"
                              value={perfilData.endereco.cidade}
                              onChange={(e) => setPerfilData(prev => ({ ...prev, endereco: { ...prev.endereco, cidade: e.target.value } }))}
                              disabled={!editMode}
                            />
                            <Input
                              placeholder="Estado"
                              value={perfilData.endereco.estado}
                              onChange={(e) => setPerfilData(prev => ({ ...prev, endereco: { ...prev.endereco, estado: e.target.value } }))}
                              disabled={!editMode}
                            />
                            <Input
                              placeholder="CEP"
                              value={perfilData.endereco.cep}
                              onChange={(e) => setPerfilData(prev => ({ ...prev, endereco: { ...prev.endereco, cep: e.target.value } }))}
                              disabled={!editMode}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label>Áreas de Interesse</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {interessesDisponiveis.map(interesse => (
                            <Badge
                              key={interesse}
                              variant={perfilData.interesses.includes(interesse) ? "default" : "outline"}
                              className={`cursor-pointer ${editMode ? "hover:bg-primary/80" : ""}`}
                              onClick={() => editMode && handleInteresseToggle(interesse)}
                            >
                              {interesse}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {editMode && (
                        <div className="flex gap-2 pt-4">
                          <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                            <Save className="w-4 h-4 mr-2" />
                            Salvar Alterações
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="configuracoes" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações da Conta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Privacidade</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Perfil público</span>
                        <Button variant="outline" size="sm">Configurar</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Receber notificações por email</span>
                        <Button variant="outline" size="sm">Configurar</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Segurança</h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        Alterar Senha
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Autenticação em Duas Etapas
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="atividades" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-green-600">{estatisticas.projetos_criados}</div>
                    <div className="text-sm text-gray-600">Projetos Criados</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-blue-600">{estatisticas.projetos_participando}</div>
                    <div className="text-sm text-gray-600">Participando</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-purple-600">{estatisticas.conexoes}</div>
                    <div className="text-sm text-gray-600">Conexões</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-orange-600">{estatisticas.impacto_total}</div>
                    <div className="text-sm text-gray-600">Pessoas Impactadas</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Atividades Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 border rounded">
                      <Calendar className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">Projeto "Horta Comunitária" criado</p>
                        <p className="text-sm text-gray-600">há 2 dias</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Participou do projeto "Educação Digital"</p>
                        <p className="text-sm text-gray-600">há 5 dias</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded">
                      <Calendar className="h-5 w-5 text-purple-600" />
                      <div>
                        <p className="font-medium">Nova conexão com João Santos</p>
                        <p className="text-sm text-gray-600">há 1 semana</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}