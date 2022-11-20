import React from "react";
import "../Styles/Footer.css";
import tweet from "../Asset/twitter.svg";
import tele from "../Asset/telegram.svg";
import what from "../Asset/whatsapp.svg";
import face from "../Asset/facebook.svg";

const Footer = () => {
  return (
    <div>
      <div className="oot">
      <br />
      <h3 id="ut">
        <p>
          <b>Contact</b>
        </p>
      </h3>
      <div id="reem">
        <h4 id="it">hello@tradeexpress.com</h4>
        <h4 id="ot">support@tradeexpress.com</h4>
        <div className="icos">
          <img src={tweet} alt="" />
          <img src={tele} alt="" />
          <img src={what} alt="" />
          <img src={face} alt="" />
        </div>
      </div>
      <div>
        <br />
        <h3 id="ut">
          <p>
            <b>Company</b>
          </p>
        </h3>
        <h4 id="yt">About us</h4>
        <h4 id="tt">Careers</h4>
        <h4 id="pt">Rates</h4>
        <h4 id="ht">Mobile</h4>
      </div>
      <div>
        <br />
        <h3 id="sa">
        <p><b>Legal </b></p>
        </h3>
        <h4 id="ga">Privacy Policy</h4>
        <h4 id="ua">Anti-Money Laundering</h4>
        <h4 id="oa">Terms and Conditions</h4>
      </div>
      </div>
      <span id="lnd">2021 TradExpress Technologies All Rights Reserved</span>
    </div>
  );
};

export default Footer;
