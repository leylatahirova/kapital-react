import React, { useState } from "react";
import "./Menu.css";
import "./MenuDropdown.css";
import kptlLogo from "../kptl/kptl1-01.svg";

export default function Menu({ isSearchOpen }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuClass = isSearchOpen ? "hide" : "";

    const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className={`main-menu ${menuClass}`}>
      <div className="menu-container">
        <ul className="menu-ul">
          <li 
            className="menu-li"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a className="menu-a" href="https://www.kapitalbank.az/cards">KARTLAR</a>
            {isDropdownOpen && (
                 <div className="dropdown-content">
                 <div className="dropdown-col1">
                   <ul className="dropdown-col1-ul1">
                     <li className="dropdown-col1-li" style={{ fontWeight: 600 }}>Taksit kartlar</li>
                     <li className="dropdown-col1-li" style={{ fontWeight: 600 }}>Debet kartlar</li>
                     <li className="dropdown-col1-li" style={{ fontWeight: 600 }}>Hədiyyə kartı</li>
                     <li className="dropdown-col1-li">Kartlar üzrə xidmətlər</li>
                   </ul>
                   <ul className="dropdown-col1-ul2">
                     <li className="dropdown-col1-li">Təhlükəsizlik qaydaları</li>
                     <li className="dropdown-col1-li">3D secure</li>
                     <li className="dropdown-col1-li">Kart sifarişi</li>
                   </ul>
                 </div>
                 <div className="dropdown-col2">
                   <div className="drp-c1">
                     <h2>Birbank Cashback taksit</h2>
                     <p style={{ paddingBottom: '30px' }}>Kartla edilən nağdsız ödənişlərə minimum 1.5%-dən başlayan keşbek, faizsiz və komissiyasız taksit imkanı verən unikal bir kartdır.</p>
                     <button className="dropdown-button">Bir kliklə sifariş et</button>
                   </div>
                   <div>
                     <img src="./kptl/birbank-cashback-debet1656680037.png" width="130px" alt="" />
                   </div>
                 </div>
               </div>
            )}
          </li>
          <li className="menu-li">
            <a className="menu-a" href="https://www.kapitalbank.az/loans">
              KREDİTLƏR
            </a>
          </li>
          <li className="menu-li">
            <a className="menu-a" href="https://ipoteka.kapitalbank.az/?tvr_id=22dc02e1-44a1-4394-aed7-ceaa1ea7d4cf">
              İPOTEKALAR
            </a>
          </li>
          <li className="menu-li">
            <a className="menu-a" href="https://www.kapitalbank.az/deposits">
              DEPOZİTLƏR
            </a>
          </li>
          <li className="menu-li">
            <a className="menu-a" href="https://www.kapitalbank.az/money-transfers">
              PUL KÖÇÜRMƏLƏRİ
            </a>
          </li>
          <li className="menu-li">
            <a className="menu-a" href="https://www.kapitalbank.az/online-order">
              ONLAYN XİDMƏTLƏR
            </a>
          </li>
          <li className="menu-li">
            <a className="menu-a" href="https://www.kapitalbank.az/kampaniyalar">
              KAMPANİYALAR
            </a>
          </li>
          <li className="menu-li">
            <a className="menu-a" href="https://private.kapitalbank.az/">
              FƏRDİ BANKÇILIQ
            </a>
          </li>
        </ul>
        <button className="menu-button">
          <a href="https://www.birbank.az/">
            <img src={kptlLogo} width="80px" alt="kptllogo" />
          </a>
        </button>
      </div>
    </div>
  );
}