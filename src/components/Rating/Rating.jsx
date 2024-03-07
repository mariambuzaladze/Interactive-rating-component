import "./rating.css";
import Buttons from "../Buttons/Buttons";
import Star from "/images/icon-star.svg";

export default function Rating() {
  function displayButtons() {
    const buttons = [];
    for (let i = 1; i < 6; i++) {
      buttons.push(<Buttons key={i} text={i} className="number" />);
    }
    return buttons;
  }

  return (
    <div className="container">
      <div className="star">
        <img src={Star} alt="star icon" />
      </div>

      <div className="text">
        <h1>How did we do?</h1>
        <p className="request">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <div className="numbers">{displayButtons()}</div>
      <button className="submit">SUBMIT</button>
    </div>
  );
}
