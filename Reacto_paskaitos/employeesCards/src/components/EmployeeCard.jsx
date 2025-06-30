import { useState, useEffect } from "react";
import axios from "axios";
import "./employeeCard.css";

const EmployeeCard = () => {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/employees");
        console.log(response.data);
        if (response.status !== 200) throw new Error("Something went wrong");
        setEmployeeData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployeeData();
  }, []);

  return (
    <div className="cardWrapper">
      {employeeData.map((employee) => {
        return (
          <div className="employeeCard" key={employee.id}>
            <img
              className="logoImg"
              src={employee.logo}
              alt={`${employee.company} logo`}
            />
            <div className="textWrapper">
              <div className="headerWrapper">
                <h2 className="employeeCompany">{employee.company}</h2>
                <div>
                  {employee.new ? <div className="newBadge">NEW!</div> : null}
                </div>
                <div>
                  {employee.featured ? (
                    <div className="featuredBadge">FEATURED</div>
                  ) : null}
                </div>
              </div>

              <h1 className="employeePosition">{employee.position}</h1>
              <div className="subtextWrapper">
                <p>{employee.postedAt}</p>
                <p>•</p>
                <p>{employee.contract}</p>
                <p>•</p>
                <p>{employee.location}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeCard;
