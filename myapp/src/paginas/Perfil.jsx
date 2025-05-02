import React from 'react';
import { useAuth } from '../AuthContext';
import './Estilos/Perfil.css';

const Perfil = () => {
  const { currentUser } = useAuth();

  return (
    <div className="perfil-container">
      <h1>Perfil de Usuario</h1>
      <div className="perfil-info">
        <p><strong>Nombre de Usuario:</strong> {currentUser?.username || 'Invitado'}</p>
        <p><strong>Email:</strong> {currentUser?.email || 'No disponible'}</p>
      </div>

      <div className="perfil-sections">
        <div className="perfil-section">
          <h2>Biblioteca de Juegos</h2>
          <iframe
            src="/biblioteca"
            title="Biblioteca de Juegos"
            className="iframe-biblioteca"
          ></iframe>
        </div>

        <div className="perfil-section">
          <h2>Logros</h2>
          <iframe
            src="/logros"
            title="Logros del Usuario"
            className="iframe-logros"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Perfil;