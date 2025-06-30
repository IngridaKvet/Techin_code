import "./App.css";
import { Suspense, lazy, useState, useEffect } from "react";
import Loading from "./components/Loading";
import { Routes, Route } from "react-router";
import { getAllData } from "./services/get";

const Navigation = lazy(() => import("./components/Navigation"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const RegistrationForm = lazy(() => import("./components/RegistrationForm"));
const DonorsList = lazy(() => import("./components/DonorsList"));
const EditDonor = lazy(() => import("./components/EditDonor"));
const DonorDetails = lazy(() => import("./components/DonorDetails"));

function App() {
  const [donors, setDonors] = useState([]);

  const fetchData = async () => {
    const donors = await getAllData();
    setDonors(() => donors);
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
          <Route
            path="/registration"
            element={<RegistrationForm fetchData={fetchData} />}
          />
          <Route
            path="/donors"
            element={<DonorsList donors={donors} fetchData={fetchData} />}
          />
          <Route path="/donors/:donorId" element={<DonorDetails />} />
          <Route
            path="/edit/:donorId"
            element={<EditDonor fetchData={fetchData} />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
