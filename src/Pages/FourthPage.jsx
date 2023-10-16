import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import RecipeSection from "../Components/RecipeSection/RecipeSection";
import WaysSection from "../Components/WaysSection/WaysSection";
import MoneySection from "../Components/MoneySection/MoneySection";
import MarksSection from "../Components/MarksSection/MarksSection";
import SeekSection from "../Components/SeekSection/SeekSection";
import PercentageSection from "../Components/PercentageSection/PercentageSection";
import ReturnSection from "../Components/ReturnSection/ReturnSection";
import heroImage from "../Images/heroImage3.webp";
import heroImageMobile from "../Images/heroImage3Mobile.webp";
import Form from "../Components/Form/Form";
import { useEffect } from "react";

const FourthPage = (props) => {
  localStorage.setItem("pageNumber", 4);

  const [showForm, setShowForm] = React.useState(false);

  var toggleLinks = document.querySelectorAll('a');

  toggleLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      setShowForm(true)
    });
  });

  return (
    <>
      <HeroSection
        color="golden"
        whiteBlock={true}
        thirdScroll={true}
        lang={props.langData}
        image={heroImage}
        mobileImage={heroImageMobile}
        setShowForm={setShowForm}
      />
      <RecipeSection lang={props.langData} setShowForm={setShowForm} />
      <WaysSection
        text="The Power of Morgis’ Monetization"
        lang={props.langData}
        image="waysBg4"
        setShowForm={setShowForm}
      />
      <ReturnSection lang={props.langData} setShowForm={setShowForm} />
      <PercentageSection lang={props.langData} setShowForm={setShowForm} />
      <MoneySection lang={props.langData} img={"moneyBg4"} setShowForm={setShowForm} />
      <MarksSection lang={props.langData} setShowForm={setShowForm} />
      <SeekSection lang={props.langData} setShowForm={setShowForm} />

      {
        showForm === true
          ? <div className="formOverlay">
            <Form setShowForm={setShowForm} selectedLanguage={props.selectedLanguage} />
          </div>
          : null
      }

    </>
  );
};

export default FourthPage;
