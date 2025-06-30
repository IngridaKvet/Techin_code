import { Outlet, Link } from "react-router";

const TransactionList = ({ transactions }) => {
  return (
    <>
      <div className="flex gap-5 flex-wrap">
        {transactions.map((transaction) => {
          const { id, amount, currency } = transaction;
          return (
            <div key={id} className="border p-5 w-[300px]">
              <p>{amount}</p>
              <p>{currency}</p>
              <Link to={`/list/${id}`}><button>Details</button></Link>
              <Link to={`/edit/${id}`}><button>Edit</button></Link>
            </div>
          );
        })}
      </div>
      <Outlet />
    </>
  );
};

export default TransactionList;
