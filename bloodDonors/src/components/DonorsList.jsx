import "../styles/donorList.css";
import DonorCard from "./DonorCard";

const DonorsList = ({donors, fetchData}) => {


fetchData();

const sortedDonors = [...donors].sort((a, b) => 
  a.lastName.localeCompare(b.lastName)
);


    return(
      <div className="donorsList__wrapper">
           {sortedDonors.map((donor) => (
          <DonorCard key={donor.id} donor={donor} />
        ))}
      </div>
    )
  }
  
  export default DonorsList