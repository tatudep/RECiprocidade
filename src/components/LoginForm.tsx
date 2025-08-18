
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const sdgsList = [
  "Erradicação da Pobreza", "Fome Zero", "Saúde e Bem-Estar", "Educação de Qualidade",
  "Igualdade de Gênero", "Água Potável e Saneamento", "Energia Limpa", "Trabalho Decente",
  "Inovação e Infraestrutura", "Redução das Desigualdades", "Cidades Sustentáveis",
  "Consumo Responsável", "Ação Climática", "Vida na Água", "Vida Terrestre",
  "Paz e Justiça", "Parcerias"
];


const LoginForm: React.FC = () => {
  // Function to handle ODS checkbox changes
  const handleODSChange = (odsItem: string, checked: boolean) => {
    if (checked) {
      setOds([...ods, odsItem]);
    } else {
      setOds(ods.filter(item => item !== odsItem));
    }
  };

  // Function to handle login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else if (data?.session) {
      setSuccess(true);
      navigate('/dashboard');
    } else {
      setError('Login falhou.');
    }
  };

  // Function to handle registration
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    // Validação dos campos obrigatórios para empresa
    if (tipo === 'empresa') {
      if (!nome || !email || !password || !cnpj || !setor || !porte || !descricao || !telefone || !endereco || ods.length === 0 || !motivacao) {
        setLoading(false);
        setError('Preencha todos os campos obrigatórios da empresa, incluindo pelo menos um ODS.');
        return;
      }
    }
    if (tipo === 'ong') {
      if (!nome || !email || !password || !cnpj || !areaAtuacao || !anoFundacao || !missao || !projetos || !telefone || !endereco || ods.length === 0 || !necessidades) {
        setLoading(false);
        setError('Preencha todos os campos obrigatórios da ONG, incluindo pelo menos um ODS.');
        return;
      }
    }
    // Verifica se o email já existe em empresa ou ong
    const empresaCheck = await supabase.from('empresas').select('email').eq('email', email).single();
    const ongCheck = await supabase.from('ongs').select('email').eq('email', email).single();
    if ((tipo === 'empresa' && ongCheck.data) || (tipo === 'ong' && empresaCheck.data)) {
      setLoading(false);
      setError('Este email já está cadastrado como outro tipo de usuário. Cada email só pode ser uma empresa ou uma ONG.');
      return;
    }
    // Cria usuário no auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { nome, tipo }
      }
    });
    if (error) {
      setLoading(false);
      setError(error.message);
      return;
    }
    // Salva dados extras na tabela
    let insertData;
    if (tipo === 'empresa') {
      insertData = {
        nome, email, cnpj, setor, porte, descricao, website, telefone, endereco, ods, motivacao, tipo
      };
      await supabase.from('empresas').insert([insertData]);
    } else {
      insertData = {
        nome, email, cnpj, areaAtuacao, anoFundacao, missao, projetos, website, telefone, endereco, ods, necessidades, beneficiarios, voluntarios, tipo
      };
      await supabase.from('ongs').insert([insertData]);
    }
    setLoading(false);
    setSuccess(true);
    navigate('/dashboard');
  };
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [tipo, setTipo] = useState('empresa');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [setor, setSetor] = useState('');
  const [porte, setPorte] = useState('');
  const [descricao, setDescricao] = useState('');
  const [website, setWebsite] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [ods, setOds] = useState<string[]>([]);
  const [motivacao, setMotivacao] = useState('');
  // ONG fields
  const [areaAtuacao, setAreaAtuacao] = useState('');
  const [anoFundacao, setAnoFundacao] = useState('');
  const [missao, setMissao] = useState('');
  const [projetos, setProjetos] = useState('');
  const [necessidades, setNecessidades] = useState('');
  const [beneficiarios, setBeneficiarios] = useState('');
  const [voluntarios, setVoluntarios] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [success, setSuccess] = useState(false);

  // ...existing code...

      {/* ...ONG fields remain for API only, not exibidos */}


  return (
    <form
      onSubmit={isRegister ? handleRegister : handleLogin}
      style={{
        maxWidth: 480,
        margin: '2rem auto',
        padding: 24,
        border: '1px solid #eee',
        borderRadius: 8,
      }}
    >
      <h2 style={{ marginBottom: 16 }}>
        {isRegister ? 'Cadastro Completo' : 'Login Supabase'}
      </h2>
      {isRegister && (
        <>
          <div style={{ marginBottom: 12 }}>
            <label>Tipo:</label><br />
            <select value={tipo} onChange={e => setTipo(e.target.value)} style={{ width: '100%', padding: 8 }}>
              <option value="empresa">Empresa</option>
              <option value="ong">ONG</option>
            </select>
          </div>
          <div style={{ marginBottom: 12 }}>
            <label>Nome:</label><br />
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} required style={{ width: '100%', padding: 8 }} />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label>Email:</label><br />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', padding: 8 }} />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label>Senha:</label><br />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '100%', padding: 8 }} />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label>CNPJ:</label><br />
            <input type="text" value={cnpj} onChange={e => setCnpj(e.target.value)} required style={{ width: '100%', padding: 8 }} />
          </div>
          {tipo === 'empresa' ? (
            <>
              <div style={{ marginBottom: 12 }}>
                <label>Setor de Atuação:</label><br />
                <input type="text" value={setor} onChange={e => setSetor(e.target.value)} required style={{ width: '100%', padding: 8 }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Porte:</label><br />
                <select value={porte} onChange={e => setPorte(e.target.value)} style={{ width: '100%', padding: 8 }}>
                  <option value="">Selecione</option>
                  <option value="micro">Microempresa</option>
                  <option value="pequena">Pequena</option>
                  <option value="media">Média</option>
                  <option value="grande">Grande</option>
                </select>
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Descrição:</label><br />
                <textarea value={descricao} onChange={e => setDescricao(e.target.value)} rows={3} style={{ width: '100%', padding: 8 }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Website:</label><br />
                <input type="text" value={website} onChange={e => setWebsite(e.target.value)} style={{ width: '100%', padding: 8 }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Telefone:</label><br />
                <input type="text" value={telefone} onChange={e => setTelefone(e.target.value)} required style={{ width: '100%', padding: 8 }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Endereço:</label><br />
                <input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} required style={{ width: '100%', padding: 8 }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>ODS de Interesse:</label><br />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {sdgsList.map((odsItem, idx) => (
                    <label key={idx} style={{ fontSize: 13 }}>
                      <input
                        type="checkbox"
                        checked={ods.includes(odsItem)}
                        onChange={e => handleODSChange(odsItem, e.target.checked)}
                      /> {idx + 1}. {odsItem}
                    </label>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Motivação:</label><br />
                <textarea value={motivacao} onChange={e => setMotivacao(e.target.value)} rows={2} style={{ width: '100%', padding: 8 }} />
              </div>
            </>
          ) : (
            <>
              <div style={{ marginBottom: 12 }}>
                <label>Área de Atuação:</label><br />
                <input type="text" value={areaAtuacao} onChange={e => setAreaAtuacao(e.target.value)} required style={{ width: '100%', padding: 8 }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Ano de Fundação:</label><br />
                <input type="number" value={anoFundacao} onChange={e => setAnoFundacao(e.target.value)} required style={{ width: '100%', padding: 8 }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Missão:</label><br />
                <textarea value={missao} onChange={e => setMissao(e.target.value)} rows={3} style={{ width: '100%', padding: 8 }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Principais Projetos:</label><br />
                <textarea value={projetos} onChange={e => setProjetos(e.target.value)} rows={3} style={{ width: '100%', padding: 8 }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Website:</label><br />
                <input type="text" value={website} onChange={e => setWebsite(e.target.value)} style={{ width: '100%', padding: 8 }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Telefone:</label><br />
                <input type="text" value={telefone} onChange={e => setTelefone(e.target.value)} required style={{ width: '100%', padding: 8 }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Endereço:</label><br />
                <input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} required style={{ width: '100%', padding: 8 }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>ODS Trabalhados:</label><br />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {sdgsList.map((odsItem, idx) => (
                    <label key={idx} style={{ fontSize: 13 }}>
                      <input
                        type="checkbox"
                        checked={ods.includes(odsItem)}
                        onChange={e => handleODSChange(odsItem, e.target.checked)}
                      /> {idx + 1}. {odsItem}
                    </label>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Principais Necessidades de Apoio:</label><br />
                <textarea value={necessidades} onChange={e => setNecessidades(e.target.value)} rows={2} style={{ width: '100%', padding: 8 }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Número de Beneficiários:</label><br />
                <input type="number" value={beneficiarios} onChange={e => setBeneficiarios(e.target.value)} style={{ width: '100%', padding: 8 }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Número de Voluntários:</label><br />
                <input type="number" value={voluntarios} onChange={e => setVoluntarios(e.target.value)} style={{ width: '100%', padding: 8 }} />
              </div>
            </>
          )}
        </>
      )}
      {!isRegister && (
        <>
          <div style={{ marginBottom: 12 }}>
            <label>Email:</label><br />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', padding: 8 }} />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label>Senha:</label><br />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '100%', padding: 8 }} />
          </div>
        </>
      )}
      <button
        type="submit"
        disabled={loading}
        style={{
          width: '100%',
          padding: 10,
          background: '#16a34a',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
        }}
      >
        {loading
          ? isRegister
            ? 'Cadastrando...'
            : 'Entrando...'
          : isRegister
          ? 'Cadastrar'
          : 'Entrar'}
      </button>
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <button
          type="button"
          onClick={() => {
            setIsRegister(!isRegister);
            setError(null);
            setSuccess(false);
          }}
          style={{
            background: 'none',
            border: 'none',
            color: '#16a34a',
            cursor: 'pointer',
            textDecoration: 'underline',
            fontSize: 14,
          }}
        >
          {isRegister
            ? 'Já tem conta? Entrar'
            : 'Não tem conta? Cadastre-se'}
        </button>
      </div>
      {error && (
        <div style={{ color: 'red', marginTop: 12 }}>{error}</div>
      )}
      {success && (
        <div style={{ color: 'green', marginTop: 12 }}>
          {isRegister
            ? 'Cadastro realizado com sucesso!'
            : 'Login realizado com sucesso!'}
        </div>
      )}
    </form>
  );
};

export default LoginForm;
