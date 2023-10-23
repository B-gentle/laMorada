import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetApartmentDetailsQuery } from "../redux/slices/apartmentsApiSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";


const HouseDetails = () => {

  const [qty, setQty] = useState(1)

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: apartment, isLoading, error } = useGetApartmentDetailsQuery(id)

  const addToCartHandler = () => {
    dispatch(addToCart({ ...apartment, qty }))
    navigate('/cart')
  }

  return (
    <>
      {isLoading ? (<Loader />) : error ? (
        <Message message={error?.data?.message || error?.error} type='error' />
      ) : (
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

              {apartment.countInStock > 0 &&
                <>
                  <label className="mr-2 font-[600]">Quantity:</label>
                  <select value={qty} onChange={(e) => { setQty(Number(e.target.value))}}>
                    {
                      [...Array(apartment.countInStock).keys()].map((apartment) => {
                        return <option key={apartment + 1} value={apartment + 1}>
                          {apartment + 1}
                        </option>
                      })
                    }
                  </select>
                </>
              }
              <hr />

              <button
                className="bg-[#cc5500] text-white border-none p-3 rounded"
                disabled={apartment.countInStock === 0}
                onClick={addToCartHandler}>Add To Cart</button>
            </div>
          </div>
        </>
      )}

    </>
  );
};

export default HouseDetails;
