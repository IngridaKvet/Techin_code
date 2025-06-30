import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { updateData } from "../services/update";
import { getOne } from "../services/get";
import { useParams , useNavigate} from "react-router";

const EditTransaction = ({ fetchData }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const { trID } = useParams();
  console.log(trID);

  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
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
      await updateData(trID, data);
      navigate('/list')
     
      fetchData();
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    const setFormData = async () => {
      const transaction = await getOne(trID);
      if(transaction){
        setValue("type", transaction.type)
        setValue("amount", transaction.amount)
        setValue("currency", transaction.currency)

      }
    };
    setFormData();
  }, []);

  return (
    <>
      <p>{errorMsg}</p>
      <h2 className="text-red-400">Edit Invoice</h2>
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

        <input type="submit" value="Update" />
      </form>
    </>
  );
};

export default EditTransaction;
