import React from "react";

const LogoDetails: React.FC = () => {
  return (
    <div className="p-2 border-b grid grid-cols-2">
      <div className="logo flex justify-center items-center">
        <img
          src="/assets/images/logo2.png"
          alt="logo"
          style={{
            width: "80px",
          }}
        />
        <h2 className="text-3xl font-semibold text-white">Shakanics</h2>
      </div>
    </div>
  );
};

export default LogoDetails;
