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
import cardImgSecond from "../Images/cardImgSecond.webp";
import heroImage from "../Images/heroImage2.webp";
import heroImageMobile from "../Images/heroImage2Mobile.webp";
import Form from "../Components/Form/Form";

const SecondPage = (props) => {
  localStorage.setItem("pageNumber", 2);

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
        color="green"
        lang={props.langData}
        image={heroImage}
        mobileImage={heroImageMobile}
      />
      <SucceedSection
        color="green"
        image={cardImgSecond}
        lang={props.langData}
      />
      <RecipeSection
        text="Whether you want to continue the cam life, or shift gears, in Morgi you can:"
        lang={props.langData}
      />
      <WaysSection lang={props.langData} />
      <ReturnSection lang={props.langData} />
      <PercentageSection lang={props.langData} />
      <MoneySection lang={props.langData} />
     
      <SeekSection header={false} lang={props.langData} />

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

export default SecondPage;
