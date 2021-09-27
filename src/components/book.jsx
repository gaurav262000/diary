import React, { useState } from "react";
import Papers from "./papers";

import Papersdata from "./papersdata";
import "./book.css";

const Book = () => {
  const [Data, setData] = useState(Papersdata);
  //   console.log(Data.length);

  let currentLocation = 1;
  let numOfPage = Data.length + 1;
  let maxLocation = Data.length + 2;
  let i = 1;

  const openBook = () => {
    document.getElementById("book").style.transform = "translateX(52%)";
    document.getElementById("prev-btn").style.right = "80%";
    document.getElementById("next-btn").style.left = "80%";
  };

  const closeBook = (is) => {
    if (is === 1) {
      document.getElementById("book").style.transform = "translateX(100%)";
      document.getElementById("prev-btn").style.right = "70%";
      document.getElementById("next-btn").style.left = "68%";
    } else {
      document.getElementById("book").style.transform = "translateX(0%)";
      document.getElementById("prev-btn").style.right = "70%";
      document.getElementById("next-btn").style.left = "68%";
    }
  };

  const goback = (i, currentLocation) => {
    //  var prev=Data.length-1
    //alert(i+" "+currentLocation);
    if (currentLocation > 1) {
      if (currentLocation !== 0) {
        // alert("p"+i)
        openBook();
        document.getElementById("p" + i).classList.remove("flipped");
        document.getElementById("p" + i).style.zIndex =
          maxLocation - currentLocation - 1;
        //currentLocation--;
      }
    } else if (currentLocation === 1) {
      document.getElementById("p" + i).classList.remove("flipped");
      document.getElementById("p" + i).style.zIndex =
        maxLocation - currentLocation - 1;
      closeBook(0);
      //alert("hell")
    }
  };

  const goforward = (i) => {
    // alert(i+" "+currentLocation)
    if (currentLocation < maxLocation) {
      if (currentLocation === i && i !== numOfPage) {
        // alert("p"+i)
        openBook();
        document.getElementById("p" + i).classList.add("flipped");
        document.getElementById("p" + i).style.zIndex = i - numOfPage;
        currentLocation++;
      } else if (i === numOfPage) {
        document.getElementById("p" + i).classList.add("flipped");
        document.getElementById("p" + i).style.zIndex = i - numOfPage;
        closeBook(1);
      }
    }
  };
  // var val = 1;
  // const palyer = () => {
  //   if (val === 1) {
  //     document.getElementById("audio").play();
  //     document.getElementById("play").classList.remove("fa-play-circle");
  //     document.getElementById("play").classList.add("fa-pause-circle");
  //     val = 0;
  //   } else {
  //     document.getElementById("audio").pause();
  //     document.getElementById("play").classList.add("fa-play-circle");
  //     document.getElementById("play").classList.remove("fa-pause-circle");
  //     val = 1;
  //   }
  // };

  return (
    <div className="bookContainer">
      <button
        className="btn"
        id="prev-btn"
        onClick={() =>
          currentLocation > 1 ? goback(i--, currentLocation--) : goback(1, 1)
        }
      >
        <i className="fas fa-arrow-circle-left"></i>
      </button>
      <div id="book" className="book">
        <Papers Data={Data} />
      </div>
      <button
        className="btn"
        id="next-btn"
        onClick={() => (i < numOfPage ? goforward(i++) : goforward(numOfPage))}
      >
        <i className="fas fa-arrow-circle-right"></i>
      </button>
    </div>
  );
};

export default Book;
