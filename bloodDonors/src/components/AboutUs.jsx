import "../styles/aboutUs.css";
import donationIllustration from "../assets/donationIllustration.png";
import { useNavigate } from "react-router";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate(`/registration`);
  };

  return (
    <div className="aboutUs__wrapper">
      <div className="aboutUs__textSection">
        <h1 className="aboutUs__headline">Blood Donation</h1>
        <p className="aboutUs__text">
          Being a blood donor is a simple act that can save lives. Just one
          donation can help up to three people in need of blood due to surgery,
          accidents, or illness. It’s a quick, safe way to make a real
          difference in your community. Donating blood also has health benefits
          for the donor, such as stimulating the production of new blood cells
          and providing a free mini health check-up. Most importantly, it’s a
          powerful way to show compassion and support for those in critical
          need.
        </p>
        <button className="aboutUs__btn" onClick={handleRegisterClick}>Register to donate</button>
      </div>
      <div className="aboutUs__imageSection">
        <img src={donationIllustration} alt="Donation illustration" />
      </div>
    </div>
  );
};

export default AboutUs;
