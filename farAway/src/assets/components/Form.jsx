import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

const Form = (fetchItems) => {
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      quantity: "",
      checked: "",
    },
  });

  const formSubmitHandler = async (data) => {
    console.log(data);
    try {
      await axios.post(API_URL, data);
      fetchItems();
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="bg-amber-600 flex justify-center p-6 font-bold gap-3.5 items-center">
      <p>{errorMsg}</p>
      <p>What do you need for your trip?</p>
      <form onSubmit={handleSubmit(formSubmitHandler)} className="flex gap-2">
        <select
          id="quantity"
          {...register("quantity", { required: "Quantity is required" })}
          className="bg-amber-100 rounded-full px-5"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div>{errors.quantity?.message}</div>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          className="bg-amber-100 rounded-full px-5"
        />
        <div>{errors.name?.message}</div>
        <input
          type="submit"
          value="Submit"
          className="bg-green-300 px-3 py-2 rounded-2xl"
        />
      </form>
    </div>
  );
};

export default Form;
