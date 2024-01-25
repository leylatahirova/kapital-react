import React from 'react'
import "./News.css";

export default function News() {
  return (
    <section className="latest-news">
      <div className="news-container">
        <div className="news-heading">
          <h1 className="news-h1">Xəbərlər</h1>
          <p className="news-p">Bütün xəbərlər&nbsp;<i className="fa-solid fa-arrow-right" style={{ color: "#f45369" }}></i></p>
        </div>
        <div className="news-line"></div>
        <div className="news-col">
          <div className="news-col1">
            <div className="news-col-left">
              <div className="news-circle">
                <p className="news-circle-p1">30</p>
              </div>
              <div>
                <p className="news-circle-p2">Dekabr</p>
              </div>
            </div>
            <div>
              <p className="news-p2">Birbank Biznes yeni "Nağd təminatlı qarantiya" məhsulunu təqdim edir</p>
            </div>
          </div>
          <div className="news-col2">
            <div className="news-col-left">
              <div className="news-circle">
                <p className="news-circle-p1">30</p>
              </div>
              <div>
                <p className="news-circle-p2">Dekabr</p>
              </div>
            </div>
            <div>
              <p className="news-p2">Birbank Biznes yeni "Nağd təminatlı qarantiya" məhsulunu təqdim edir</p>
            </div>
          </div>
          <div className="news-col2">
            <div className="news-col-left">
              <div className="news-circle">
                <p className="news-circle-p1">30</p>
              </div>
              <div>
                <p className="news-circle-p2">Dekabr</p>
              </div>
            </div>
            <div>
              <p className="news-p2">Birbank Biznes yeni "Nağd təminatlı qarantiya" məhsulunu təqdim edir</p>
            </div>
          </div>
          <i className="fa-solid fa-chevron-right" style={{ color: "#bdc3c7", fontSize: "26px" }}></i>
        </div>
      </div>
    </section>
  );
}
