import { NavLink, useLocation } from "react-router";
import "../styles/navigation.css";

const Navigation = () => {
  const location = useLocation();
  const isDonorDetailsPage = /^\/donors\/[^/]+$/.test(location.pathname);
  const isEditDonorPage = /^\/edit\/[\w-]+$/.test(location.pathname);


  return (
    <div>
      <nav className="navigation">
        <NavLink className="nav__link" to="/" end>
          About Us
        </NavLink>
        <NavLink className="nav__link" to="/registration">
          Registration
        </NavLink>
        <NavLink className="nav__link" to="/donors" end>
          Donors
        </NavLink>
        {isDonorDetailsPage && <span  className="nav__link active"> Donor Details</span>}
        {isEditDonorPage && <span className="nav__link active">Edit Donor</span>}
      </nav>
    </div>
  );
};

export default Navigation;
