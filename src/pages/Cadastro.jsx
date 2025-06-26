// src/pages/Cadastro.jsx
import React, { useState } from 'react';
import './Cadastro.css';

export default function Cadastro() {
  const [formData, setFormData] = useState({ nome: '', email: '', senha: '' });
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      console.error(error);
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
}
