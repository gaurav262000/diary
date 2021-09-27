import React from "react";

const Cover = ({ sizeofdata }) => {
  return (
    <>
      <div
        id="p1"
        className="paper"
        style={{ zIndex: Number(sizeofdata - 1) }}
        key="0"
      >
        <div className="front">
          <div className="front1"></div>
          <div id="f1" className="front-content">
            <img src="//cdn.shopify.com/s/files/1/1109/7376/products/Slide28_191ba5e4-18bc-4880-9c5e-6e59c6f52ca0_1024x1024.png?v=1594622700" />
          </div>
        </div>
        <div className="back1">
          <div id="b1" className="back-content">
            <h1>hello</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cover;
