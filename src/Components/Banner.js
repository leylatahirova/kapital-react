import React, { useState } from 'react';
import './Banner.css';
import bannerImage1 from '../kptl/kb-life1703580859.png';
import bannerImage2 from '../kptl/depozit-91701777566.png';
import bannerImage3 from '../kptl/ipoteka-krediti1655890221.png';
import bannerImage4 from '../kptl/heftesonu-is-rejimi1639578179.webp';


export default function Banner() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const bannerImages = [
    { path: bannerImage1, width: '500px'},
    { path: bannerImage2, width: '313px'},
    { path: bannerImage3, width: '313px'},
    { path: bannerImage4, width: '500px'},
  ];
  const bannerTexts = [
    { title: 'Karyera imkanları', description: '"Kapital Bank Life" səhifəmizdə!', titleFontSize: '34px', descriptionFontSize: '34px' },
    { title: 'Yüksəlmiş faizlə', description: 'gəliriniz çoxalsın!', titleFontSize: '34px', descriptionFontSize: '34px'  },
    { title: 'İpoteka krediti', description: 'Mənzil sahibi olmaq və ya yeniləmək istəyənlər üçün', titleFontSize: '34px', descriptionFontSize: '18px'  },
    { title: 'Həftəsonu iş rejimi', description: 'Bir çox filiallarımız şənbə və bazar günü də fəaliyyət göstərir',titleFontSize: '34px', descriptionFontSize: '18px' }
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
              style={{ fontWeight: 700, color: '#2e3131', fontSize: bannerTexts[currentBanner].titleFontSize }}>
            {bannerTexts[currentBanner].title}
          </p>
          <p 
              className="banner-p" 
              style={{ fontWeight: 500, color: '#2e3131', fontSize: bannerTexts[currentBanner].descriptionFontSize }}>
            {bannerTexts[currentBanner].description}
          </p>
          <button className="banner-button">Daha ətraflı</button>
        </div>
        <div className="banner-image">
          <img 
              className="banner-image1" 
              src={bannerImages[currentBanner].path}  
              style={{ width: bannerImages[currentBanner].width, height: bannerImages[currentBanner].height }}  
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

