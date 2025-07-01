import React, { useState } from 'react';
import api from '../services/api';

export default function EmpresaForm() {
  const [form, setForm] = useState({ name: '', email: '', sector: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    api.post('/empresas', form)
      .then(() => {
        alert('Empresa criada!');
        setForm({ name: '', email: '', sector: '' });
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Criar Empresa</h2>
      <input name="name" placeholder="Nome" value={form.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="sector" placeholder="Setor" value={form.sector} onChange={handleChange} />
      <button type="submit">Criar</button>
    </form>
  );
}