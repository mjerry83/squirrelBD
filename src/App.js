import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import RandomSqr from "./components/RandomSqr";

import title from "./assets/제목.png";
import text from "./assets/부제.png";

function App() {
  const [isClicked, setIsClicked] = useState(10);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const getNumber = () => {
    let num = Math.floor(Math.random() * (5 - 0) + 1);
    return num;
  };

  const clickHandler = () => {
    const num = getNumber();
    setIsClicked(num);
  };

  const makeItDark = () => {
    setIsMouseOver(true);
  };

  const makeItBright = () => {
    setIsMouseOver(false);
  };

  const num = isClicked;

  return (
    <div
      style={{
        fontFamily: "fontContents",
        justifyContent: "center",
        textAlign: "center",
        margin: "auto auto 100px auto",
      }}
    >
      <img
        src={title}
        alt="생일을 축하한다 대럼지여"
        style={{ width: "92%", marginTop: "1.6rem" }}
      />
      <img
        src={text}
        alt="여기를 눌러 자네의 행운을 시험해보도록 하라."
        style={{
          width: "50%",
          marginTop: "1.6rem",
          cursor: "pointer",
          filter: `${isMouseOver ? "brightness(90%)" : "brightness(100%)"}`,
        }}
        onClick={clickHandler}
        onMouseOver={makeItDark}
        onMouseOut={makeItBright}
      />
      <RandomSqr num={num} />
    </div>
  );
}

export default App;
