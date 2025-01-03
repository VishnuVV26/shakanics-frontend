import React from "react";

const TitleBar: React.FC = () => {
  return (
    <div className="sm:grid sm:grid-cols-2 justify-center bg-primary p-1">
      <div className="left-section sm:flex gap-5 justify-center hidden">
        <div className="mail flex gap-2 justify-center items-center text-white">
          <i
            className="bi bi-envelope"
            style={{ fontSize: "1em", color: "white" }}
          ></i>
          <p style={{ fontSize: "0.8em" }}>shakanics@gmail.com</p>
        </div>
        <div className="address flex gap-2 justify-center items-center text-white">
          <i className="bi bi-geo-alt"></i>
          <p style={{ fontSize: "0.8em" }}>24 street, New York, USA</p>
        </div>
      </div>
      <div className="right-section flex justify-center items-center">
        <div
          className="icons flex gap-6"
          style={{ fontSize: "1em", color: "white" }}
        >
          <div className="fb hover:text-secondary">
            <i className="bi bi-facebook"></i>
          </div>
          <div className="insta hover:text-secondary">
            <i className="bi bi-instagram"></i>
          </div>
          <div className="twitter hover:text-secondary">
            <i className="bi bi-twitter-x"></i>
          </div>
          <div className="in hover:text-secondary">
            <i className="bi bi-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TitleBar;
