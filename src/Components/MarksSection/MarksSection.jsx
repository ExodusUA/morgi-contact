import React, { useContext } from "react";
import TextPhraseContext from "../../context.js/context";
import "./MarksSection.css";
import logoInsta from "../../Images/logoInsta.webp";
import logoOnly from "../../Images/logoOnly.webp";
import logoM from "../../Images/logoM.webp";
import redNotFilled from "../../Images/redNotFilled.webp";
import greenFilled from "../../Images/greenFilled.webp";
import redFilled from "../../Images/redFilled.webp";

const MarksSection = () => {

  const getTextPhrase = useContext(TextPhraseContext);
  const pageNumber = localStorage.getItem('pageNumber');

  return (
    <div className="marks-section">
      <div className="container">
        <div className="marksSectionWrapper">
          <div className="marks-section-list">
            <div className="marks-section-block section-border">
              <h6>
                <span>{getTextPhrase("compareText1", pageNumber)}</span>
              </h6>
            </div>
            <div className="marks-section-block">
              <img src={logoInsta} alt="Instagram" />
              <h6>
                <span>{getTextPhrase("compareText10", pageNumber)}</span>
              </h6>
            </div>
            <div className="marks-section-block">
              <img src={logoOnly} alt="Onlyfans" />
              <h6>
                <span>{getTextPhrase("compareText11", pageNumber)}</span>
              </h6>
            </div>
            <div className="marks-section-block">
              <img src={logoM} alt="Morgi" />
              <h6>
                <span>{getTextPhrase("compareText12", pageNumber)}</span>
              </h6>
            </div>
          </div>
          <div className="line"></div>
          <div className="marks-section-list">
            <div className="marks-section-block  section-border">
              <h6>
                <span>{getTextPhrase("compareText2", pageNumber)}</span>
              </h6>
            </div>
            <div className="marks-section-block">
              <img src={redNotFilled} alt="" />
              <h6>{getTextPhrase("compareText13", pageNumber)}</h6>
            </div>
            <div className="marks-section-block">
              <img src={redNotFilled} alt="" />
              <h6>{getTextPhrase("compareText14", pageNumber)}</h6>
            </div>
            <div className="marks-section-block">
              <img src={greenFilled} alt="" />
              <h6>{getTextPhrase("compareText15", pageNumber)}</h6>
            </div>
          </div>
          <div className="line"></div>

          <div className="marks-section-list">
            <div className="marks-section-block section-border">
              <h6>
                <span>{getTextPhrase("compareText3", pageNumber)}</span>
              </h6>
            </div>
            <div className="marks-section-block">
              <img src={redNotFilled} alt="" />
              <h6>{getTextPhrase("compareText16", pageNumber)}</h6>
            </div>
            <div className="marks-section-block">
              <img src={redFilled} alt="" />
              <h6>{getTextPhrase("compareText17", pageNumber)}</h6>
            </div>
            <div className="marks-section-block">
              <img src={greenFilled} alt="" />
              <h6>{getTextPhrase("compareText18", pageNumber)}</h6>
            </div>
          </div>
          <div className="line"></div>

          <div className="marks-section-list">
            <div className="marks-section-block section-border">
              <h6>
                <span>{getTextPhrase("compareText4", pageNumber)}</span>
              </h6>
            </div>
            <div className="marks-section-block">
              <img src={redNotFilled} alt="" />
              <h6>{getTextPhrase("compareText19", pageNumber)}</h6>
            </div>
            <div className="marks-section-block">
              <img src={redNotFilled} alt="" />
              <h6>{getTextPhrase("compareText20", pageNumber)}</h6>
            </div>
            <div className="marks-section-block">
              <img src={greenFilled} alt="" />
              <h6>{getTextPhrase("compareText21", pageNumber)}</h6>
            </div>
          </div>
          <div className="line"></div>

          <div className="marks-section-list">
            <div className="marks-section-block section-border">
              <h6>
                <span>{getTextPhrase("compareText5", pageNumber)}</span>
              </h6>
            </div>
            <div className="marks-section-block">
              <img src={redNotFilled} alt="" />
              <h6>{getTextPhrase("compareText22", pageNumber)}</h6>
            </div>
            <div className="marks-section-block">
              <img src={redNotFilled} alt="" />
              <h6>{getTextPhrase("compareText23", pageNumber)}</h6>
            </div>
            <div className="marks-section-block">
              <img src={greenFilled} alt="" />
              <h6>{getTextPhrase("compareText24", pageNumber)}</h6>
            </div>
          </div>
          <div className="line"></div>

          <div className="marks-section-list">
            <div className="marks-section-block section-border">
              <h6>
                <span>{getTextPhrase("compareText6", pageNumber)}</span>
              </h6>
            </div>
            <div className="marks-section-block">
              <img src={redNotFilled} alt="" />
              <h6>{getTextPhrase("compareText25", pageNumber)}</h6>
            </div>
            <div className="marks-section-block">
              <img src={redNotFilled} alt="" />
              <h6>{getTextPhrase("compareText26", pageNumber)}</h6>
            </div>
            <div className="marks-section-block">
              <img src={greenFilled} alt="" />
              <h6>{getTextPhrase("compareText27", pageNumber)}</h6>
            </div>
          </div>
          <div className="line"></div>

          <div className="marks-section-list">
            <div className="marks-section-block section-border">
              <h6>
                <span>{getTextPhrase("compareText7", pageNumber)}</span>
              </h6>
            </div>
            <div className="marks-section-block">
              <img src={redNotFilled} alt="" />
              <h6>{getTextPhrase("compareText28", pageNumber)}</h6>
            </div>
            <div className="marks-section-block">
              <img src={redNotFilled} alt="" />
              <h6>{getTextPhrase("compareText29", pageNumber)}</h6>
            </div>
            <div className="marks-section-block">
              <img src={greenFilled} alt="" />
              <h6>{getTextPhrase("compareText30", pageNumber)}</h6>
            </div>
          </div>
          <div className="line"></div>

          <div className="marks-section-list">
            <div className="marks-section-block section-border">
              <h6>
                <span>{getTextPhrase("compareText8", pageNumber)}</span>
              </h6>
            </div>
            <div className="marks-section-block">
              <img src={redNotFilled} alt="" />
              <h6>{getTextPhrase("compareText31", pageNumber)}</h6>
            </div>
            <div className="marks-section-block">
              <img src={redNotFilled} alt="" />
              <h6>{getTextPhrase("compareText32", pageNumber)}</h6>
            </div>
            <div className="marks-section-block">
              <img src={greenFilled} alt="" />
              <h6>{getTextPhrase("compareText33", pageNumber)}</h6>
            </div>
          </div>

          {
            pageNumber !== '4'
              ?
              <>
                <div className="line"></div>
                <div className="marks-section-list">
                  <div className="marks-section-block section-border">
                    <h6>
                      <span>{getTextPhrase("compareText9", pageNumber)}</span>
                    </h6>
                  </div>
                  <div className="marks-section-block">
                    <img src={redNotFilled} alt="" />
                    <h6>{getTextPhrase("compareText34", pageNumber)}</h6>
                  </div>
                  <div className="marks-section-block">
                    <img src={redNotFilled} alt="" />
                    <h6>{getTextPhrase("compareText35", pageNumber)}</h6>
                  </div>
                  <div className="marks-section-block">
                    <img src={greenFilled} alt="" />
                    <h6>{getTextPhrase("compareText36", pageNumber)}</h6>
                  </div>
                </div>
              </>
              : null
          }
        </div>

      </div>
    </div>
  );
};

export default MarksSection;
