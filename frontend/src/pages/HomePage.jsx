import React from "react";
import House from "../components/House";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetApartmentsQuery } from "../redux/slices/apartmentsApiSlice";

const HomePage = () => {

  const { data: apartments, isLoading, error } = useGetApartmentsQuery();
  return (
    <div className="container mx-auto">
      {isLoading ? (<Loader />) : error ? (
        <Message message={error?.data?.message || error?.error} type='error' />  
        ) : (
        <section>
          <h1>Recent Houses</h1>
          <div className="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {apartments &&
              apartments.map((house) => <House key={house._id} house={house} />)}
          </div>
        </section>
      )}

    </div>
  );
};

export default HomePage;
