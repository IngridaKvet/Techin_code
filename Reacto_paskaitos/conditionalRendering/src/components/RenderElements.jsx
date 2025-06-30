import { useState } from "react";

const RenderElements = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div className="m-7 flex flex-col items-center justify-center gap-2.5">
      <p>Exercise 3</p>
      <div>
        {isLoggedIn ? (
            <>
          <button>Profile</button>
          <button
          className="bg-blue-400 px-4 py-2 rounded"
          onClick={toggleLogin}
        >
          Back
        </button>
        </>
        ) : (
          <>
            <button
              className="bg-blue-400 px-4 py-2 rounded"
              onClick={toggleLogin}
            >
              {isLoggedIn ? "Log out" : "Log in"}
            </button>
            <button>Sign up</button>
          </>
        )}
      </div>
    </div>
  );
};

export default RenderElements;
