import React, { useState } from "react";
// import "./index.css";
import { ScrollProvider } from "./components/ScrollContext";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <ScrollProvider>
      <>
        <FirstSection />

        <SecondSection />

        <ThirdSection />

        <FourthSection />

        <FifthSection />

        <FooterSection />
      </>
    </ScrollProvider>
  );
};

export default App;
