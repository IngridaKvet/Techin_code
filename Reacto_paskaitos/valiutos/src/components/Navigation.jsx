import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/list" end>
          Transactions
        </NavLink>
        <NavLink to="/add">Add transaction</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
