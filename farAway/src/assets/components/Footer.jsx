const Footer = ({ items }) => {
  const checkedItemsCount = items.filter((item) => item.checked).length;
  const allItemsCount = items.length;

  return (
    <div className="bg-blue-300 flex justify-center p-6 font-bold">
      <p className=" text-zinc-500 text-lg font-bold">
        You have {allItemsCount} items on your list, and you already packed{" "}
        {((checkedItemsCount / allItemsCount) * 100).toFixed(2)} %
      </p>
    </div>
  );
};

export default Footer;
