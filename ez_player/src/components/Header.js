// components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" exact>
              หน้าแรก
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">
              เข้าสู่ระบบ
            </NavLink>
          </li>
          <li>
            <NavLink to="/upload" activeClassName="active">
              อัพโหลดวิดีโอ
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
