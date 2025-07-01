import React, { useState } from 'react';
import api from '../services/api';

export default function OngForm() {
  const [form, setForm] = useState({ name: '', email: '', cause: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    api.post('/ongs', form)
      .then(() => {
        alert('ONG criada!');
        setForm({ name: '', email: '', cause: '' });
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Criar ONG</h2>
      <input name="name" placeholder="Nome" value={form.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="cause" placeholder="Causa" value={form.cause} onChange={handleChange} />
      <button type="submit">Criar</button>
    </form>
  );
}