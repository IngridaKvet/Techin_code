import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getOne } from "../services/get";

const TransactionDetails = () => {
  const { trID } = useParams();
  const [transaction, setTransaction] = useState({});
  const { id, amount, currency, type } = transaction;

  useEffect(() => {
    const fetchData = async () => {
      const transaction = await getOne(trID);
      setTransaction(() => transaction);
    };
    fetchData();
  }, [trID]);

  return (
    <div>
      <p>{id}</p>
      <p>{currency}</p>
      <p>{type}</p>
      <p>{amount}</p>
    </div>
  );
};

export default TransactionDetails;
