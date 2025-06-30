import "./iconCard.css";

const linkArr = [
  {
    src: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
    alt: "HTML5 Logo",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
    alt: "CSS3 Logo",
  },
  {
    src: "https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png",
    alt: "JavaScript Logo",
  },
  {
    src: "https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-512.png",
    alt: "React Logo",
  },
];

const IconCard = () => {
  return (
    <div className="iconCard__container">
      <div className="iconCard">
        <h1 className="iconCard__headline">Frontend Technologies</h1>
        <div className="iconCard__wrapper">
          {linkArr.map(({ src, alt }) => (
            <img src={src} alt={alt} key={alt} className="iconCard__img" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconCard;
