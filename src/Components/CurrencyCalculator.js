import React from 'react'
import "./CurrencyCalculator.css";


export default function CurrencyCalculator() {
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
                  <td className="td-1">1.697</td>
                  <td className="td-2">1.702</td>
                </tr>
                <tr>
                  <td className="td-1">EUR</td>
                  <td className="td-1">1.8582</td>
                  <td className="td-2">1.9037</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="currency-calculator-col2">
            <div className="currency-calculator-buttons">
              <button className="currency-calculator-button1">Mən satıram</button>
              <button className="currency-calculator-button2">Mən alıram</button>
            </div>
            <div className="currency-calculator-drop">
              <input className="currency-calculator-input" type="text" />
              <select className="currency-calculator-dropdown">
                {/* <i className="fa-solid fa-chevron-down" style={{ color: "#ef3d42" }}></i> */}
                <option value="">AZN</option>
                <option value="1">USD</option>
                <option value="0">EUR</option>
              </select>
            </div>
            <p style={{ fontWeight: 300, paddingTop: "10px", paddingBottom: "10px" }}>Məbləği daxil edin</p>
            <table>
              <tbody>
                <tr>
                  <td className="td-3">58.75</td>
                  <td className="td-4">USD</td>
                </tr>
                <tr>
                  <td className="td-3">52.92</td>
                  <td className="td-4">EUR</td>
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