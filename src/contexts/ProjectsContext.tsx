import React, { createContext, useContext, useMemo, useState } from 'react';

export type Project = {
  id: number;
  titulo: string;
  descricao: string;
  categoria: string;
  dataCriacao: string; // ISO date
  status: 'Ativo' | 'Em Andamento' | 'Concluído';
  participantes: number;
  ods: number[];
  localizacao?: string;
  autor?: string; // for public projects
  vagas?: number; // for public projects
};

type ProjectsContextType = {
  myProjects: Project[];
  publicProjects: Project[];
  addProject: (p: Omit<Project, 'id' | 'dataCriacao' | 'participantes' | 'status'> & { status?: Project['status']; participantes?: number; dataCriacao?: string }) => Project;
  updateProject: (id: number, updates: Partial<Project>) => Project | undefined;
  deleteProject: (id: number) => boolean;
  getById: (id: number) => { project: Project | undefined; isMine: boolean };
};

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export const ProjectsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [myProjects, setMyProjects] = useState<Project[]>([
    {
      id: 1,
      titulo: 'Reflorestamento Urbano',
      descricao: 'Projeto para plantar árvores em áreas urbanas degradadas',
      categoria: 'Meio Ambiente',
      dataCriacao: '2024-01-15',
      status: 'Ativo',
      participantes: 25,
      ods: [13, 15],
      localizacao: 'São Paulo, SP',
    },
    {
      id: 2,
      titulo: 'Educação Digital para Idosos',
      descricao: 'Ensino de tecnologia básica para terceira idade',
      categoria: 'Educação',
      dataCriacao: '2024-02-03',
      status: 'Concluído',
      participantes: 18,
      ods: [4, 10],
      localizacao: 'Rio de Janeiro, RJ',
    },
    {
      id: 3,
      titulo: 'Horta Comunitária',
      descricao: 'Criação de hortas em comunidades carentes',
      categoria: 'Alimentação',
      dataCriacao: '2024-02-20',
      status: 'Em Andamento',
      participantes: 42,
      ods: [2, 11],
      localizacao: 'Belo Horizonte, MG',
    },
  ]);

  const [publicProjects] = useState<Project[]>([
    // Projetos mockados extras
    ...Array.from({ length: 15 }).map((_, i) => ({
      id: 100 + i,
      titulo: `Projeto Sustentável ${i + 1}`,
      descricao: `Descrição do projeto sustentável número ${i + 1}. Este projeto visa promover ações de impacto social e ambiental.`,
      categoria: ["Meio Ambiente", "Educação", "Saúde", "Tecnologia", "Alimentação", "Energia", "Comunidade"][i % 7],
      autor: `Autor ${i + 1}`,
      dataCriacao: `2024-0${(i % 9) + 1}-0${(i % 28) + 1}`,
      status: (["Ativo", "Em Andamento", "Concluído"][i % 3]) as "Ativo" | "Em Andamento" | "Concluído",
      participantes: Math.floor(Math.random() * 50) + 10,
      vagas: Math.floor(Math.random() * 20) + 5,
      localizacao: ["São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", "Recife, PE", "Salvador, BA", "Curitiba, PR", "Porto Alegre, RS"][i % 7],
      ods: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => Math.floor(Math.random() * 17) + 1),
    })),
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
    },
  ]);

  const addProject: ProjectsContextType['addProject'] = (payload) => {
    const now = new Date();
    const project: Project = {
      id: Date.now(),
      participantes: payload.participantes ?? 0,
      status: payload.status ?? 'Ativo',
      dataCriacao: payload.dataCriacao ?? now.toISOString().slice(0, 10),
      titulo: payload.titulo,
      descricao: payload.descricao,
      categoria: payload.categoria,
      localizacao: payload.localizacao,
      ods: payload.ods,
    } as Project;
    setMyProjects((prev) => [project, ...prev]);
    return project;
  };

  const updateProject: ProjectsContextType['updateProject'] = (id, updates) => {
    let updatedItem: Project | undefined;
    setMyProjects((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          updatedItem = { ...p, ...updates } as Project;
          return updatedItem;
        }
        return p;
      })
    );
    return updatedItem;
  };

  const deleteProject: ProjectsContextType['deleteProject'] = (id) => {
    let existed = false;
    setMyProjects((prev) => {
      existed = prev.some((p) => p.id === id);
      return prev.filter((p) => p.id !== id);
    });
    return existed;
  };

  const getById: ProjectsContextType['getById'] = (id) => {
    const my = myProjects.find((p) => p.id === id);
    if (my) return { project: my, isMine: true };
    const pub = publicProjects.find((p) => p.id === id);
    return { project: pub, isMine: false };
  };

  const value = useMemo(
    () => ({ myProjects, publicProjects, addProject, updateProject, deleteProject, getById }),
    [myProjects, publicProjects]
  );

  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
};

export function useProjects() {
  const ctx = useContext(ProjectsContext);
  if (!ctx) throw new Error('useProjects must be used within ProjectsProvider');
  return ctx;
}
