import React from "react";
import BackgroundImage from "./Background";
import LogoDetails from "../Layout/Header/logo";
import MainHeader from "../Layout/Header/mainHeader";
const Home: React.FC = () => {
  return (
    <div>
      <BackgroundImage>
        <div>
          <LogoDetails />
          <MainHeader />
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Home;
