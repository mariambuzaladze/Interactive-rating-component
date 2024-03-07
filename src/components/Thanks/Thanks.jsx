import "./thanks.css";
import illustration from "/images/illustration-thank-you.svg";

export default function Thanks({ rate }) {
  return (
    <div className="result">
      <img src={illustration} alt="illustration of thank you" />
      <div className="selected">
        <p className="selected-text">You selected {rate} out of 5</p>
      </div>
      <div className="thanks-text">
        <h1 className="thank-you">Thank you!</h1>
        <p className="thanks-message">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
