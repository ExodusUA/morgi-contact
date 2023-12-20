import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import FourthPage from "./Pages/FourthPage";
import Menu from "./Menu/Menu";
import langList from "./lang.json";
import TextPhraseContext from "./context.js/context";
import FourthPageVar2 from "./Pages/FourthPageVar2";
import FourthPageClone from "./Pages/FourthPageClone";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("pt");
  const [langData, setLangData] = useState([]);

  useEffect(() => {
    const updateLanguageData = () => {
      const selectedFile = langList.find(
        (item) => item.langCode === selectedLanguage
      );

      if (selectedFile) {
        const langFile = require(`${selectedFile.file}`);
        setLangData(langFile[0]);
      }
    };
    updateLanguageData();
  }, [selectedLanguage]);


  useEffect(() => {
/*
    const supportedLanguages = langList.map(e => e.langCode);
    const langArray = navigator.languages;

    if (supportedLanguages.includes(langArray[1])) {
      setSelectedLanguage([langArray[1]][0]);
    } else {
      setSelectedLanguage('gb');
    }
*/
  }, []);


  function getTextPhrase(textID, landingNumber) {

    if (langData.length !== 0 && landingNumber !== undefined) {
      var landingArray = langData['LP' + landingNumber];
     
      if (landingArray[0][textID] !== undefined) {
        return landingArray[0][textID];
      } else {
        return langData[textID];
      }
    }

  }

  return (

    <TextPhraseContext.Provider value={getTextPhrase}>
      <>
        <Menu
          setSelectedLanguage={setSelectedLanguage}
          selectedLanguage={selectedLanguage}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/page5" element={<FirstPage langData={langData} pageNumber={1} />} />
            <Route path="/page4" element={<SecondPage langData={langData} pageNumber={2} />} />
            <Route path="/page3" element={<ThirdPage langData={langData} pageNumber={3} />} />
            <Route path="/" element={<FourthPage langData={langData} pageNumber={4} selectedLanguage={selectedLanguage} />} />
            <Route path="/refferal" element={<FourthPageClone langData={langData} pageNumber={5} selectedLanguage={selectedLanguage} />} />
            <Route path="/page2" element={<FourthPageVar2 langData={langData} pageNumber={4} selectedLanguage={selectedLanguage} />} />
          </Routes>
        </BrowserRouter>
      </>
    </TextPhraseContext.Provider>
  );
}

export default App;
