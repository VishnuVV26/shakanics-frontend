import React, { ReactNode } from "react";

interface BackgroundImageProps {
  children?: ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ children }) => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-black bg-opacity-30"
        style={{
          backgroundImage: "url('/assets/bg/bg6.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundImage;
