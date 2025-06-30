import "../styles/donorDetails.css";
import { useParams, useNavigate, Link} from "react-router";
import { useState, useEffect } from "react";
import { getOne } from "../services/get";
import { deleteData } from "../services/delete";

const DonorDetails = () => {
  const { donorId } = useParams();
  const navigate = useNavigate();
  const [donor, setDonor] = useState({});
  const {id, firstName, lastName, age, gender, bloodGroup, bio } = donor;

  const handleDelete = async () => {
    await deleteData(id);
    
    alert("Donor deleted successfully!");
    navigate("/donors"); // navigate after deletion
  };

  useEffect(() => {
    const fetchData = async () => {
      const donor = await getOne(donorId);
      setDonor(() => donor);
    };
    fetchData();
  }, [donorId]);

  return (
    <div className="donorDetail__wrapper">
      <div className="donorDetails__textSection">
        <h1 className="donorDetails__headline">{firstName} {lastName}</h1>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Blood group: {bloodGroup}</p>
        <p>Bio: {bio}</p>
      </div>
      <div className="donorDetails__btnSection">
        <Link to={`/edit/${id}`}><button className="donorDetails__editBtn">Edit Donor</button></Link>
        <button className="donorDetails__deleteBtn" onClick={handleDelete}>Delete donor</button>
        </div>

     
    </div>
  );
};

export default DonorDetails;
