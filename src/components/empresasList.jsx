import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function EmpresaList() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    api.get('/empresas')
      .then(res => setEmpresas(res.data));
  }, []);

  return (
    <div>
      <h2>Empresas</h2>
      <ul>
        {empresas.map(emp => (
          <li key={emp.id}>
            {emp.name} - {emp.email} - {emp.sector}
          </li>
        ))}
      </ul>
    </div>
  );
}