import React, { useContext } from "react";
import TextPhraseContext from "../../context.js/context";
import "./SeekSection.css";
import seekImage from "../../Images/seekImage.webp";

const SeekSection = ({ header }) => {

  const getTextPhrase = useContext(TextPhraseContext);
  const pageNumber = localStorage.getItem('pageNumber');

  return (
    <div className="seek-section">
      <div className="container">
        <div className="seek-section-image">
          <img src={seekImage} alt="Footer Logotype" />
        </div>
        <div className="seek-section-text">
          {header !== false && (
            <h1>
              {getTextPhrase("footerTitle", pageNumber)}
            </h1>
          )}

          <h4>
            {getTextPhrase("footerText", pageNumber)}
          </h4>
          <a href="https://app.morgis.com/auth/signup-host" target="_blank">{getTextPhrase("footerButtonText", pageNumber)}</a>
        </div>
      </div>
    </div>
  );
};

export default SeekSection;
