import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import logo from './imagenes/logo-03.png';
import './Estilos/Navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsActive(false);
  };

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <Link to="/">
        <img src={logo} className="logo" alt="LostBot Games" />
      </Link>

      <ul className={isActive ? 'active' : ''}>
        {/* Rutas públicas */}
        <li>
          <Link to="/" onClick={() => setIsActive(false)}>INICIO</Link>
        </li>
        <li>
          <Link to="/games" onClick={() => setIsActive(false)}>TIENDA</Link>
        </li>

        {/* Rutas protegidas */}
        {isAuthenticated() && (
          <>
            <li>
              <Link to="/perfil" onClick={() => setIsActive(false)}>PERFIL</Link>
            </li>
            <li>
              <Link to="/biblioteca" onClick={() => setIsActive(false)}>BIBLIOTECA</Link>
            </li>
          </>
        )}

        {/* Login/Logout */}
        <li>
          {isAuthenticated() ? (
            <button onClick={handleLogout}>LOGOUT</button>
          ) : (
            <Link to="/login" onClick={() => setIsActive(false)}>LOGIN</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;