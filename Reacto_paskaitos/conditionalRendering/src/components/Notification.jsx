const notifications = [
  {
    text: "User 1895, Welcome back!",
    type: "success",
  },
  {
    text: "User not found",
    type: "error",
  },
  {
    text: "Passwords must match",
    type: "warning",
  },
];

const Notification = () => {
  return (
    <div className="m-7 flex flex-col items-center justify-center gap-2.5">
      <p>Exercise 6</p>
      {notifications.map((notification, index) => {
        let bgColor = "";

        if (notification.type === "success") bgColor = "bg-green-300";
        else if (notification.type === "error") bgColor = "bg-red-300";
        else if (notification.type === "warning") bgColor = "bg-yellow-300";

        return (
          <div key={index} className={`mb-2 p-2 rounded flex gap-2 ${bgColor}`}>
            {notification.text}
          </div>
        );
      })}
    </div>
  );
};

export default Notification;
