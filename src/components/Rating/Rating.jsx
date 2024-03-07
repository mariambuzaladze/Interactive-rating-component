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
    </div>
  );
}
