import React from 'react';
import "./MenuDropdown.css";

export default function DropdownContent(){
  return (
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
  );
};

 