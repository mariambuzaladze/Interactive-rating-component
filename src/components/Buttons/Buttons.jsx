import "./buttons.css";

export default function Buttons({ text, onClick, style }) {
  return (
    <button onClick={onClick} style={style} className="number">
      {text}
    </button>
  );
}
