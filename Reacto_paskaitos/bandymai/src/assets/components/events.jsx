import { useState } from "react";

const Events = () => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState("");

  const addBook = (event) => {
    event.preventDefault();
    setBooks((books) => {
      return [...books, book];
    });
    setBook("");
  };

  const handleChange = (event) => {
    setBook(event.target.value);
  };

  const deleteBook = (bookToDelete) => {
    const filteredBooks = books.filter((book)=>
    {
        return book!=bookToDelete
    })
    setBooks(filteredBooks)

  };

  return (
    <>
      <div>
        {books.map((book, index) => (
          <div key={index}>
            <p>{book}</p>
            <button onClick={()=>deleteBook(book)}>Delete</button>
          </div>
        ))}
      </div>

      <form>
        <input type="text" value={book} onChange={handleChange} />
        <button onClick={addBook}>Add Book</button>
      </form>
    </>
  );
};

export default Events;
