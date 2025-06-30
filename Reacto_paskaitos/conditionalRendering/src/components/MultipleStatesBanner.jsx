import { useState } from "react";

const MultipleStatesBanner = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const [isLoading, setIsLoading] = useState(false);
  const toggleLoading = () => {
    setIsLoading((prev) => !prev);
  };

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isLoggedIn) {
    content = <p>Welcome, User!</p>;
  } else {
    content = <p>Please log in</p>;
  }

  return (
    <div className="m-7 flex flex-col items-center justify-center gap-2.5">
      <p>Exercise 2</p>
      <div className="bg-amber-500 px-4 py-2 rounded">{content}</div>

      <button className="bg-blue-400 px-4 py-2 rounded" onClick={toggleLogin}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>

      <button className="bg-blue-400 px-4 py-2 rounded" onClick={toggleLoading}>
        {isLoading ? "Simulating loading" : "Simulate loading"}
      </button>
    </div>
  );
};

export default MultipleStatesBanner;
