import "../styles/registrationForm.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { postData } from "../services/post";
import donationIllustration from "../assets/donationIllustration.png";

const RegistrationForm = ({ fetchData }) => {
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      bloodGroup: "",
      bio: ""
    },
  });

  const formSubmitHandler = async (data) => {
    console.log(data);
    try {
      await postData(data);
      alert("Data was successfully posted!");
      reset();
      fetchData();
    } catch (error) {
      setErrorMsg(error.message);
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
<div className="registration__wrapper">
  <div className="registration__formSection">
    <h2 className="form__headline">Registration Form</h2>
    <form onSubmit={handleSubmit(formSubmitHandler)} className="form__wrapper">
      {/* First name */}
      <div className="form__input">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          {...register("firstName", { required: "First name is required" })}
        />
        <div className="form__errror">{errors.firstName?.message}</div>
      </div>

      {/* Last name */}
      <div className="form__input">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          {...register("lastName", { required: "Last name is required" })}
        />
        <div className="form__errror">{errors.lastName?.message}</div>
      </div>

      {/* Age */}
      <div className="form__input">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          {...register("age", {
            required: "Age is required",
            min: { value: 18, message: "Minimum age is 18" }
          })}
        />
        <div className="form__errror">{errors.age?.message}</div>
      </div>

      {/* Gender */}
      <div className="form__input">
        <label htmlFor="gender">Gender:</label>
        <div>
          <label>
            <input
              type="radio"
              value="Male"
              {...register("gender", { required: "Gender is required" })}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="Female"
              {...register("gender", { required: "Gender is required" })}
            />
            Female
          </label>
        </div>
        <div className="form__errror">{errors.gender?.message}</div>
      </div>

      {/* Blood group */}
      <div className="form__input">
        <label htmlFor="bloodGroup">Blood Group</label>
        <select
          id="bloodGroup"
          {...register("bloodGroup", { required: "Blood group is required" })}
        >
          <option value="">Select</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <div className="form__errror">{errors.bloodGroup?.message}</div>
      </div>

      {/* Bio */}
      <div className="form__input">
        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          rows="4"
          {...register("bio")}
        ></textarea>
      </div>
      <p>{errorMsg}</p>

      <input className="form__btn" type="submit" value="Submit" />
    </form>
  </div>
<div className="registration__imgSection">
<img src={donationIllustration} alt="Donation illustration" />
</div>
  
  </div>
  );
};

export default RegistrationForm;
