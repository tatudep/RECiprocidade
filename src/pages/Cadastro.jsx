import React, { useState } from 'react';
import './Cadastro.css';
import personagem from '../assets/personagem.png';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    instituicao: '',
    representante: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    cnpj: '',
    tipo: ''
  });
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTipoClick = (tipo) => {
    setFormData({ ...formData, tipo });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termosAceitos) {
      setMensagem('Você deve aceitar os termos de uso.');
      return;
    }
    if (formData.senha !== formData.confirmarSenha) {
      setMensagem('As senhas não coincidem.');
      return;
    }

    try {
      const resposta = await fetch('http://localhost:5000/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const resultado = await resposta.json();
      setMensagem(resultado.mensagem);
    } catch (error) {
      setMensagem('Erro ao enviar dados');
    }
  };

  return (
    <div className="cadastro-layout">
      <div className="personagem-container">
        <img src={personagem} alt="Personagem" className="personagem" />
      </div>
      <div className="form-container">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="instituicao" placeholder="Nome da Instituição" value={formData.instituicao} onChange={handleChange} required />
          <div className="representante-row">
            <input type="text" name="representante" placeholder="Nome do Representante" value={formData.representante} onChange={handleChange} required />
            <button type="button" className="btn-representante">Adicionar Representante</button>
          </div>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} required />
          <input type="password" name="confirmarSenha" placeholder="Confirmar Senha" value={formData.confirmarSenha} onChange={handleChange} required />
          <input type="text" name="cnpj" placeholder="CNPJ" value={formData.cnpj} onChange={handleChange} required />
          <div className="tipo-buttons">
            <span>Sou</span>
            <button type="button" className={formData.tipo === 'empresa' ? 'active' : ''} onClick={() => handleTipoClick('empresa')}>🏢 Empresa</button>
            <button type="button" className={formData.tipo === 'ong' ? 'active' : ''} onClick={() => handleTipoClick('ong')}>👥 ONGs</button>
          </div>
          <button type="submit" className="btn-cadastrar">Cadastrar</button>
          <div className="termos">
            <input type="checkbox" id="termos" checked={termosAceitos} onChange={() => setTermosAceitos(!termosAceitos)} />
            <label htmlFor="termos">Eu concordo com os <a href="#">Termos de Uso</a> e <a href="#">Política de Privacidade</a></label>
          </div>
        </form>
        {mensagem && <p className="mensagem">{mensagem}</p>}
      </div>
    </div>
  );
}
