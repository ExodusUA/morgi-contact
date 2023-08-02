import "./SucceedSection.css";
import React, { useContext } from "react";
import TextPhraseContext from "../../context.js/context";

const SucceedSection = ({ color, image }) => {
  const cardClass = `succeed-section-card ${color}`;

  const getTextPhrase = useContext(TextPhraseContext);
  const pageNumber = localStorage.getItem('pageNumber');

  return (
    <>
      <div className="container">
        <div className="succeed-section" id="succeed-section">
          <div className="suceed-section-text">
            <h1>{getTextPhrase("suceedSectionTitle", pageNumber)}</h1>
            <h4>
              {getTextPhrase("suceedSectionSubTitle", pageNumber)}
            </h4>
          </div>
          <div className={cardClass}>
            <div className="card">
              <img src={image} alt="" />
              <div className="card-text">
                <h5>
                  {getTextPhrase("suceedBlockTitle", pageNumber)}
                </h5>
                <p>
                  {getTextPhrase("suceedBlockSubTitle", pageNumber)}
                </p>
                <a href="https://app.morgis.com/auth/signup-host" target="_blank">{getTextPhrase("suceedBlockButtonText", pageNumber)}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-white"></div>
    </>
  );
};

export default SucceedSection;
