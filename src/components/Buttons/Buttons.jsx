import "./buttons.css";

export default function Buttons(props) {
  const buttonStyle = {
    backgroundImage: `url(${props.img})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return <button style={buttonStyle}>{props.text}</button>;
}
