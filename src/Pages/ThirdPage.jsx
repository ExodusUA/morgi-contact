import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import RecipeSection from "../Components/RecipeSection/RecipeSection";
import WaysSection from "../Components/WaysSection/WaysSection";
import MoneySection from "../Components/MoneySection/MoneySection";
import MarksSection from "../Components/MarksSection/MarksSection";
import SeekSection from "../Components/SeekSection/SeekSection";
import ReturnSection from "../Components/ReturnSection/ReturnSection";
import PercentageSection from "../Components/PercentageSection/PercentageSection";
import heroImage from "../Images/heroImage3.webp";
import heroImageMobile from "../Images/heroImage3Mobile.webp";
import Form from "../Components/Form/Form";

const ThirdPage = (props) => {
  localStorage.setItem("pageNumber", 3);

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
        color="gradient"
        whiteBlock={true}
        thirdScroll={true}
        lang={props.langData}
        image={heroImage}
        mobileImage={heroImageMobile}
      />
      <RecipeSection lang={props.langData} />
      <WaysSection
        text="The Power of Morgi's Monetization: 4 Fantastic Options"
        lang={props.langData}
      />
      <ReturnSection lang={props.langData} />
      <PercentageSection lang={props.langData} />
      <MoneySection lang={props.langData} />
     
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

export default ThirdPage;
