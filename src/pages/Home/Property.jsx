import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Property = ({ property }) => {
  const {
    id,
    estate_title,
    image,
    segment_name,
    small_description,
    price,
    status,
    area,
    location,
    facilities,
  } = property;
  const { address, state } = location;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img className="h-80" src={image} alt="Property" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{estate_title}</h2>
        <p>
          <span className="font-bold">Segment:</span> {segment_name}
        </p>
        <p>
          <span className="font-bold">Description:</span> {small_description}
        </p>
        <p>
          <span className="font-bold">Address:</span> {address}, {state}
        </p>
        <p>
          <span className="font-bold">Facilities:</span>{" "}
          {facilities.slice(0, 3).map((facility, idx) => (
            <li key={idx}>{facility}</li>
          ))}
        </p>
        <p>
          <span className="font-bold">Price:</span> {price}
        </p>
        <p>
          <span className="font-bold">Status:</span> {status}
        </p>
        <p>
          <span className="font-bold">Area:</span> {area}
        </p>
        <div className="mt-3">
          <Link to={`/property/${id}`}>
            <button className="btn bg-cyan-400 text-cyan-100 hover:bg-white hover:border hover:border-cyan-400 hover:text-cyan-400 font-bold  w-full">
              View Property
            </button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Property;
