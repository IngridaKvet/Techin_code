import "./SubscribeCard.css";

const SubscribeCard = () => {
  return (
    <div className="subscribeCard__container">
      <div className="subscribeCard">
        <h1 className="subscribeCard__headline">SUBSCRIBE</h1>
        <p className="subscribeCard__subheadline">
          Sign up with your email address to receive news and updates.
        </p>
        <form className="subscribeCard__form">
          <div className="subscribeCard__wrapper">
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="First name"
            ></input>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Last name"
            ></input>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            ></input>
          </div>
          <button className="subscribeCard__button" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeCard;
