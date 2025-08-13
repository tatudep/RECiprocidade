import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarHeader, 
  SidebarTrigger, 
  SidebarInset 
} from '../../components/atoms/ui/sidebar';
import { Button } from '../../components/atoms/ui/button';
import { 
  Home, 
  Users, 
  Building2, 
  Heart, 
  Info, 
  Mail, 
  User,
  FolderOpen,
  Settings
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const navigationItems = [
  { path: '/', label: 'Início', icon: Home },
  { path: '/empresas', label: 'Empresas', icon: Building2 },
  { path: '/ongs', label: 'ONGs', icon: Heart },
  { path: '/sobre', label: 'Sobre', icon: Info },
  { path: '/contato', label: 'Contato', icon: Mail },
];

const dashboardItems = [
  { path: '/projetos', label: 'Projetos', icon: FolderOpen },
  { path: '/perfil', label: 'Meu Perfil', icon: User },
  { path: '/configuracoes', label: 'Configurações', icon: Settings },
];

export function DashboardLayout({ children, className }: DashboardLayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-900">RECiprocidade</span>
              </Link>

              {/* User Menu */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">Olá, Usuário!</span>
                <Button variant="outline" size="sm">
                  Sair
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Sidebar and Content */}
        <Sidebar>
          <SidebarHeader>
            <SidebarTrigger />
          </SidebarHeader>
          <SidebarInset>
            <nav className="grid gap-1 px-2">
              {/* Main Navigation */}
              <div className="py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                  Navegação
                </h2>
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                        isActive(item.path)
                          ? 'bg-green-100 text-green-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Dashboard Navigation */}
              <div className="py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                  Dashboard
                </h2>
                {dashboardItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                        isActive(item.path)
                          ? 'bg-green-100 text-green-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </SidebarInset>
        </Sidebar>

        {/* Main Content */}
        <main className={`p-6 ${className}`}>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
} 