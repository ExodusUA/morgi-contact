import React, { useContext } from "react";
import TextPhraseContext from "../../context.js/context";
import "./ReturnSection.css";
import logo from "../../Images/Logo.png";
import logoMobile from "../../Images/Logo.png";

const ReturnSection = () => {

  const getTextPhrase = useContext(TextPhraseContext);
  const pageNumber = localStorage.getItem('pageNumber');

  return (
    <div className="return-section">
      <div className="container">
        <div className="return-section-text">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="logo-mobile">
            <img src={logoMobile} alt="" />
          </div>
          <h1>
            {getTextPhrase("returnTitle", pageNumber)}
          </h1>
          <a href="https://app.morgis.com/auth/signup-host" target="_blank">{getTextPhrase("returnButtonText", pageNumber)}</a>
        </div>
        <div className="return-section-image">
          <h4 id="firstText">{getTextPhrase("returnText1", pageNumber)}</h4>
          <h4 id="secondText">{getTextPhrase("returnText2", pageNumber)}</h4>
          <h4 id="thirdText">{getTextPhrase("returnText3", pageNumber)}</h4>
        </div>
      </div>
    </div>
  );
};

export default ReturnSection;
