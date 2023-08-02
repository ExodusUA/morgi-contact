import React, { useContext } from "react";
import TextPhraseContext from "../../context.js/context";
import "./RecipeSection.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import recipeImg from "../../Images/recipeImage.webp";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const RecipeSection = ({ text }) => {
  const swiperParams = {
    slidesPerView: 2,
  };

  const getTextPhrase = useContext(TextPhraseContext);
  const pageNumber = localStorage.getItem("pageNumber");

  return (
    <div className="recipe-section" id="recipe-section">
      <div className="recipe-section-text">
        <h1>{getTextPhrase("recipeTitle", pageNumber)}</h1>
        <a href="https://app.morgis.com/auth/signup-host" target="_blank">
          {getTextPhrase("recipeButtonText", pageNumber)} <AiOutlineArrowDown />
        </a>
      </div>
      <div className="recipe-section-image">
        <img src={recipeImg} alt="Recipe" />
      </div>
      <div className="recipe-section-text-mobile">
        <h1>{getTextPhrase("recipeTitle", pageNumber)}</h1>
      </div>
      <div className="recipe-section-cards">
        <div className="recipe-section-card">
          <h4>{getTextPhrase("recipeCard1Title", pageNumber)}</h4>
          <h5>{getTextPhrase("recipeCard1SubTitle", pageNumber)}</h5>
        </div>
        <div className="recipe-section-card">
          <h4>{getTextPhrase("recipeCard2Title", pageNumber)}</h4>
          <h5>{getTextPhrase("recipeCard2SubTitle", pageNumber)}</h5>
        </div>
        <div className="recipe-section-card">
          <h4>{getTextPhrase("recipeCard3Title", pageNumber)}</h4>
          <h5>{getTextPhrase("recipeCard3SubTitle", pageNumber)}</h5>
        </div>
        <div className="recipe-section-card">
          <h4>{getTextPhrase("recipeCard4Title", pageNumber)}</h4>
          <h5>{getTextPhrase("recipeCard4SubTitle", pageNumber)}</h5>
        </div>
      </div>
      <div className="recipe-section-cards-mobile">
        <Swiper className="mySwiper" slidesPerView={2} spaceBetween={40}>
          <SwiperSlide>
            <div className="recipe-section-card">
              <h4>{getTextPhrase("recipeCard1Title", pageNumber)}</h4>
              <h5>{getTextPhrase("recipeCard1SubTitle", pageNumber)}</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="recipe-section-card">
              <h4>{getTextPhrase("recipeCard2Title", pageNumber)}</h4>
              <h5>{getTextPhrase("recipeCard2SubTitle", pageNumber)}</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="recipe-section-card">
              <h4>{getTextPhrase("recipeCard3Title", pageNumber)}</h4>
              <h5>{getTextPhrase("recipeCard3SubTitle", pageNumber)}</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="recipe-section-card">
              <h4>{getTextPhrase("recipeCard4Title", pageNumber)}</h4>
              <h5>{getTextPhrase("recipeCard4SubTitle", pageNumber)}</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default RecipeSection;
