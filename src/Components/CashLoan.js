import React from 'react'
import "./CashLoan.css";
import dailyLoan from "../kptl/daily-loan3.png"

export default function CashLoans() {
  return (
    <section className="cash-loans">
      <div className="loan-info">
        <p className="cash-loan-heading-p1">Nağd <strong>pul krediti</strong></p>
        <p className="cash-loan-heading-p2">30000 AZN-dək, arzularınızı reallaşdırmaq və ya ehtiyaclarınızı ödəmək üçün nağd kredit təklif edirik.</p>
      </div>
      <div className="cash-loan-section-bottom">
        <div className="cash-loan-section-image">
          <img src={dailyLoan} width="540px" alt="" />
        </div>
        <div className="cash-loan-section-div">
          <ul className="cash-loan-section-ul">
            <li className="cash-loan-section-li">
              <p className="cash-loan-section-p" style={{fontWeight: 'bold'}}>30 000 AZN-dək</p>
              <br style={{ paddingBottom: "40px" }} />Kredit məbləği
            </li>
            <li className="cash-loan-section-li">
              <p className="cash-loan-section-p" style={{fontWeight: 'bold'}}>59 ayadək</p>
              <br />Kredit müddəti
            </li>
            <li className="cash-loan-section-li">
              <p className="cash-loan-section-p" style={{fontWeight: 'bold'}}>10.9%-dən</p>
              <br />İllik faiz dərəcəsi
            </li>
          </ul>
          <button className="cash-loan-section-button">
            <a className="cash-loan-section-button-a" href="https://ccl.kapitalbank.az/az/order/step/BRCB_BLACK?t=kb&tvr_id=b74c0aef-83c1-4c00-bf28-235bd0fb206c">Sifariş et</a>
          </button>
        </div>
      </div>
    </section>
  );
}

