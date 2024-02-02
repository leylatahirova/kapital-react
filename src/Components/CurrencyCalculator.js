import React, { useState, useEffect } from 'react';
import "./CurrencyCalculator.css";

export default function CurrencyCalculator() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('AZN');
  const [operation, setOperation] = useState('sell');
  const [isActiveButton1, setIsActiveButton1] = useState(true);
  const [isActiveButton2, setIsActiveButton2] = useState(false);

  const exchangeRates = {
    USD: { buy: 1.7, sell: 1.6 },
    EUR: { buy: 1.9, sell: 1.8 },
    AZN: { buy: 1, sell: 1 },
  };

  const [convertedAmount, setConvertedAmount] = useState(amount);

  useEffect(() => {
    const convertAmount = () => {
      if (fromCurrency === toCurrency) {
        setConvertedAmount(amount);
      } else {
        const rate = operation === 'sell' ? exchangeRates[fromCurrency].sell : exchangeRates[fromCurrency].buy;
        setConvertedAmount(amount * rate);
      }
    };

    convertAmount();
  }, [amount, fromCurrency, toCurrency, operation, exchangeRates]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleOperationChange = (selectedOperation) => {
    setOperation(selectedOperation);
    setIsActiveButton1(selectedOperation === 'sell');
    setIsActiveButton2(selectedOperation === 'buy');
  };

  return (
    <section className="currency-calculator">
      <div className="calculator-info">
        <div className="currency-calculator-col1">
          <div className="currency-calculator-text1">
            <p className="currency-calculator-h2" style={{ fontSize: "38px", color: "#2e3131" }}>
              Valyuta <strong style={{ fontWeight: 600, color: "#2e3131" }}>kalkulyatoru</strong>
            </p>
            <p className="currency-calculator-p" style={{ fontWeight: 300 }}>
              Bəzi filiallar üzrə fərqli məzənnələr təyin edilə bilər
            </p>
          </div>
          <table className="currency-calculator-table">
            <tbody>
              <tr>
                <td className="td-head">Valyuta</td>
                <td className="td-head">Alış</td>
                <td className="td-head">Satış</td>
              </tr>
              <tr>
                <td className="td-1">USD</td>
                <td className="td-1">{exchangeRates.USD.buy}</td>
                <td className="td-2">{exchangeRates.USD.sell}</td>
              </tr>
              <tr>
                <td className="td-1">EUR</td>
                <td className="td-1">{exchangeRates.EUR.buy}</td>
                <td className="td-2">{exchangeRates.EUR.sell}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="currency-calculator-col2">
          <div className="currency-calculator-buttons">
            <button
              className={`currency-calculator-button1 ${isActiveButton1 ? 'active' : ''}`}
              onClick={() => handleOperationChange('sell')}
            >
              Mən satıram
            </button>
            <button
              className={`currency-calculator-button2 ${isActiveButton2 ? 'active' : ''}`}
              onClick={() => handleOperationChange('buy')}
            >
              Mən alıram
            </button>
          </div>
          <div className="currency-calculator-drop">
            <input className="currency-calculator-input" type="text" value={amount} onChange={handleAmountChange} />
            <select className="currency-calculator-dropdown" value={fromCurrency} onChange={handleFromCurrencyChange}>
              {Object.keys(exchangeRates).map(currency => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>
          <p style={{ fontWeight: 300, paddingTop: "10px", paddingBottom: "10px" }}>Məbləği daxil edin</p>
          <table>
            <tbody className='amount'>
              <tr>
                <td className="td-3">{convertedAmount.toFixed(2)}</td>
                <td className="td-4">{toCurrency}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="currency-information-col1-p3">
        <a className="information-col1-p3" href="https://www.kapitalbank.az/currency-rates/11-01-2024">
          Daha ətraflı &nbsp; <i className="fa-solid fa-arrow-right" style={{ color: "#ef3e42" }}></i>
        </a>
      </div>
    </section>
  );
}
