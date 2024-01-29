import React from "react";
import "./Footer.css";
import logo1 from "../kptl/93817465 (1).png";
import logo2 from "../kptl/aesf-logo (1).png";
import logo3 from "../kptl/info (1).png";
import logo4 from "../kptl/msp (1).png";
import qrCode from "../kptl/qr-code.svg"



export default function Footer() {
  return (
    <footer className="main-footer">
    <div className="footer-container">
        <div className="row-footer">
            <div className="col">
                <div className="footer-item">
                    <h3 className="footer-title">Kapital Bank</h3>
                    <ul className="footer-menu">
                        <li className="footer-li">
                            <a className="footer-a" href="https://www.kapitalbank.az/about">Bank haqqında</a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-a" href="https://hr.kapitalbank.az/">İnsan resursları</a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-a" href="https://www.kapitalbank.az/locations">Xidmət şəbəkəsi</a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-a" href="https://www.kapitalbank.az/birbank">Birbank</a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-a" href="https://www.kapitalbank.az/news">Xəbərlər</a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-a" href="https://www.kapitalbank.az/feedbacks">Təklif və şikayətlər</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <div className="footer-item">
                    <h3 className="footer-title">Məhsullar</h3>
                    <ul className="footer-menu">
                        <li className="footer-li">
                            <a className="footer-a" href="https://www.kapitalbank.az/cards">Kartlar</a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-a" href="https://www.kapitalbank.az/loans">Kreditlər</a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-a" href="https://www.kapitalbank.az/deposits">Depotizlər</a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-a" href="https://www.kapitalbank.az/sigortalar">Sığorta</a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-a" href="https://www.kapitalbank.az/money-transfers">Pul köçürmələri</a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-a" href="https://www.kapitalbank.az/private-banking">Fərdi bankçılıq</a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-a" href="https://www.kapitalbank.az/online-order">Onlayn xidmətlər</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <div className="footer-item">
                    <h3 className="footer-title">Çevik keçidlər</h3>
                    <ul className="footer-menu">
                        <li className="footer-li">
                            <a className="footer-a" href="https://www.kapitalbank.az/cards/taksitcards-2">Birbank kartı sifariş et</a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-a" href="https://ccl.kapitalbank.az/az/order/step/GTKR?t=kb&tvr_id=b74c0aef-83c1-4c00-bf28-235bd0fb206c">Kredit sifariş et</a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-a" href="https://www.kapitalbank.az/cards/simpleCards">Debet kart sifariş et</a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-a" href="https://payments.kapitalbank.az/">Onlayn ödənişlər</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <div className="footer-item">
                    <h3 className="footer-title">Digər</h3>
                    <ul className="footer-menu">
                        <li className="footer-li">
                            <a className="footer-a" href="https://www.kapitalbank.az/about">Onlayn növbə</a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-a" href="https://hr.kapitalbank.az/">Tariflər</a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-a" href="https://www.kapitalbank.az/locations">Necə etməli</a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-a" href="https://www.kapitalbank.az/birbank">FAQ</a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-a" href="https://www.kapitalbank.az/news">Bloqlar</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <div className="footer-links">
                    <h3 className="footer-title2">Birbank tətbiqini yükləmək üçün <br/> QR-kodu oxudun.</h3>
                    <img className="footer-qr-code" width="130px"
                        src={qrCode} alt=""/>
                    <ul className="footer-m">
                        <li className="footer-links-li">
                            <a className="footer-links-li-a"
                                href="https://play.google.com/store/apps/details?id=az.kapitalbank.mbanking">
                                <img src="https://www.kapitalbank.az/assets/static/img/play-store.svg" width="26px"
                                    alt=""/>
                                <p className="footer-links-p">Google Play <br/>Mobil tətbiqi yüklə </p>
                            </a>
                        </li>
                        <li className="footer-links-li">
                            <a className="footer-links-li-a" href="https://apps.apple.com/us/app/birbank/id1293207342">
                                <img src="https://www.kapitalbank.az/assets/static/img/app-store.svg" width="26px"
                                    alt=""/>
                                <p className="footer-links-p">App Store <br/> Mobil tətbiqi yüklə </p>
                            </a>
                        </li>
                        <li className="footer-links-li">
                            <a className="footer-links-li-a" href="https://appgallery.huawei.com/#/app/C102156391">
                                <img src="https://www.kapitalbank.az/assets/static/img/app-gallery.svg" width="26px" alt=""/>
                                <p className="footer-links-p">App Gallery<br/>Mobil tətbiqi yüklə </p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-social">
        <ul className="footer-social-list">
            <li className="footer-list">
                <a href="https://www.kapitalbank.az/" style={{ color: '#ffffff', fontSize: '22px', textDecoration: 'none', fontWeight: 700 }}>
                    <i className="fa-solid fa-phone-flip" style={{ color: '#ef3e42' }}></i>
                                                 196
                </a>
             </li>
             <li className="footer-list">
                 <a href="https://www.facebook.com/kapitalbank">
                    <i className="fa-brands fa-facebook" style={{ color: '#ffffff', fontSize: '18px' }}></i>
                </a>
            </li>
            <li className="footer-list">
                 <a href="https://www.linkedin.com/company/kapitalbankojsc/">
                     <i className="fa-brands fa-linkedin" style={{ color: '#ffffff', fontSize: '20px' }}></i>
                </a>
            </li>
             <li className="footer-list">
                 <a href="https://twitter.com/KapitalBankOJSC">
                     <i className="fa-brands fa-x-twitter" style={{ color: '#ffffff', fontSize: '20px' }}></i>
                 </a>
             </li>
             <li className="footer-list">
                 <a href="https://www.instagram.com/kapital_bank/">
                     <i className="fa-brands fa-instagram" style={{ color: '#ffffff', fontSize: '20px' }}></i>
                 </a>
            </li>
            <li className="footer-list">
                 <a href="https://www.youtube.com/channel/UCarG-YHqZPd42HPEBqSSmmw">
                     <i className="fa-brands fa-youtube" style={{ color: '#ffffff', fontSize: '20px' }}></i>
                </a>
            </li>
     </ul>
</div>
    <div className="footer-line"></div>
    <div className="footer-main-row">
        <div className="footer-row">
            <div>
                <p className="b2" style={{color: "#ffffff"}}>© 2024 «Kapital Bank» ASC. Bütün hüquqlar qorunur.</p>
            </div>
            <div className="footer-row-logo">
                <div>
                    <a href="https://www.e-gov.az/">
                        <img style={{width: "80px"}} src={logo1} alt=""/>
                    </a>
                </div>
                <div>
                    <a href="https://www.e-gov.az/">
                        <img style={{width: "80px"}} src={logo2} alt=""/>
                    </a>
                </div>
                <div>
                    <a href="https://www.e-gov.az/">
                        <img style={{width: "60px"}} src={logo3} alt=""/>
                    </a>
                </div>
                <div>
                    <a href="https://www.e-gov.az/">
                        <img style={{width: "200px"}} src={logo4} alt=""/>
                    </a>
                </div>
            </div>
        </div>
        <div className="b2">
            <p className="b1">“Kapital Bank” ASC (Bakı şəh., Nəsimi r-nu, Füzuli küç. 71) 05 noyabr 2018-ci il tarixli 244 nömrəli Bank Lisenziyası əsasında fəaliyyət göstərir.</p>
        </div>
    </div>
</footer>
  );
}
