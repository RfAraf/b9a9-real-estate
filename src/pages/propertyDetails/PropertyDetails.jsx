import { ScrollRestoration, useLoaderData, useParams } from "react-router-dom";
import { MdGrid4X4 } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { GiHomeGarage } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import PropertyDetailsSlider from "./PropertyDetailsSlider";
import blueprint from "../../assets/floor-1.png";
import { Helmet } from "react-helmet-async";

const PropertyDetails = () => {
  const properties = useLoaderData();
  const { id } = useParams();
  const property = properties.find((property) => property.id === id);

  const {
    estate_title,
    image,
    segment_name,
    big_description,
    price,
    status,
    area,
    location,
    facilities,
    indoor_features,
    estate_overview,
    room_category,
  } = property;
  const { address, state, country, city, neighborhood, postal_code } = location;
  const { bedrooms, bathrooms, garages } = room_category;
  return (
    <div className="space-y-10 mb-20">
      <ScrollRestoration />
      <Helmet>
        <title>RF Real State | Property - {id}</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row gap-8 justify-between items-center mt-5">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold">{estate_title}</h2>
          <div className="flex flex-wrap gap-5">
            <h3 className="font-bold border-r-2 pr-5">{price}</h3>
            <h3 className="border-r-2 pr-5">{segment_name}</h3>
            <h3 className="border-r-2 pr-5">For {status}</h3>
            <h3 className="flex gap-2 items-center">
              <IoLocationOutline className="text-cyan-400" /> {address}, {state}
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <p className="flex  items-center gap-2 text-lg ">
            <MdGrid4X4 /> Size: <span className="font-bold">{area}</span>
          </p>
          <p className="flex  items-center gap-2 text-lg">
            <IoBedOutline /> Bedrooms:{" "}
            <span className="font-bold">{bedrooms}</span>
          </p>
          <p className="flex  items-center gap-2 text-lg">
            <LiaBathSolid /> Bathrooms:{" "}
            <span className="font-bold">{bathrooms}</span>
          </p>
          <p className="flex  items-center gap-2 text-lg">
            <GiHomeGarage /> Garages:{" "}
            <span className="font-bold">{garages}</span>
          </p>
        </div>
      </div>

      {/* swiper slider: Thumbs gallery loop */}
      <div className="my-7">
        <PropertyDetailsSlider image={image}></PropertyDetailsSlider>
      </div>

      <div className="space-y-5">
        <h1 className="text-2xl font-bold">Description</h1>
        <p>{big_description}</p>
      </div>

      <div className="space-y-5">
        <h1 className="text-2xl font-bold">Location</h1>
        <ul className="grid grid-cols-2">
          <li>
            <span className="font-semibold">Address: </span>
            {address}
          </li>
          <li>
            <span className="font-semibold">Country: </span>
            {country}
          </li>
          <li>
            <span className="font-semibold">Province / State: </span>
            {state}
          </li>
          <li>
            <span className="font-semibold">City / Town: </span>
            {city}
          </li>
          <li>
            <span className="font-semibold">Neighborhood: </span>
            {neighborhood}
          </li>
          <li>
            <span className="font-semibold">Postal Code / Zip: </span>
            {postal_code}
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-5">
          <h1 className="text-2xl font-semibold">Estate Overview</h1>
          <p>
            {estate_overview.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </p>
        </div>

        <div className="space-y-5 ">
          <h1 className="text-2xl font-semibold">Advance Facilities</h1>
          <p>
            {facilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </p>
        </div>

        <div className="space-y-5">
          <h1 className="text-2xl font-semibold">Indoor Features</h1>
          <p>
            {indoor_features.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </p>
        </div>
      </div>

      <div className="border ">
        <img className="pt-10" src={blueprint} alt="" />
        <p className="text-center px-10">
          Explore our diverse collection of meticulously crafted house
          blueprints, from modern minimalist designs to timeless classics,
          tailored to suit various preferences and lifestyles. Each blueprint is
          optimized for space and functionality, ensuring a seamless living
          experience. Visualize your dream home before it is even built, and
          take the first step towards turning it into a reality with our curated
          selection.
        </p>
        <div className="grid grid-cols-2 p-10">
          <div>
            <div className="border flex justify-between p-5">
              <p className="font-semibold">Size</p>
              <p>{area}</p>
            </div>
            <div className="border flex justify-between p-5">
              <p className="font-semibold">Bedrooms</p>
              <p>{bedrooms}</p>
            </div>
          </div>
          <div>
            <div className="border flex justify-between p-5">
              <p className="font-semibold">Bathrooms</p>
              <p>{bathrooms}</p>
            </div>
            <div className="border flex justify-between p-5">
              <p className="font-semibold">Garages</p>
              <p>{garages}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
