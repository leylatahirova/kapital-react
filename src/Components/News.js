import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './News.css';

export default function News() {
  const newsItems = [
    { day: 30, month: "Dekabr", content: "Birbank Biznes yeni 'Nağd təminatlı qarantiya' məhsulunu təqdim edir" },
    { day: 30, month: "Dekabr", content: "Birbank Biznes yeni 'Nağd təminatlı qarantiya' məhsulunu təqdim edir" },
    { day: 30, month: "Dekabr", content: "Birbank Biznes yeni 'Nağd təminatlı qarantiya' məhsulunu təqdim edir" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };

  return (
    <section className="latest-news">
      <div className="news-container">
        <div className="news-heading">
          <h1 className="news-h1">Xəbərlər</h1>
          <p className="news-p">
            Bütün xəbərlər&nbsp;
            <FontAwesomeIcon icon={faChevronRight} style={{ color: "#f45369", }} onClick={handleNext} />
          </p>
        </div>
        <div className="news-line"></div>
        <div className="news-col">
          {newsItems.map((item, index) => (
            <div
              className={`news-col2 ${index === activeIndex ? 'active' : ''}`} key={index}
            >
              <div className="news-col-left">
                <div className="news-circle">
                  <p className="news-circle-p1">{item.day}</p>
                </div>
                <div>
                  <p className="news-circle-p2">{item.month}</p>
                </div>
              </div>
              <div>
                <p className="news-p2">{item.content}</p>
              </div>
            </div>
          ))}
         
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ color: "#bdc3c7", fontSize: "26px" }}
            onClick={handleNext}
          />
         
        </div>
      </div>
    </section>
  );
}
