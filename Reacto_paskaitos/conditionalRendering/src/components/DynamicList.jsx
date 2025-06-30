const tasks = ["Do the dishes", "Clean the kitchen", "Drink coffee"];

const DynamicList = () => {
  let content;
  if (tasks.length == 0) {
    content = <p>No tasks available</p>;
  } else
    content = (
      <div>
        {tasks.map((task, index) => (
          <div key={index} className="mb-2 p-2 bg-gray-200 rounded">
            {task}
          </div>
        ))}
      </div>
    );

  return (
    <div className="m-7 flex flex-col items-center justify-center gap-2.5">
      <p>Exercise 5</p>
      <div>{content}</div>
    </div>
  );
};

export default DynamicList;
