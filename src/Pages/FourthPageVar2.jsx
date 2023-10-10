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

const FourthPageVar2 = (props) => {
  localStorage.setItem("pageNumber", 4);

  const [showForm, setShowForm] = React.useState(false);

  var toggleLinks = document.querySelectorAll('a');

  toggleLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      setShowForm(true)
    });
  });

  useEffect(() => {
    // Вставляємо код GTM в <head> при завантаженні компонента
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TR5VNZ4');
    `;
    document.head.appendChild(script);

    // Вставляємо код GTM (noscript) після відкриваючого <body> тегу
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TR5VNZ4"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.insertBefore(noscript, document.body.firstChild);

    // Функція очистки після видалення компонента
    return () => {
      const script = document.querySelector('script[src*="gtm.js"]');
      const noscript = document.querySelector('noscript iframe[src*="ns.html"]');
      if (script) {
        script.remove();
      }
      if (noscript) {
        noscript.remove();
      }
    };
  }, []);


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
        text="The Power of Morgi's Morgis' Monetization"
        lang={props.langData}
        image="waysBg4"
        setShowForm={setShowForm}
      />
      <ReturnSection lang={props.langData} setShowForm={setShowForm} />
      <PercentageSection lang={props.langData} setShowForm={setShowForm} />
      <MoneySection lang={props.langData} img={"moneyBg4"} setShowForm={setShowForm} />
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

export default FourthPageVar2;
