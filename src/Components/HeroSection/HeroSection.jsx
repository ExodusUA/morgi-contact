import React, { useContext } from "react";
import "./HeroSection.css";
import logo from "../../Images/Logo.png";
import mobileLogo from "../../Images/Logo.png";
import heroImage from "../../Images/heroImage.webp";
import heroImageMobile from "../../Images/heroImageMobile.webp";
import { AiOutlineArrowDown } from "react-icons/ai";
import TextPhraseContext from "../../context.js/context";

const HeroSection = ({
  color,
  whiteBlock,
  thirdScroll,
  lang,
  image,
  mobileImage,
}) => {
  const heroClass = `hero-section ${color}`;
  const handleScrollToAnchor = (event, anchor) => {
    event.preventDefault();
    const element = document.querySelector(anchor);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const getTextPhrase = useContext(TextPhraseContext);
  const pageNumber = localStorage.getItem("pageNumber");

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logotype" />
        </div>
        <div className="logo-mobile">
          <img src={mobileLogo} alt="Logotype" />
        </div>
        <div className={heroClass}>
          <h1>{getTextPhrase("headerTitle", pageNumber)}</h1>
          <h4>{getTextPhrase("headerSubTitle", pageNumber)}</h4>
          <a href="https://app.morgis.com/auth/signup-host" target="_blank">
            <button>{getTextPhrase("headerButtonText", pageNumber)}</button>
          </a>
        </div>
        <div className="hero-section-image">
          <img src={image} alt="Hero Section Image" />
        </div>
        <div className="hero-section-image-mobile">
          <img src={mobileImage} alt="Hero Section Image" />
        </div>
        <div className="hero-section-arrow">
          <AiOutlineArrowDown
            onClick={(e) => {
              if (thirdScroll) {
                handleScrollToAnchor(e, "#recipe-section");
              } else {
                handleScrollToAnchor(e, "#succeed-section");
              }
            }}
          />
        </div>
      </div>
      {whiteBlock && <div className="block-white"></div>}
    </>
  );
};

export default HeroSection;
