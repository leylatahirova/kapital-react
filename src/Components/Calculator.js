import React, { useState, useEffect } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import "./Calculator.css";

export default function Calculator() {
  const [value1, setValue1] = useState(300);
  const [value2, setValue2] = useState(10.9);
  const [value3, setValue3] = useState(3);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = () => {
    const amount = value1;
    const interest = value2;
    const term = value3;

    const monthlyInterest = interest / 100 / 12;
    const numberOfPayments = term;

    const numerator = amount * monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterest, numberOfPayments) - 1;
    const result = (numerator / denominator).toFixed(2);

    setMonthlyPayment(result);
  };

  useEffect(() => {
    calculateMonthlyPayment();
  }, [value1, value2, value3, calculateMonthlyPayment]);

  return (
    <section className="calculator-section">
      <div className="calc-container">
        <div className="calc-left">
          <h1 className="calc-left-h1">Kalkulyator</h1>
          <div className="calc-tabs">
            <a href="https://www.kapitalbank.az/" className="calculator-section-tab-active">
              Kredit
            </a>
            <a href="https://www.kapitalbank.az/" className="calculator-section-tab">
              Birbank kartı
            </a>
            <a href="https://www.kapitalbank.az/" className="calculator-section-tab">
              Depozit
            </a>
          </div>
          <div>
            <p className="calc-left-p1">Nağd pul krediti</p>
            <p className="calc-left-p2">
              Siz müştərilərimizə asanlıqla əldə edə biləcəyiniz nağd kredit
              təklif edirik.
            </p>
            <p className="calc-left-p3">
              % dərəcəsi rəsmiləşmə zamanı müəyyən olunacaq
            </p>
          </div>
          <div>
            <input
              className="calc-left-input"
              type="text"
              placeholder="Məbləğ"
              value={value1}
              onChange={(event) => setValue1(event.target.value)}
            />
          </div>
          <RangeSlider
            className="custom-range-slider"
            value={value1}
            min={300}
            max={30000}
            onChange={(changeEvent) => setValue1(changeEvent.target.value)}
          />
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="range-values"
          >
            <p style={{fontSize: "14px"}}>300</p>
            <p style={{fontSize: "14px"}}>30 000</p>
          </div>
          <div>
            <input
              className="calc-left-input"
              type="text"
              placeholder="Faiz"
              value={value2}
              onChange={(event) => setValue2(event.target.value)}
            />
          </div>
          <RangeSlider
            value={value2}
            min={10.9}
            max={20}
            onChange={(changeEvent) => setValue2(changeEvent.target.value)}
          />
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="range-values"
          >
            <p style={{fontSize: "14px"}}>10.9%</p>
            <p style={{fontSize: "14px"}}>20%</p>
          </div>
          <div>
            <input
              className="calc-left-input"
              type="text"
              placeholder="Müddət"
              value={value3}
              onChange={(event) => setValue3(event.target.value)}
            />
          </div>
          <RangeSlider
            value={value3}
            min={3}
            max={59}
            onChange={(changeEvent) => setValue3(changeEvent.target.value)}
          />
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="range-values"
          >
            <p style={{fontSize: "14px"}}>3 ay</p>
            <p style={{fontSize: "14px"}}>59 ay</p>
          </div>
        </div>
        <div className="calc-right">
          <p className="calc-right-heading">
            Nağd pul krediti üçün
            <br />
            aylıq ödəniş
          </p>
          <p className="calc-right-num">{monthlyPayment} ₼</p>
          <button
            className="calc-right-button"
            onClick={calculateMonthlyPayment}
          >
            Sifariş et
          </button>
        </div>
      </div>
    </section>
  );
}
