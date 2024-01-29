import React from 'react';
import "./Information.css";
import cashPayment from '../kptl/cashPayment1.png';
import info2 from '../kptl/90789318742-min.png'


export default function Information() {
    return (
      <div className="info-section1">
        <div className="online-payment">
          <div className="online-payment-div1">
            <h1 className="information-col1-h1">Onlayn kredit ödənişi</h1>
            <p className="information-col1-p2">Banka gəlmədən və növbələrdə vaxt  itirmədən kartınızla 4 addıma kredit  borcunuzun ödənişi.</p>
          </div>
          <div className="online-payment-div2">
            <a className="information-col1-p3" href="https://payments.kapitalbank.az/merchants/99">
              Ödəniş et &nbsp;<i className="fa-solid fa-arrow-right" style={{ color: "#ef3e42" }}></i>
            </a>
          </div>
          <div className="online-payment-div3">
            <img className="information-col1-img" src={cashPayment} width="240px" alt="" />
          </div>
        </div>
        <div className="hr-opportunities">
          <div className="hr-opportunities-div1">
            <h1 className="information-col2-h1">İnsan resursları</h1>
            <p className="information-col2-p2">Kapital Bankın peşəkarlar komandasına  qoşulmaq istəyirsinizsə, Sizi müvafiq  vakansiyaya müraciət etməyə dəvət edirik. Biz sizə dinamik mühitdə maraqlı və <br /> perspektivli iş təklif edirik.</p>
          </div>
          <div className="hr-opportunities-div2">
            <a className="information-col2-p3" href="https://hr.kapitalbank.az/">
              Daha ətraflı &nbsp; <i className="fa-solid fa-arrow-right" style={{ color: "#ffffff" }}></i>
            </a>
          </div>
          <div className="hr-opportunities-div3">
            <img src={info2} width="230px" alt="" />
          </div>
        </div>
      </div>
    );
  }