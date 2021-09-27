import React, { useState } from "react";
import "./page.css";
import axios from "axios";
import { useHistory } from "react-router";
const Demo = ({ dsize }) => {
  let history = useHistory();

  var insta = 11;

  const [diaryText, setDiaryText] = useState({
    content: "",
    date: "",
  });
  const { content, date } = diaryText;
  var line = 0;

  var today = new Date();
  const dates =
    today.getFullYear() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    (today.getDate() + dsize - 2);

  const onsubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3001/posts", diaryText);
    history.push("/Read");
  };

  const onInputchange = (e) => {
    //console.log(e.target.value);
    setDiaryText({
      ...diaryText,
      content: e.target.value,
      date: dates,
    });
  };

  return (
    <>
      <form className="container" onSubmit={(e) => onsubmit(e)}>
        <div className="tittle-wrap">
          <span>Date:</span>

          <div className="tittle" name="date" value={date}>
            {dates}
          </div>
          <button
            className="navBtn"
            style={{ backgroundColor: "powderblue", marginLeft: "34%" }}
          >
            save
          </button>
          <div className="name">Dear Diary,</div>
        </div>

        <div className="line-wrap">
          <textarea
            type="text"
            title="line"
            placeholder="How was your day today"
            name="content"
            style={{ height: "350px" }}
            className="line"
            onChange={(e) => onInputchange(e)}
          ></textarea>
        </div>

        <div>page no {dsize}</div>
      </form>
    </>
  );
};

export default Demo;
