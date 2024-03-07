import { useState } from "react";
import "./rating.css";
import Buttons from "../Buttons/Buttons";

export default function Rating() {
  const [text, setText] = useState("");
  const [className, setClassName] = useState("button");

  function displayButtons() {
    const buttons = [];
    for (let i = 1; i < 6; i++) {
      buttons.push(<Buttons key={i} text={i} className="number" />);
    }
    return buttons;
  }

  return (
    <div className="container">
      <Buttons text={text} className={className} />

      <div className="text">
        <h1>How did we do?</h1>
        <p className="request">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <div className="button">{displayButtons()}</div>
      <Buttons text="SUBMIT" className="submit" />
    </div>
  );
}
