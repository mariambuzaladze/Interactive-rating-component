import { useState } from "react";
import "./rating.css";
import Buttons from "../Buttons/Buttons";
import Star from "/images/icon-star.svg";

export default function Rating() {
  const [img, setImg] = useState(Star);
  const [text, setText] = useState("");
  const [height, setHeight] = useState(40);
  const [width, setWidth] = useState(40);
  const [backgroundColor, setBackgroundColor] = useState("#262e38");
  const [textColor, setTextColor] = useState("#7c8798");
  const [borderRadius, setBoderRadius] = useState("50%");

  function displayButtons() {
    const buttons = [];
    for (let i = 1; i < 6; i++) {
      buttons.push(
        <Buttons
          text={i}
          img=""
          height="42"
          width="42"
          backgroundColor={backgroundColor}
          textColor={textColor}
          borderRadius={borderRadius}
        />
      );
    }
    return buttons;
  }

  return (
    <div className="container">
      <Buttons
        text={text}
        img={img}
        height={height}
        width={width}
        backgroundColor={backgroundColor}
        textColor={textColor}
        borderRadius={borderRadius}
      />

      <div className="text">
        <h1>How did we do?</h1>
        <p className="request">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <div className="button">{displayButtons()}</div>
      <Buttons
        text="SUBMIT"
        img=""
        height="45"
        width="279"
        backgroundColor="#fc7614"
        textColor="#fff"
        borderRadius="22.5px"
      />
    </div>
  );
}
