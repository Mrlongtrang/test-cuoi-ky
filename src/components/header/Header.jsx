import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { GlobalOutlined, UserOutlined } from '@ant-design/icons';
import { useLogin } from '../../pages/Login/hooks/useLogin';

function Header() {
  const { user } = useLogin();

  return (
    <header>
      <a href="/">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/1764px-Epic_Games_logo.svg.png"
            alt="logo"
          />
        </div>
      </a>
      <div className="res-menu">
        <img src="src/assets/icons8-menu-30.png" alt="menu" />
      </div>
      <div className="primary-menu">
        <Link to="/" className="primary-menu-item active">
          STORE
        </Link>
        <Link to="/new" className="primary-menu-item">
          NEWS
        </Link>
        <Link to="#" className="primary-menu-item">
          FAQ
        </Link>
        <Link to="#" className="primary-menu-item">
          HELP
        </Link>
        <Link to="/singleproduct" className="primary-menu-item">
          SINGLE
        </Link>
      </div>
      <div className="header-options">
        <Link to="#">
          <GlobalOutlined />
        </Link>
        {user ? (
          // TODO: Add a sign out option by hovering!
          // TODO: Add a link to account page!
          <Link to="#">
            <div className="auth">
              <UserOutlined />
              <span>{user.username}</span>
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <div className="auth">
              <UserOutlined />
              <span>SIGN IN</span>
            </div>
          </Link>
        )}
        <button className="download-btn">GET EPIC GAMES</button>
      </div>
    </header>
  );
}

export default Header;
