import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoggedIn, loading } = useAuth();
  const location = useLocation();

  // Mostrar loading enquanto verifica autenticação
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    );
  }

  // Se não estiver logado, redirecionar para página de login
  // Salvando a localização atual para redirecionamento após login
  if (!isLoggedIn) {
    return <Navigate to="/entrar" state={{ from: location }} replace />;
  }

  // Se estiver logado, renderizar o componente filho
  return <>{children}</>;
};

export default ProtectedRoute;
