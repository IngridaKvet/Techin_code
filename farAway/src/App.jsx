import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import ItemsList from "./assets/components/ItemsList";
import Form from "./assets/components/Form";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await axios.get(API_URL);
      if (response.status !== 200) throw new Error("Something went wrong");
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <Header />
      <Form fetchItems={fetchItems} />
      <ItemsList items={items} fetchItems={fetchItems} />
      <Footer items={items} />
    </>
  );
}

export default App;
