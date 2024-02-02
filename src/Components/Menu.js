import React, { useState } from "react";
import "./Menu.css";
import kptlLogo from "../kptl/kptl1-01.svg";
import MenuDropdown from "./MenuDropdown";

export default function Menu({ isSearchOpen }) {
  const [activeItem, setActiveItem] = useState(null);
  const menuClass = isSearchOpen ? "hide" : "";


  const dropdownStyles = {
    cards: { position: "absolute", left: "50%", transform: "translateX(-50%)" },
    loans: { position: "absolute", left: "50%", transform: "translateX(-50%)" },
    deposits: { position: "absolute", left: "50%", transform: "translateX(-50%)" },
    moneyTransfer: { position: "absolute", left: "50%", transform: "translateX(-50%)" },
    onlineServices: { position: "absolute", left: "50%", transform: "translateX(-50%)" },
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
              <MenuDropdown selectedIndex={0} style={dropdownStyles.cards} />
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
            {/* {activeItem === "loans" && (
              <MenuDropdown selectedIndex={1} style={dropdownStyles.cards} />
            )} */}
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
            {/* {activeItem === "deposits" && (
              <MenuDropdown selectedIndex={2} style={dropdownStyles.deposits} />
            )} */}
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
            {/* {activeItem === "moneyTransfer" && (
              <MenuDropdown selectedIndex={3} style={dropdownStyles.moneyTransfer} />
            )} */}
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
            {/* {activeItem === "onlineServices" && (
              <MenuDropdown selectedIndex={4} style={dropdownStyles.onlineServices} />
            )} */}
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
