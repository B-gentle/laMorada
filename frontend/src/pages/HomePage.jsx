import React, { useState, useEffect } from "react";
import axios from 'axios'
import House from "../components/House";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/houses");
      setProducts(response.data);
    };

    fetchProducts()
  }, []);

  return (
    <div className="container mx-auto">
      <h1>Recent Houses</h1>
      <div className="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products &&
          products.map((house) => <House key={house._id} house={house} />)}
      </div>
    </div>
  );
};

export default HomePage;
