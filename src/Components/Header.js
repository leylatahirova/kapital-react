import React, { useState } from 'react';
import "./Header.css";
import Search from './Search';
import logo from "../kptl/kb-logo-main.svg";
import birbankLogo from "../kptl/birbanklogo-mobile.svg";

export default function Header({ isSearchOpen }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const handleSearchButtonClick = () => {
    setSearchOpen(true);
  };
  const handleCloseButtonClick = () => {
    setSearchOpen(false);
  };

  const headerContent = (
    <header className={`main-header ${isSearchOpen ? "hide" : ""}`}>
      <div className="bank-logo">
        <a href="https://www.kapitalbank.az/">
          <img className="bank-logo" src={logo} width="220px" alt="Kapital bank" />
        </a>
      </div>
      <nav className="main-navigation">
        <ul className="nav-ul">
          <li className="nav-li">
            <a className="nav-a" href="https://www.kapitalbank.az/" style={{fontWeight: 'bold'}} >Fiziki şəxslər üçün</a>
          </li>
          <li className="nav-li">
            <a className="nav-a" href="https://birbank.business/">Biznes üçün</a>
          </li>
          <li className="nav-li">
            <i className="fa-solid fa-location-dot" style={{ color: '#ef3d42' }}></i>
            <a className="nav-a" href="https://www.kapitalbank.az/locations">Xidmət şəbəkəsi</a>
          </li>
          <li className="nav-li">
            <a className="nav-a" href="https://www.kapitalbank.az/en/">EN</a>
          </li>
          <li className="nav-li">
            <a className="nav-a" href="https://www.kapitalbank.az/ru/">RU</a>
          </li>
          <li className="nav-li">
            <button type="button" className="search-btn" aria-label="search" onClick={handleSearchButtonClick}>
              <i className="fa-solid fa-magnifying-glass" style={{ color: '#f63d42', }}></i>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );

  return (
    <>
      {!searchOpen && headerContent}
      <div className='mobileButton'>
      <button className="mobile-button">
        <img src={birbankLogo} alt="birbankLogo" />
      </button>
      <button className="mobile-menu-button">
        <i className="fa-solid fa-bars" style={{color: '#ffffff', fontSize: '20px'}}></i>
      </button>
      </div>
      {searchOpen && <Search handleCloseButtonClick={handleCloseButtonClick} />}
    </>
  );
}