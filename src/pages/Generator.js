import React, { useState } from "react";
import PsdGenerator from "./PsdGenerator";
import Lorem from "./Lorem";

const Generator = () => {
  const [showPsd, setShowPsd] = useState(true);
  const [showLorem, setShowLorem] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const handleClick1 = () => {
    setShowPsd(true);
    setShowLorem(false);
    setShowQr(false);
  };
  const handleClick2 = () => {
    setShowPsd(false);
    setShowLorem(true);
    setShowQr(false);
  };
  const handleClick3 = () => {
    setShowPsd(false);
    setShowLorem(false);
    setShowQr(true);
  };
  return (
    <>
      <div className="main-container">
        <div className="generator-container">
          <button className="tU-btn" onClick={handleClick1}>
            Password Generator
          </button>

          <button className="tU-btn" onClick={handleClick2}>
            Lorem Generator
          </button>
          <button className="tU-btn" onClick={handleClick3}>
            Qr Generator
          </button>
        </div>
        <div>
          {showPsd && <PsdGenerator />}
          {showLorem && <Lorem />}
          {showQr && <Lorem />}
        </div>
      </div>
    </>
  );
};

export default Generator;