import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ navItems }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container">
        <Link className="navbar-brand text-success logo h1" to="/">
          Zay
        </Link>

        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="templatemo_main_nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="templatemo_main_nav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item ">
                <Link className="nav-link" to={item.path} style={{ color: '#28a745' , fontWeight:"bold" }}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    
    
  );
}

export default Nav;
