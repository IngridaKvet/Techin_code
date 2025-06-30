import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const Item = ({ item, fetchItems }) => {
  const checkItem = async () => {
    try {
      await axios.patch(`${API_URL}/${item.id}`, {
        checked: !item.checked,
      });
      fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex  gap-4 items-center max-h-fit">
      <button onClick={checkItem} className="bg-white w-6 h-6">
        {item.checked ? <p>✔</p> : ""}
      </button>
      <p className={`${item.checked ? "line-through" : ""}`}>
        {item.quantity} {item.name}
      </p>
      <button
        onClick={() => deleteItem(item.id)}
        className="text-red-500  text-2xl items-start"
      >
        X
      </button>
    </div>
  );
};

export default Item;
