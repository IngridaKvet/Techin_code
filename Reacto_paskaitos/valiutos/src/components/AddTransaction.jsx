import { useForm } from "react-hook-form";
import { useState } from "react";
import { postData } from "../services/post";

const AddTransaction = ({ fetchData }) => {
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      type: "",
      amount: "",
      currency: "",
    },
  });

  const formSubmitHandler = async (data) => {
    console.log(data);
    try {
      const response = postData(data);
      if (response.status === 201) alert("Sucessfully posted");
      reset();
      fetchData();
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <>
      <p>{errorMsg}</p>
      <h2 className="text-red-400">Invoice Form</h2>
      <form onSubmit={handleSubmit(formSubmitHandler)} className="flex row">
        <div>
          <label htmlFor="type">Invoice Type:</label>
          <input
            type="text"
            id="type"
            {...register("type", { required: "Type is required" })}
          />
          <div>{errors.type?.message}</div>
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            {...register("amount", { required: "Amount is required" })}
          />
          <div>{errors.amount?.message}</div>
        </div>
        <div>
          <label htmlFor="currency">Currency:</label>
          <input
            type="text"
            id="currency"
            {...register("currency", { required: "Currency is required" })}
          />
          <div>{errors.currency?.message}</div>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default AddTransaction;
