import { Toaster } from "./components/atoms/ui/toaster";
import { Toaster as Sonner } from "./components/atoms/ui/sonner";
import { TooltipProvider } from "./components/atoms/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProjectsProvider } from "./contexts/ProjectsContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import Empresas from "./pages/Empresas";
import EmpresasCadastro from "./pages/EmpresasCadastro";
import ONGs from "./pages/ONGs";
import ONGsCadastro from "./pages/ONGsCadastro";
import Entrar from "./pages/Entrar";
import Projetos from "./pages/Projetos";
import Perfil from "./pages/Perfil";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import CriarProjeto from "./pages/CriarProjeto";
import ProjetoDetalhes from "./pages/ProjetoDetalhes";
import ProjetoEditar from "./pages/ProjetoEditar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <ProjectsProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Rotas públicas */}
            <Route path="/" element={<Index />} />
            <Route path="/entrar" element={<Entrar />} />
            <Route path="/empresas/cadastro" element={<EmpresasCadastro />} />
            <Route path="/ongs/cadastro" element={<ONGsCadastro />} />
            
            {/* Rotas protegidas */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/empresas" 
              element={
                <ProtectedRoute>
                  <Empresas />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/ongs" 
              element={
                <ProtectedRoute>
                  <ONGs />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/projetos" 
              element={
                <ProtectedRoute>
                  <Projetos />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/projetos/:id" 
              element={
                <ProtectedRoute>
                  <ProjetoDetalhes />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/projetos/:id/editar" 
              element={
                <ProtectedRoute>
                  <ProjetoEditar />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/criar-projeto" 
              element={
                <ProtectedRoute>
                  <CriarProjeto />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/perfil" 
              element={
                <ProtectedRoute>
                  <Perfil />
                </ProtectedRoute>
              } 
            />
            
            {/* Rota 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </ProjectsProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
