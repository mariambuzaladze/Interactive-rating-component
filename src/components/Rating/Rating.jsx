import "./rating.css";
import Buttons from "../Buttons/Buttons";
import Star from "/images/icon-star.svg";

export default function Rating() {
  const buttons = [1, 2, 3, 4, 5];

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

      <div className="numbers">
        {buttons.map((button) => (
          <Buttons key={button} text={button} />
        ))}
      </div>
      <button className="submit">SUBMIT</button>
    </div>
  );
}
