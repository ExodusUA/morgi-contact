import React, { useContext } from "react";
import TextPhraseContext from "../../context.js/context";
import "./WaysSection.css";

const WaysSection = ({ text, image }) => {

  const getTextPhrase = useContext(TextPhraseContext);
  const pageNumber = localStorage.getItem('pageNumber');

  return (
    <div className={`ways-section ${image}`}>
      <div className="container">
        <div className="ways-section-text">
          {text ? (
            <h1>{text}</h1>
          ) : (
            <h1>{getTextPhrase("profitTitle", pageNumber)}</h1>
          )}
        </div>
        <div className="ways-section-cards">
          <div className="ways-section-card">
            <p>
            {getTextPhrase("profitBlock1Text", pageNumber)}
            </p>
          </div>
          <div className="ways-section-card">
            <p>
            {getTextPhrase("profitBlock2Text", pageNumber)}
            </p>
          </div>
          <div className="ways-section-card">
            <p>
            {getTextPhrase("profitBlock3Text", pageNumber)}
            </p>
          </div>
          <div className="ways-section-card">
            <p>
            {getTextPhrase("profitBlock4Text", pageNumber)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaysSection;
