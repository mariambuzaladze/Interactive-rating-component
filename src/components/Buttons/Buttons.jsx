import "./buttons.css";
import Star from "/images/icon-star.svg";

export default function Buttons(props) {
  return <button className={`${props.className}`}>{props.text}</button>;
}
