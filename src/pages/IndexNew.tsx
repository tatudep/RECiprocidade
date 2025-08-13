import { Button } from "../components/atoms/ui/button";
import { Leaf, Building2, Heart, ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
    setIsMenuOpen(false);
  };

  // Estilos inline para garantir que apareça sem CSS
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#ffffff",
      fontFamily: "Arial, sans-serif"
    },
    header: {
      position: "fixed" as const,
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #e5e7eb",
      zIndex: 50,
      padding: "0 20px"
    },
    headerContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "64px",
      maxWidth: "1200px",
      margin: "0 auto"
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      textDecoration: "none"
    },
    logoText: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#111827"
    },
    nav: {
      display: "flex",
      alignItems: "center",
      gap: "32px"
    },
    navButton: {
      background: "none",
      border: "none",
      color: "#374151",
      cursor: "pointer",
      fontSize: "16px",
      padding: "8px 16px"
    },
    main: {
      paddingTop: "64px"
    },
    section: {
      padding: "80px 20px",
      maxWidth: "1200px",
      margin: "0 auto"
    },
    hero: {
      textAlign: "center" as const,
      padding: "120px 20px 80px"
    },
    heroTitle: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#111827",
      marginBottom: "24px"
    },
    heroSubtitle: {
      fontSize: "20px",
      color: "#6b7280",
      marginBottom: "40px",
      maxWidth: "600px",
      margin: "0 auto 40px"
    },
    button: {
      backgroundColor: "#16a34a",
      color: "#ffffff",
      padding: "12px 32px",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px"
    },
    sectionTitle: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#111827",
      textAlign: "center" as const,
      marginBottom: "16px"
    },
    sectionDescription: {
      fontSize: "18px",
      color: "#6b7280",
      textAlign: "center" as const,
      marginBottom: "40px",
      maxWidth: "600px",
      margin: "0 auto 40px"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "32px",
      marginTop: "40px"
    },
    card: {
      backgroundColor: "#f9fafb",
      padding: "32px",
      borderRadius: "8px",
      textAlign: "center" as const
    },
    cardTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#111827",
      marginBottom: "16px"
    },
    cardDescription: {
      fontSize: "16px",
      color: "#6b7280",
      marginBottom: "24px"
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <Link to="/" style={styles.logo}>
            <Leaf size={32} color="#16a34a" />
            <span style={styles.logoText}>RECiprocidade</span>
          </Link>
          
          <nav style={styles.nav}>
            <button 
              onClick={() => scrollToSection('home')}
              style={styles.navButton}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('empresas')}
              style={styles.navButton}
            >
              Empresas
            </button>
            <button 
              onClick={() => scrollToSection('ongs')}
              style={styles.navButton}
            >
              ONGs
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              style={styles.navButton}
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              style={styles.navButton}
            >
              Contato
            </button>
            <Link to="/entrar">
              <button style={styles.button}>
                Entrar
              </button>
            </Link>
          </nav>
        </div>
      </header>

      <main style={styles.main}>
        {/* Hero Section */}
        <section id="home" style={styles.hero}>
          <h1 style={styles.heroTitle}>
            Conectando Empresas e ONGs para um Futuro Sustentável
          </h1>
          <p style={styles.heroSubtitle}>
            Uma plataforma que facilita parcerias estratégicas entre empresas e organizações não governamentais, 
            promovendo impacto social e ambiental positivo através da colaboração.
          </p>
          <button 
            onClick={() => scrollToSection('empresas')}
            style={styles.button}
          >
            Começar Agora
            <ArrowRight size={20} />
          </button>
        </section>

        {/* Empresas Section */}
        <section id="empresas" style={styles.section}>
          <h2 style={styles.sectionTitle}>Para Empresas</h2>
          <p style={styles.sectionDescription}>
            Encontre ONGs alinhadas com seus valores e objetivos de responsabilidade social corporativa.
          </p>
          
          <div style={styles.grid}>
            <div style={styles.card}>
              <Building2 size={48} color="#16a34a" style={{ margin: "0 auto 16px" }} />
              <h3 style={styles.cardTitle}>Parcerias Estratégicas</h3>
              <p style={styles.cardDescription}>
                Conecte-se com ONGs que compartilham da sua visão de impacto social e ambiental.
              </p>
              <Link to="/empresas/cadastro">
                <button style={styles.button}>
                  Cadastrar Empresa
                </button>
              </Link>
            </div>
            
            <div style={styles.card}>
              <Heart size={48} color="#16a34a" style={{ margin: "0 auto 16px" }} />
              <h3 style={styles.cardTitle}>Impacto Mensurável</h3>
              <p style={styles.cardDescription}>
                Acompanhe e meça o impacto real dos seus investimentos sociais.
              </p>
            </div>
          </div>
        </section>

        {/* ONGs Section */}
        <section id="ongs" style={styles.section}>
          <h2 style={styles.sectionTitle}>Para ONGs</h2>
          <p style={styles.sectionDescription}>
            Encontre empresas parceiras que podem apoiar seus projetos e amplificar seu impacto.
          </p>
          
          <div style={styles.grid}>
            <div style={styles.card}>
              <Leaf size={48} color="#16a34a" style={{ margin: "0 auto 16px" }} />
              <h3 style={styles.cardTitle}>Financiamento</h3>
              <p style={styles.cardDescription}>
                Acesse oportunidades de financiamento e patrocínio para seus projetos.
              </p>
              <Link to="/ongs/cadastro">
                <button style={styles.button}>
                  Cadastrar ONG
                </button>
              </Link>
            </div>
            
            <div style={styles.card}>
              <Building2 size={48} color="#16a34a" style={{ margin: "0 auto 16px" }} />
              <h3 style={styles.cardTitle}>Recursos</h3>
              <p style={styles.cardDescription}>
                Obtenha acesso a recursos, conhecimento e expertise empresarial.
              </p>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" style={styles.section}>
          <h2 style={styles.sectionTitle}>Sobre a RECiprocidade</h2>
          <p style={styles.sectionDescription}>
            Somos uma plataforma dedicada a criar conexões significativas entre empresas e ONGs, 
            facilitando parcerias que geram impacto social e ambiental positivo.
          </p>
          
          <div style={styles.grid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Nossa Missão</h3>
              <p style={styles.cardDescription}>
                Facilitar parcerias estratégicas que promovam o desenvolvimento sustentável e o bem-estar social.
              </p>
            </div>
            
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Nossa Visão</h3>
              <p style={styles.cardDescription}>
                Ser a principal plataforma de conexão entre o setor privado e o terceiro setor no Brasil.
              </p>
            </div>
            
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Nossos Valores</h3>
              <p style={styles.cardDescription}>
                Transparência, impacto social, sustentabilidade e colaboração são os pilares que nos guiam.
              </p>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" style={styles.section}>
          <h2 style={styles.sectionTitle}>Entre em Contato</h2>
          <p style={styles.sectionDescription}>
            Tem dúvidas ou quer saber mais sobre a RECiprocidade? Entre em contato conosco.
          </p>
          
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <p style={{ fontSize: "18px", color: "#374151", marginBottom: "8px" }}>
              📧 contato@reciprocidade.com.br
            </p>
            <p style={{ fontSize: "18px", color: "#374151", marginBottom: "8px" }}>
              📱 (11) 99999-9999
            </p>
            <p style={{ fontSize: "18px", color: "#374151" }}>
              📍 São Paulo, SP
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: "#111827", 
        color: "#ffffff", 
        padding: "40px 20px", 
        textAlign: "center" as const 
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "16px" }}>
            <Leaf size={24} color="#16a34a" />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>RECiprocidade</span>
          </div>
          <p style={{ color: "#9ca3af" }}>
            © 2025 RECiprocidade. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
