import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import SucceedSection from "../Components/SucceedSection/SucceedSection";
import RecipeSection from "../Components/RecipeSection/RecipeSection";
import WaysSection from "../Components/WaysSection/WaysSection";
import ReturnSection from "../Components/ReturnSection/ReturnSection";
import PercentageSection from "../Components/PercentageSection/PercentageSection";
import MoneySection from "../Components/MoneySection/MoneySection";
import MarksSection from "../Components/MarksSection/MarksSection";
import SeekSection from "../Components/SeekSection/SeekSection";
import cardImg from "../Images/cardImg.webp";
import heroImage from "../Images/heroImage.webp";
import heroImageMobile from "../Images/heroImageMobile.webp";
import Form from "../Components/Form/Form";

const FirstPage = (props) => {
  /* WRITE PAGE NUMBER TO LOCAL STORAGE */

  localStorage.setItem("pageNumber", 1);

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
        lang={props.langData}
        image={heroImage}
        mobileImage={heroImageMobile}
      />
      <SucceedSection image={cardImg} />
      <RecipeSection lang={props.langData} />
      <WaysSection lang={props.langData} />
      <ReturnSection lang={props.langData} />
      <PercentageSection lang={props.langData} />
      <MoneySection lang={props.langData} />
      <MarksSection lang={props.langData} />
      <SeekSection lang={props.langData} />

      {
        showForm === true
          ? <div className="formOverlay">
            <Form setShowForm={setShowForm} />
          </div>
          : null
      }

    </>
  );
};

export default FirstPage;
