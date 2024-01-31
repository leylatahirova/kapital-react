import React, { useState } from 'react';
import styled from 'styled-components';
import './Banner.css';
import bannerImage1 from '../kptl/kb-life1703580859.png';
import bannerImage2 from '../kptl/depozit.png';
import bannerImage3 from '../kptl/ipoteka.png';


export default function Banner() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const bannerImages = [
    { path: bannerImage1, },
    { path: bannerImage2, },
    { path: bannerImage3, },
  ];

  const bannerTexts = [
    { title: 'Karyera imkanları', description: '"Kapital Bank Life" səhifəmizdə!', titleFontSize: '36px', descriptionFontSize: '30px' },
    { title: 'Yüksəlmiş faizlə', description: 'gəliriniz çoxalsın!', titleFontSize: '34px', descriptionFontSize: '34px'  },
    { title: 'İpoteka krediti', description: 'Mənzil sahibi olmaq və ya yeniləmək istəyənlər üçün', titleFontSize: '34px', descriptionFontSize: '18px'  },
  ];

  const handlePrevBanner = () => {
    setCurrentBanner((prevBanner) => (prevBanner === 0 ? bannerImages.length - 1 : prevBanner - 1));
  };

  const handleNextBanner = () => {
    setCurrentBanner((prevBanner) => (prevBanner === bannerImages.length - 1 ? 0 : prevBanner + 1));
  };

  return (
    <div className="promo-banner">
      <div className="promo-banner-container">
        <div className="banner-text">
          <p 
              className="banner-p" 
              style={{ fontWeight: 800, color: '#2e3131', fontSize: bannerTexts[currentBanner].titleFontSize }}>
            {bannerTexts[currentBanner].title}
          </p>
          <p 
              className="banner-p" 
              style={{ fontWeight: 600, color: '#2e3131', fontSize: bannerTexts[currentBanner].descriptionFontSize }}>
            {bannerTexts[currentBanner].description}
          </p>
          <button className="banner-button">Daha ətraflı</button>
        </div>
        <div className="banner-image">
          <img 
              className="banner-image1" 
              src={bannerImages[currentBanner].path}  
              alt="" />
        </div>
      </div>
      <div>
        <div className="banner-section-chevron1" onClick={handlePrevBanner} style={{ cursor: 'pointer' }} >
          <i className="fa-solid fa-chevron-left" style={{ color: '#bdc3c7' }}></i>
        </div>
        <div className="banner-section-chevron2" onClick={handleNextBanner} style={{ cursor: 'pointer' }} >
          <i className="fa-solid fa-chevron-right" style={{ color: '#bdc3c7' }}></i>
        </div>
      </div>
    </div>
  );
}





















// import React from 'react';
// import './Banner.css';
// import bannerImage from '../kptl/kb-life1703580859.png';

// export default function Banner () {
//   return (
//     <div className="promo-banner">
//       <div className="promo-banner-container">
//         <div className="banner-text">
//           <p className="banner-p" style={{ fontWeight: 700, color: '#2e3131' }}>Karyera imkanları</p>
//           <p className="banner-p" style={{ fontWeight: 500, color: '#2e3131' }}>"Kapital Bank Life" səhifəmizdə!</p>
//           <button className="banner-button">Daha ətraflı</button>
//         </div>
//         <div className="banner-image">
//           <img className="banner-image1" src={bannerImage} width="500px" alt="" />
//         </div>
//       </div>
//       <div>
//         <div className="banner-section-chevron1">
//           <i className="fa-solid fa-chevron-left" style={{ color: '#bdc3c7' }}></i>
//         </div>
//         <div className="banner-section-chevron2">
//           <i className="fa-solid fa-chevron-right" style={{ color: '#bdc3c7' }}></i>
//         </div>
//       </div>
//     </div>
//   );
// };

