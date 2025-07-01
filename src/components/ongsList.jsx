import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function OngsList() {
  const [ongs, setOngs] = useState([]);

  useEffect(() => {
    api.get('/ongs')
      .then(res => setOngs(res.data));
  }, []);

  return (
    <div>
      <h2>ONGs</h2>
      <ul>
        {ongs.map(ong => (
          <li key={ong.id}>
            {ong.name} - {ong.email} - {ong.cause}
          </li>
        ))}
      </ul>
    </div>
  );
}