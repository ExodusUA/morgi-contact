import React, { useContext } from "react";
import TextPhraseContext from "../../context.js/context";
import "./MoneySection.css";
import diamond from "../../Images/diamond.webp";

const MoneySection = ({ img }) => {

  const getTextPhrase = useContext(TextPhraseContext);
  const pageNumber = localStorage.getItem('pageNumber');

  return (
    <div className={"money-section " + img}>
      <div className="container">
        <div className="money-section-text">
          <img src={diamond} alt="" />
          <h1>{getTextPhrase("moneySectionTitle", pageNumber)}</h1>
          <h4>
            {getTextPhrase("moneySectionText", pageNumber)}
          </h4>
          <a href="https://app.morgis.com/auth/signup-host" style={{marginBottom: '40px'}} target="_blank">{getTextPhrase("moneySectionButtonText", pageNumber)}</a>
        </div>
      </div>
    </div>
  );
};

export default MoneySection;
