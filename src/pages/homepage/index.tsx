import React from "react";
import Home from "../../components/Home";
import LoginPage from "../login";
import SignUpPage from "../signup";

const HomePage: React.FC = () => {
  return (
    <div>
      <Home />
      {/* <LoginPage />
      <SignUpPage /> */}
    </div>
  );
};

export default HomePage;
