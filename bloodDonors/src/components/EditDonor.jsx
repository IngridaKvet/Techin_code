import "../styles/registrationForm.css";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { updateData } from "../services/update";
import { getOne } from "../services/get";
import { useParams, useNavigate } from "react-router";
import donationIllustration from "../assets/donationIllustration.png";

const EditDonor = ({ fetchData }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const { donorId } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      bloodGroup: "",
      bio: "",
    },
  });

  const formSubmitHandler = async (data) => {
    try {
      await updateData(donorId, data);
      alert("Donor data updated successfully!");
      navigate("/donors");
      fetchData();
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    const setFormData = async () => {
      const donor = await getOne(donorId);
      if (donor) {
        setValue("firstName", donor.firstName);
        setValue("lastName", donor.lastName);
        setValue("age", donor.age);
        setValue("gender", donor.gender);
        setValue("bloodGroup", donor.bloodGroup);
        setValue("bio", donor.bio);
      }
    };
    setFormData();
  }, [donorId, setValue]);

  return (
    <div className="registration__wrapper">
      <div className="registration__formSection">
        <h2 className="form__headline">Registration Form</h2>
        <form
          onSubmit={handleSubmit(formSubmitHandler)}
          className="form__wrapper"
        >
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
                min: { value: 18, message: "Minimum age is 18" },
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
              {...register("bloodGroup", {
                required: "Blood group is required",
              })}
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
            <textarea id="bio" rows="4" {...register("bio")}></textarea>
          </div>
          <p>{errorMsg}</p>

          <input className="form__btn" type="submit" value="Update" />
        </form>
      </div>
      <div className="registration__imgSection">
        <img src={donationIllustration} alt="Donation illustration" />
      </div>
    </div>
  );
};

export default EditDonor;
