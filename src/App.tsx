import { Toaster } from "@/components/atoms/ui/toaster";
import { Toaster as Sonner } from "@/components/atoms/ui/sonner";
import { TooltipProvider } from "@/components/atoms/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Empresas from "./pages/Empresas";
import EmpresasCadastro from "./pages/EmpresasCadastro";
import ONGs from "./pages/ONGs";
import ONGsCadastro from "./pages/ONGsCadastro";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Entrar from "./pages/Entrar";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/empresas/cadastro" element={<EmpresasCadastro />} />
          <Route path="/ongs" element={<ONGs />} />
          <Route path="/ongs/cadastro" element={<ONGsCadastro />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/entrar" element={<Entrar />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
