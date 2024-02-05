import React, { useState } from 'react';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Banner from './Components/Banner';
import Operation from './Components/Operation';
import Card from './Components/Card';
import CashLoan from './Components/CashLoan';
import Calculator from './Components/Calculator';
import Information from './Components/Information';
import News from './Components/News';
import CurrencyCalculator from './Components/CurrencyCalculator';
import Footer from './Components/Footer';
import './App.css';
import './Components/mobileMedia.css';
import './Components/TabletMedia.css';



export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchButtonClick = () => {
    setIsSearchOpen(true);
  };


  return (
    <div className="App">
     <Header isSearchOpen={isSearchOpen}
        handleSearchButtonClick={handleSearchButtonClick} />
     <Menu isSearchOpen={isSearchOpen}  />
     <Banner />
     <Operation />
     <Card />
     <CashLoan />
     <Calculator />
     <Information />
     <News />
     <CurrencyCalculator />
     <Footer />
    </div>
  );
}


