import "../styles/donorCard.css";
import { useNavigate } from "react-router";
const DonorCard = ({donor}) => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate(`/donors/${donor.id}`);
  };


    return(
      <div className="donorCard">
        <div className="donorCard__wrapper"> 
          <p>{donor.firstName}</p>
          <p>{donor.lastName}</p>
          <p className="donorCard__bio">{donor.bio}</p>
          </div>
          <button className="seeMore__btn" onClick={handleSeeMore}>See more</button>

      </div>
    )
  }
  
  export default DonorCard