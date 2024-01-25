import React from 'react';
import "./Operation.css";
import icon1 from "../kptl/operation1.png"
import icon2 from "../kptl/birbank-karti.svg"
import icon3 from "../kptl/operation2.png"
import icon4 from "../kptl/operation3.png"
import icon5 from "../kptl/operation4.png"

export default function Operation () {
  return (
    <section className="quick-operations">
      <div className="operation-item">
        <a className="operations-a" href="https://www.kapitalbank.az/kampaniyalar/birkarti-onlayn-sifaris-et-kafe-ve-supermarketlerde-5-faiz-kesbek-qazan">
          <img className="operations-img" src={icon1} width="50px" alt="" />
          <p className="operations-p">
            <strong>Kredit</strong> sifariş et
          </p>
        </a>
      </div>
      <div className="operation-item">
        <a className="operations-a" href="https://ccl.kapitalbank.az/az/order/step/GTKR?t=kb&tvr_id=b74c0aef-83c1-4c00-bf28-235bd0fb206c">
          <img className="operations-img" src={icon2} width="50px" alt="" />
          <p className="operations-p">
            <strong>Birbank kartı</strong> <br/> sifariş et
          </p>
        </a>
      </div>
      <div className="operation-item">
        <a className="operations-a" href="https://ipoteka.kapitalbank.az/?tvr_id=b74c0aef-83c1-4c00-bf28-235bd0fb206c">
          <img className="operations-img" src={icon3} width="50px" alt="" />
          <p className="operations-p">
            <strong>Depozit</strong>&nbsp;sifariş et
          </p>
        </a>
      </div>
      <div className="operation-item">
        <a className="operations-a" href="https://www.kapitalbank.az/cards/simpleCards">
          <img className="operations-img" src={icon4} width="50px" alt="" />
          <p className="operations-p">
            <strong>Debet kart</strong>&nbsp;sifariş et
          </p>
        </a>
      </div>
      <div className="operation-item">
        <a className="operations-a" href="https://www.kapitalbank.az/kampaniyalar">
          <img className="operations-img" src={icon5} width="50px" alt="" />
          <p className="operations-p">
            <strong>Kampaniyalara</strong>&nbsp;bax
          </p>
        </a>
      </div>
    </section>
  );
}

