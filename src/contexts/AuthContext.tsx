import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

interface User {
  id: string;
  nome: string;
  email: string;
  tipo_usuario: 'empresa' | 'ong' | 'pessoa';
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, nome?: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

// Mock data seed (pode ser movido para um arquivo JSON público se preferir)
type StoredUser = User & { password: string };
const MOCK_USERS_KEY = 'mockUsers';
const AUTH_TOKEN_KEY = 'authToken';
const AUTH_USER_KEY = 'userData';

const defaultSeed: StoredUser[] = [
  { id: '1', nome: 'Admin', email: 'admin@reciprocidade.com', tipo_usuario: 'pessoa', password: '123456' },
  { id: '2', nome: 'Empresa', email: 'empresa@reciprocidade.com', tipo_usuario: 'empresa', password: '123456' },
  { id: '3', nome: 'ONG', email: 'ong@reciprocidade.com', tipo_usuario: 'ong', password: '123456' },
];

function loadUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(MOCK_USERS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(defaultSeed));
  return [...defaultSeed];
}

function saveUsers(users: StoredUser[]) {
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users));
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  // Start in loading state to avoid redirect before reading localStorage
  const [loading, setLoading] = useState(true);

  // Inicializar sessão de localStorage
  useEffect(() => {
    try {
      const token = localStorage.getItem(AUTH_TOKEN_KEY);
      const rawUser = localStorage.getItem(AUTH_USER_KEY);
      if (token && rawUser) {
        const parsed: User = JSON.parse(rawUser);
        setUser(parsed);
        setIsLoggedIn(true);
      }
    } catch {}
    setLoading(false);
  }, []);

  const login: AuthContextType['login'] = async (email, password) => {
    setLoading(true);
    try {
      const users = loadUsers();
      const found = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
      if (!found) throw new Error('Credenciais inválidas');
      const { password: _pw, ...publicUser } = found;
      const token = `mock.${btoa(found.email)}.${Date.now()}`;
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(publicUser));
      setUser(publicUser);
      setIsLoggedIn(true);
    } finally {
      setLoading(false);
    }
  };

  const register: AuthContextType['register'] = async (email, password, nome) => {
    setLoading(true);
    try {
      if (!email || !password) throw new Error('missing');
      const users = loadUsers();
      const exists = users.some((u) => u.email.toLowerCase() === email.toLowerCase());
      if (exists) throw new Error('exists');
      const newUser: StoredUser = {
        id: String(Date.now()),
        nome: nome || email.split('@')[0],
        email,
        tipo_usuario: 'ong',
        password,
      };
      const updated = [newUser, ...users];
      saveUsers(updated);
      const { password: _pw, ...publicUser } = newUser;
      const token = `mock.${btoa(newUser.email)}.${Date.now()}`;
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(publicUser));
      setUser(publicUser);
      setIsLoggedIn(true);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
    setUser(null);
    setIsLoggedIn(false);
  };

  const value: AuthContextType = useMemo(() => ({
    isLoggedIn,
    user,
    login,
    register,
    logout,
    loading,
  }), [isLoggedIn, user, loading]);

  return (
  <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};
