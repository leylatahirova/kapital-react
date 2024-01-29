import React, {useState} from 'react';
import "./Card.css";
import cashback1 from "../kptl/birbank-cashback-home (1).png"
import cashback2 from "../kptl/birbank-umico-home.png"
import cashback3 from "../kptl/birbank-miles-home.png"
import cashback4 from "../kptl/birbank-umico-premium-home.png"


const cardData = [
  {
    image: cashback1,
    heading: 'Birbank Cashback taksit',
    description: 'Kartla edilən nağdsız ödənişlərə minimum 1.5%-dən başlayan keşbek, faizsiz və komissiyasız taksit imkanı verən unikal bir kartdır.',
    features: [
      { text: '30%-dək keşbek', subText: 'Bonus' },
      { text: 'pulsuz', subText: 'Kartın qiyməti' },
      { text: '63 günədək', subText: 'Güzəşt müddəti' },
    ],
    orderLink: 'https://ccl.kapitalbank.az/az/order/step/BRCB_BLACK?t=kb&tvr_id=b74c0aef-83c1-4c00-bf28-235bd0fb206c',
  },

  {
    image: cashback2,
    heading: 'Birbank Umico taksit',
    description: 'Gündəlik alış-veriş üçün olan, kredit və taksit kartı imkanlarını birləşdirən, Umico bonusları qazanma imkanını təqdim edən unikal bir kartdır.',
    features: [
      { text: '1.4%-dən başlayan', subText: 'Keşbek' },
      { text: 'pulsuz', subText: 'Kartın qiyməti' },
      { text: '63 günədək', subText: 'Güzəşt müddəti' },
    ],
    orderLink: 'https://ccl.kapitalbank.az/az/order/step/BRCB_BLACK?t=kb&tvr_id=b74c0aef-83c1-4c00-bf28-235bd0fb206c',
  },
  {
    image: cashback3,
    heading: 'Birbank Miles taksit',
    description: 'Kartla edilən nağdsız ödənişlərə 1 AZN-ə 1 mil bonus qazandıran, pulsuz səyahət, faizsiz və komissiyasız taksit imkanı verən unikal bir kartdır.',
    features: [
      { text: '1 AZN=1 Mil', subText: 'Millərin toplanması'},
      { text: 'pulsuz', subText: 'Kartın qiyməti' },
      { text: '63 günədək', subText: 'Güzəşt müddəti' },
    ],
    orderLink: 'https://ccl.kapitalbank.az/az/order/step/BRCB_BLACK?t=kb&tvr_id=b74c0aef-83c1-4c00-bf28-235bd0fb206c',
  },

  {
    image: cashback4,
    heading: 'Birbank Umico taksit',
    description: ' Kapital Bank və Umiconun birgə təqdim etdiyi, gündəlik alış-veriş üçün nəzərdə tutulan, kredit və taksit kartı imkanlarını birləşdirən unikal bir kartdır. ',
    features: [
      { text: '1.4%-dən başlayan', subText: 'Keşbek' },
      { text: 'pulsuz', subText: 'Kartın qiyməti' },
      { text: '63 günədək', subText: 'Güzəşt müddəti' },
    ],
    orderLink: 'https://ccl.kapitalbank.az/az/order/step/BRCB_BLACK?t=kb&tvr_id=b74c0aef-83c1-4c00-bf28-235bd0fb206c',
  },

];

export default function Card() {
  const [currentCard, setCurrentCard] = useState(0);

  const handlePrevCard = () => {
    setCurrentCard((prevCard) => (prevCard === 0 ? cardData.length - 1 : prevCard - 1));
  };

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard === cardData.length - 1 ? 0 : prevCard + 1));
  };

  return (
    <section className="credit-cards">
      <div className="cards-info">
        <p className="cards-section-heading-p1">
          {cardData[currentCard].heading}
        </p>
        <p className="cards-section-heading-p2">
          {cardData[currentCard].description}
        </p>
      </div>
      <div className="cards-section-bottom">
        <div className="cards-section-div">
          <ul className="cards-section-ul">
            {cardData[currentCard].features.map((feature, index) => (
              <li className="cards-section-li" key={index}>
                <p style={{fontWeight: 'bold', margin: '0', padding: '0'}} className="cards-section-p">{feature.text}</p>
                <br style={{ margin: '0', padding: '0' }}/> {feature.subText}
              </li>
            ))}
          </ul>
          <button className="cards-section-button">
            <a className="cards-section-button-a" href={cardData[currentCard].orderLink}>
              Sifariş et
            </a>
          </button>
        </div>
        <div className="cards-section-image">
          <img src={cardData[currentCard].image} width="360px" alt="" />
        </div>
        <div className="cards-section-chevron1" onClick={handlePrevCard} style={{ cursor: 'pointer' }} >
          <i className="fa-solid fa-chevron-left" style={{ color: '#bdc3c7' }}></i>
        </div>
        <div className="cards-section-chevron2" onClick={handleNextCard} style={{ cursor: 'pointer' }} >
          <i className="fa-solid fa-chevron-right" style={{ color: '#bdc3c7' }}></i>
        </div>
      </div>
    </section>
  );
}