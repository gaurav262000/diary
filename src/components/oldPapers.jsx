import React from "react";
import Cover from "./cover";

const OldPapers = ({ Data }) => {
  const sizeofdata = Data.length + 1;
  //console.log(sizeofdata);

  return (
    <>
      <Cover sizeofdata={sizeofdata} />
      {Data.map((curElem, index) => {
        const dsizes = Number(index + 1);
        const dsize = dsizes + 1;

        // console.log("data"+Number(sizeofdata-dsize));
        return (
          <div
            id={"p" + dsize}
            className="paper "
            key={dsizes + 12}
            style={{ zIndex: Number(sizeofdata - dsize) }}
          >
            <div className="front">
              <div id={"f" + dsize} className="front-content">
                <div className="container">
                  <div className="tittle-wrap">
                    <span>Date:</span>

                    <div className="tittle">{curElem.date}</div>
                    <div className="name">Dear Diary,</div>
                  </div>
                  <div className="line-wrap">
                    <p style={{ wordBreak: "break-all" }}>{curElem.content}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="back">
              <div id={"b" + dsize} className="back-content">
                <h1></h1>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default OldPapers;
