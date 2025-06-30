import Item from "./Item";

const ItemsList = ({ items, fetchItems }) => {
  return (
    <div className="bg-amber-900 flex justify-center p-6 font-bold gap-7 h-[70vh]">
      <div className="flex flex-wrap gap-[50px] items-start h-fit justify-center m-12 w-[70vw]">
        {items.map((item) => (
          <Item key={item.id} item={item} fetchItems={fetchItems} />
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
