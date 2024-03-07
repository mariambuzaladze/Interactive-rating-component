import "./buttons.css";

export default function Buttons(props) {
  const buttonStyle = {
    backgroundImage: `url(${props.img})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: `${props.width}px`,
    height: `${props.height}px`,
    backgroundColor: `${props.backgroundColor}`,
    color: `${props.textColor}`,
    borderRadius: `${props.borderRadius}`,
  };

  return <button style={buttonStyle}>{props.text}</button>;
}
