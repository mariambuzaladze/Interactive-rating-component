import "./buttons.css";

export default function Buttons({ text, className }) {
  return <button className={className}>{text}</button>;
}
