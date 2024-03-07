import { useState } from "react";
import "./rating.css";
import Buttons from "../Buttons/Buttons";
import Star from "/images/icon-star.svg";

export default function Rating() {
  const [img, setImg] = useState(Star);
  const [text, setText] = useState(1);
  return (
    <div className="container">
      <Buttons text="" img={img} />

      <div className="text">
        <h1>How did we do?</h1>
        <p className="request">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <div className="button">
        <Buttons text="1" img="" />
        <Buttons text="2" img="" />
        <Buttons text="3" img="" />
        <Buttons text="4" img="" />
        <Buttons text="5" img="" />
      </div>
    </div>
  );
}
