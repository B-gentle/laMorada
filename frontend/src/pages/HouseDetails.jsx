import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import axios from "axios";
// import products from '../products';

const HouseDetails = () => {

  const { id } = useParams(); 
  const [apartment, setApartment] = useState([]);

  useEffect(() => {
    const fetchHouse = async () => {
      const response = await axios.get(`/api/houses/${id}`)
      setApartment(response.data);
    }

    fetchHouse();
    
  }, [id])
  
  return (
    <>
      <Link
        to="/"
        className="no-underline bg-[#cc5500] text-white p-2 my-6 rounded"
      >
        Go back
      </Link>
      <div className="grid md:grid-cols-12 gap-4 mt-[2rem] container">
        <div className="md:col-span-5">
          <img
            src={apartment.image}
            className="w-full object-cover"
            alt={apartment.name}
          />
        </div>
        <div className="md:col-span-4 m-auto md:mx-0 md:my-auto md:space-y-4">
          <h3 className="text-[2rem]">{apartment.name}</h3>
          <hr />
          <Rating value={apartment.rating} text={`${apartment.numReviews} reviews`} />
          <hr />
          <p className="text-[#cc5500] text-[1.2rem] font-[500]">
            {" "}
            Price: &#8358;{apartment.price}
          </p>
        </div>
        <div className="md:col-span-3 shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 border border-black-300 p-2 text-[1.2rem]">
          <label className="mr-2 font-[600]">Location:</label>
          <span>{apartment.description}</span>
          <hr />
          <label className="mr-2 font-[600]">Status: </label>
          <span>{apartment.countInStock > 0 ? "Available" : "Rented"}</span>
          <hr />
          <button
          type="button"
          className="bg-[#cc5500] text-white border-none p-3 rounded"
           disabled={apartment.countInStock === 0}>Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default HouseDetails;
