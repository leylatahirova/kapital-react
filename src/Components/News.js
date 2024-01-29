import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./News.css";

export default function News() {
  const newsItems = [
    {
      day: 19,
      month: "Dekabr",
      content:
        "Birbank Biznes yeni 'Nağd təminatlı qarantiya' məhsulunu təqdim edir",
    },
    {
      day: 20,
      month: "Dekabr",
      content: " Kapital Bank “Euromoney” beynəlxalq forumunda iştirak etdi",
    },
    {
      day: 21,
      month: "Dekabr",
      content: " Kapital Bank depozit faizlərini 10%-ə qaldırdı",
    },
    {
      day: 22,
      month: "Dekabr",
      content: " Kapital Bank “Euromoney” beynəlxalq forumunda iştirak etdi",
    },
    {
      day: 23,
      month: "Dekabr",
      content: " Kapital Bank depozit faizlərini 10%-ə qaldırdı ",
    },
    {
      day: 24,
      month: "Dekabr",
      content: " Kapital Bank 2023-cü ilin nəticələrini elan edib ",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide(
      (prevSlide) => (prevSlide + 1) % Math.ceil(newsItems.length / 3)
    );
  };

  const startIndex = activeSlide * 3;
  const endIndex = startIndex + 3;
  const activeItems = newsItems.slice(startIndex, endIndex);

  return (
    <section className="latest-news">
      <div className="news-container">
        <div className="news-heading">
          <h1 className="news-h1">Xəbərlər</h1>
          <p className="news-p">
            Bütün xəbərlər&nbsp;
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: "#f45369" }}
              onClick={handleNext}
            />
          </p>
        </div>
        <div className="news-line"></div>
        <div className="news-col">
          {activeItems.map((item, index) => (
            <div className={"news-col2"} key={index}>
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
            style={{ color: "#bdc3c7", fontSize: "26px", cursor: "pointer" }}
            onClick={handleNext}
          />
        </div>
      </div>
    </section>
  );
}
