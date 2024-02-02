import React from "react";
import logo from "../kptl/small-logo.svg";
import "./Search.css"

export default function Search({ handleCloseButtonClick }) {
  return (
    <div id="searchSection" className="search-section">
      <div className="search-row">
        <div className="row-1">
          <img style={{ width: "40px" }} src={logo} alt="" />
          <i className="fa-solid fa-magnifying-glass" style={{ color: "#2e3131", fontSize: "18px" }}></i>
          <input className="search-input" type="text" placeholder="Sorğunuzu daxil edin" />
        </div>
        <div className="row-2">
          <p style={{ color: "#ef3d42", fontSize: "16px" }}>Axtar</p>
          <i className="fa-solid fa-circle-xmark" style={{ color: "#979898", fontSize: "22px", cursor: 'pointer', paddingBottom:"12px" }} onClick={handleCloseButtonClick}  ></i>
        </div>
      </div>
      <div className="search-col1">
        <ul className="search-col1-ul">
          <li className="search-col1-li">
            <a className="search-col1-a" href="https://ccl.kapitalbank.az/az/order/BRCB_BLACK?t=kb">
              Birbank kartı al
            </a>
          </li>
          <li className="search-col1-li">
            <a className="search-col1-a" href="https://ccl.kapitalbank.az/az/order/GTKR?t=kb">
              kredit əldə et
            </a>
          </li>
          <li className="search-col1-li">
            <a className="search-col1-a" href="https://www.kapitalbank.az/cards/simpleCards">
              kart sifarişi
            </a>
          </li>
          <li className="search-col1-li">
            <a className="search-col1-a" href="https://payments.kapitalbank.az/merchants/99?menbe=searchbar">
              kredit ödənişi
            </a>
          </li>
          <li className="search-col1-li">
            <a className="search-col1-a" href="https://payments.kapitalbank.az/merchants/12?menbe=searchbar">
              kommunal ödənişlər
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}