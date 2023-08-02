import React, { useContext } from "react";
import TextPhraseContext from "../../context.js/context";
import "./PercentageSection.css";
import percentage from "../../Images/percentage.webp";

const PercentageSection = () => {

  const getTextPhrase = useContext(TextPhraseContext);
  const pageNumber = localStorage.getItem('pageNumber');

  return (
    <div className="percentage-section">
      <div className="container">
        <div className="percentage-section-img">
          <img src={percentage} alt="" />
        </div>
        <div className="percentage-section-text">
          <h4>
            {getTextPhrase("percentageText", pageNumber)}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PercentageSection;
