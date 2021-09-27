import React from "react";
import Cover from "./cover";
import Demo from "./demo";

const Papers = ({ Data }) => {
  const sizeofdata = Data.length + 1;
  //console.log(sizeofdata);

  return (
    <>
      <Cover sizeofdata={sizeofdata} />
      {Data.map((curElem) => {
        const dsizes = Number(curElem.id);
        const dsize = dsizes + 1;
        return (
          <div
            id={"p" + dsize}
            className="paper "
            key={dsizes + 12}
            style={{ zIndex: Number(sizeofdata - dsize) }}
          >
            <div className="front">
              <div id={"f" + dsize} className="front-content">
                <Demo dsize={dsize} />
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

export default Papers;
