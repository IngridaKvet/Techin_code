const user = {
  name: "John",
  userRole: "",
  isLoggedIn: false,
};

const RenderDifferent = () => {
  if (user.userRole === "Admin") {
    return (
      <p className="bg-blue-400 px-4 py-2 rounded">Exercise 4. Admin Panel</p>
    );
  } else if (user.userRole === "User") {
    return (
      <p className="bg-amber-400 px-4 py-2 rounded">Exercise 4. User Panel</p>
    );
  } else {
    return (
      <p className="bg-green-400 px-4 py-2 rounded">Exercise 4. Quest Page</p>
    );
  }
};

export default RenderDifferent;
