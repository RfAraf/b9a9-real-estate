import { useEffect, useState } from "react";
import Property from "./Property";
import "animate.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("properties.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);
  return (
    <div className="animate__animated animate__slideInUp">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-center ">
          Properties For Sale & Rent
        </h2>
        <p className="text-center max-w-xl mx-auto mt-5">
          Find your dream property with ease on our real estate platform. Browse
          listings for sale or rent, and unlock the door to your next home or
          investment.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 ">
        {properties.map((property) => (
          <Property key={property.id} property={property}></Property>
        ))}
      </div>
    </div>
  );
};

export default Properties;
