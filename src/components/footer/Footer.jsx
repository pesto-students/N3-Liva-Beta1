import React from "react";
import style from "./Footer.module.scss";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import MailOutlinedIcon from "@material-ui/icons/MailOutlined";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__top}>
        <div className="container">
          <div className="row">
            <div className={`col-4 ${style.footer__column}`}>
              <Logo width={100} alt="Liva Logo" />
              <p>
                lorem ipsum dolor sit amet, consectetur adip consectetur adip
              </p>
              <div className={style.footer__location}>
                <div className={style.footer__info}>
                  <LocationOnOutlinedIcon />
                  <p>Whitefield, Bengaluru</p>
                </div>
                <div className={style.footer__info}>
                  <MailOutlinedIcon />
                  <p>info@liva.com</p>
                </div>
              </div>
            </div>

            <div className="col-4">
              <h4 className={style.footer__title}>Information</h4>
              <div className={style.footer_links} role="list">
                <a href="#" role="listitem">
                  My Account
                </a>
                <a href="#" role="listitem">
                  Order History
                </a>
                <a href="#" role="listitem">
                  Contact Us
                </a>
                <a href="#" role="listitem">
                  Terms &amp; Conditions
                </a>
                <a href="#" role="listitem">
                  Privacy
                </a>
              </div>
            </div>

            <div className="col-4">
              <h4 className={style.footer__title}>My Account</h4>
              <div className={style.footer_links} role="list">
                <a href="#" role="listitem">
                  About Us
                </a>
                <a href="#" role="listitem">
                  Specials
                </a>
                <a href="#" role="listitem">
                  FAQ
                </a>
                <a href="#" role="listitem">
                  Guarantee
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.footer__bottom} data-testid="footerbottom">
        <div className="container">
          Copyright &copy; 2021 liva all rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
