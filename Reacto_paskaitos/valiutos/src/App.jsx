const API_URL = import.meta.env.VITE_API_URL;

import { lazy, Suspense, useState, useEffect } from "react";
const AddTransaction = lazy(() => import("./components/AddTransaction"));
const TransactionDetails = lazy(() =>
  import("./components/TransactionDetails")
);
const TransactionList = lazy(() => import("./components/TransactionList"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const NotFound = lazy(() => import("./components/NotFound"));
const Navigation = lazy(() => import("./components/Navigation"));
const EditTransaction = lazy(() => import("./components/EditTransaction"));
import Loading from "./components/Loading";
import { Routes, Route } from "react-router";

import { getAllData } from "./services/get";

function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchData = async () => {
    const transactions = await getAllData();
    setTransactions(() => transactions);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Navigation />

        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/edit/:trID" element={<EditTransaction />}/>
       
          <Route
            path="/list"
            element={<TransactionList transactions={transactions} />}
          >
            <Route path=":trID" element={<TransactionDetails />} />
          </Route>
          <Route
            path="/add"
            element={<AddTransaction fetchData={fetchData} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
