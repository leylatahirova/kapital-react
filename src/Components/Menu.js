import React, { useState } from "react";
import "./Menu.css";
import kptlLogo from "../kptl/kptl1-01.svg";
import MenuDropdown from "./MenuDropdown";

export default function Menu({ isSearchOpen }) {
  const [activeItem, setActiveItem] = useState(null);
  const menuClass = isSearchOpen ? "hide" : "";

  const handleItemClick = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };

  const dropdownStyles = {
    cards: { position: "absolute", left: "100px" },
    loans: { position: "absolute", left: "200px" },
    mortgages: { position: "absolute", left: "-300px" },
  };

  return (
    <div className={`main-menu ${menuClass}`}>
      <div className="menu-container">
        <ul className="menu-ul">
          <li
            className={`menu-li ${activeItem === "cards" ? "active" : ""}`}
            onMouseEnter={() => setActiveItem("cards")}
            onMouseLeave={() => setActiveItem(null)}
          >
            <a className="menu-a" href="https://www.kapitalbank.az/cards">
              KARTLAR
            </a>
            {activeItem === "cards" && (
              <MenuDropdown style={dropdownStyles.cards} />
            )}
          </li>
          <li
            className={`menu-li ${activeItem === "loans" ? "active" : ""}`}
            onMouseEnter={() => setActiveItem("loans")}
            onMouseLeave={() => setActiveItem(null)}
          >
            <a className="menu-a" href="https://www.kapitalbank.az/loans">
              KREDİTLƏR
            </a>
            {activeItem === "loans" && (
              <MenuDropdown style={dropdownStyles.cards} />
            )}
          </li>
          <li className="menu-li">
            <a
              className="menu-a"
              href="https://ipoteka.kapitalbank.az/?tvr_id=22dc02e1-44a1-4394-aed7-ceaa1ea7d4cf"
            >
              İPOTEKALAR
            </a>
          </li>
          <li
            className={`menu-li ${activeItem === "deposits" ? "active" : ""}`}
            onMouseEnter={() => setActiveItem("deposits")}
            onMouseLeave={() => setActiveItem(null)}
          >
            <a className="menu-a" href="https://www.kapitalbank.az/deposits">
              DEPOZİTLƏR
            </a>
            {activeItem === "deposits" && (
              <MenuDropdown style={dropdownStyles.deposits} />
            )}
          </li>
          <li
            className={`menu-li ${
              activeItem === "moneyTransfer" ? "active" : ""
            }`}
            onMouseEnter={() => setActiveItem("moneyTransfer")}
            onMouseLeave={() => setActiveItem(null)}
          >
            <a
              className="menu-a"
              href="https://www.kapitalbank.az/money-transfers"
            >
              PUL KÖÇÜRMƏLƏRİ
            </a>
            {activeItem === "moneyTransfer" && (
              <MenuDropdown style={dropdownStyles.moneyTransfer} />
            )}
          </li>
          <li 
              className={`menu-li ${
              activeItem === "onlineServices" ? "active" : ""
            }`}
            onMouseEnter={() => setActiveItem("onlineServices")}
            onMouseLeave={() => setActiveItem(null)}>
            <a
              className="menu-a"
              href="https://www.kapitalbank.az/online-order"
            >
              ONLAYN XİDMƏTLƏR
            </a>
            {activeItem === "onlineServices" && (
              <MenuDropdown style={dropdownStyles.onlineServices} />
            )}
          </li>
          <li className="menu-li">
            <a
              className="menu-a"
              href="https://www.kapitalbank.az/kampaniyalar"
            >
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
