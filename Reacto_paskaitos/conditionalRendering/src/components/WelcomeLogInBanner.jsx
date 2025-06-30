import { useState } from "react";

const WelcomeLogInBanner = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div className="m-7 flex flex-col items-center justify-center gap-2.5">
      <p>Exercise 1</p>
      <div className="bg-green-300 px-4 py-2 rounded">
        {isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in</p>}
      </div>

      <button className="bg-blue-400 px-4 py-2 rounded" onClick={toggleLogin}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
    </div>
  );
};

export default WelcomeLogInBanner;
