import "./userCard.css";
import profileImg from "../assets/profile.jpg";
import Skill from "./Skill";

const skillsArr = [
  "HTML",
  "CSS",
  "Sass",
  "JS",
  "React",
  "Redux",
  "Node",
  "MongoDB",
  "Python",
  "Flask",
  "Django",
  "NumPy",
  "Pandas",
  "Data Analysis",
  "MYSQL",
  "GraphSQL",
  "D3.js",
  "Gatsby",
  "Docker",
  "Heroku",
  "Git",
];

const UserCard = () => {
  return (
    <div className="userCard__container">
      <div className="userCard">
        <img
          className="userCard__img"
          src={profileImg}
          alt="Asabeneh Yetayeh"
        />
        <h1 className="userCard__headline">ASABENEH YETAYEH</h1>
        <p className="userCard__intro">Senior Developer, Finland</p>
        <h2 className="userCard__subheadline">SKILLS</h2>
        <div className="userCard__skills">
          {skillsArr.map((skill, index) => (
            <Skill skill={skill} key={index} />
          ))}
        </div>
        <p className="userCard__joinDate">Joined on Aug 30, 2020</p>
      </div>
    </div>
  );
};

export default UserCard;
