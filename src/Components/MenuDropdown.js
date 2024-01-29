import React, { useState } from "react";
import "./MenuDropdown.css";
import cashbackDebet from "../kptl/birbank-cashback-debet1656680037.png";
import dailyLoan from "../kptl/daily-loan3.png";
import deposite from "../kptl/depozit-2.png";
import bblogo from "../kptl/bblogo.png";

export default function DropdownContent() {
  const [dropdownData, setDropdownData] = useState([
    {
      items: [
        "Taksit kartlar",
        "Debet kartlar",
        "Hədiyyə kartı",
        "Kartlar üzrə xidmətlər",
        "Təhlükəsizlik qaydaları",
        "3D secure",
        "Kart sifarişi",
        "Birbank kartının eyniləşdirilməsi",
      ],
      title: "Birbank Cashback taksit",
      description:
        "Kartla edilən nağdsız ödənişlərə minimum 1.5%-dən başlayan keşbek, faizsiz və komissiyasız taksit imkanı verən unikal bir kartdır.",
      buttonText: "Bir kliklə sifariş et",
      image: cashbackDebet,
    },

    {
      items: [
        "Nağd kreditin maksimal məbləğini artırdıq!",
        "Nağd pul krediti",
        "Mikro Biznes Kreditləri",
        "Əmanət təminatlı kredit",
        "Avtomobil krediti",
        "Daşınmaz əmlak təminatlı kredit",
      ],
      title: "Nağd pul krediti",
      description: "30000 AZN dək Nağd pul krediti",
      buttonText: "Bir kliklə sifariş et",
      image: dailyLoan,
    },

    {
      items: ["Kapital depoziti", "Müddətsiz depozit", "Depozit seyfləri"],
      title: "Kapital depoziti",
      description:
        "Yüksək faiz əldə etməklə yanaşı, müqavilənin bitmə tarixinə 1 ay (30 təqvim günü) qalanadək məbləğı artırın.",
      buttonText: "Daha ətraflı",
      image: deposite,
    },

    {
      items: ["Birbank", "Xəzri", "Zolotaya Korona", "Western Union"],
      title: "Birbank",
      description:
        "Birbankla istənilən karta pul köçürün! Artıq Birbankla telefonunuzdan istənilən bank kartına asanlıqla pul göndərə bilərsiniz.",
      buttonText: "Daha ətraflı",
      image: bblogo,
    },

    {
      items: [
        "Taksit kartlar",
        "Debet kartlar",
        "Hədiyyə kartı",
        "Kartlar üzrə xidmətlər",
        "Təhlükəsizlik qaydaları",
        "3D secure",
        "Kart sifarişi",
        "Birbank kartının eyniləşdirilməsi",
      ],
      title: "Birbank Cashback taksit",
      description:
        "Kartla edilən nağdsız ödənişlərə minimum 1.5%-dən başlayan keşbek, faizsiz və komissiyasız taksit imkanı verən unikal bir kartdır.",
      buttonText: "Bir kliklə sifariş et",
      image: cashbackDebet,
    },
  ]);

  const { items, title, description, buttonText, image } = dropdownData[0];

  return (
    <div className="dropdown-content">
      <div className="dropdown-col1">
        <ul className="dropdown-col1-ul1">
          {items.slice(0, 3).map((item, index) => (
            <li
              className="dropdown-col1-li"
              style={{ fontWeight: 600 }}
              key={index}
            >
              {item}
            </li>
          ))}
          <li className="dropdown-col1-li">{items[3]}</li>
        </ul>
        <ul className="dropdown-col1-ul2">
          {items.slice(4).map((item, index) => (
            <li className="dropdown-col1-li" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown-col2">
        <div className="drp-c1">
          <h2>{title}</h2>
          <p style={{ paddingBottom: "30px" }}>{description}</p>
          <button className="dropdown-button">{buttonText}</button>
        </div>
        <div>
          <img src={image} width="130px" alt="cashbackDebet" />
        </div>
      </div>
    </div>
  );
}
