import { BiHomeHeart } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineHomeWork } from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { FaRegHandshake } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";

const PropertyServices = () => {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-center ">
          Real Estate Solutions
        </h2>
        <p className="text-center max-w-xl mx-auto mt-5">
          Discover comprehensive property services tailored to meet your needs.
          From buying and selling to leasing and property management, we have
          got you covered.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1 */}
        <div className="border p-10 flex flex-col items-center space-y-4 group  hover:border-cyan-400">
          <BiHomeHeart className="text-7xl group-hover:text-cyan-400" />
          <h3 className="font-bold text-2xl group-hover:text-cyan-400">
            Homes For Sale
          </h3>
          <p className="text-center">
            Unlock the door to your next home with our curated listings.
          </p>
        </div>
        {/* 2 */}
        <div className="border p-10 flex flex-col items-center space-y-4 group  hover:border-cyan-400">
          <IoHomeOutline className="text-7xl group-hover:text-cyan-400" />
          <h3 className="font-bold text-2xl group-hover:text-cyan-400">
            Homes For Rent
          </h3>
          <p className="text-center">
            Find your ideal rental space and settle into the perfect home.
          </p>
        </div>
        {/* 3 */}
        <div className="border p-10 flex flex-col items-center space-y-4 group  hover:border-cyan-400">
          <MdOutlineHomeWork className="text-7xl group-hover:text-cyan-400" />
          <h3 className="font-bold text-2xl group-hover:text-cyan-400">
            Homes For Mortgage
          </h3>
          <p className="text-center">
            Explore mortgage options and pave the way to homeownership with
            ease.
          </p>
        </div>
        {/* 4 */}
        <div className="border p-10 flex flex-col items-center space-y-4 group  hover:border-cyan-400">
          <FaRegHandshake className="text-7xl group-hover:text-cyan-400" />
          <h3 className="font-bold text-2xl group-hover:text-cyan-400">
            Matching Buyer
          </h3>
          <p className="text-center">
            Connect with your perfect property match and turn your dream into
            reality.
          </p>
        </div>
        {/* 5 */}
        <div className="border p-10 flex flex-col items-center space-y-4 group  hover:border-cyan-400">
          <HiOutlineHomeModern className="text-7xl group-hover:text-cyan-400" />
          <h3 className="font-bold text-2xl group-hover:text-cyan-400">
            Homes On Lease
          </h3>
          <p className="text-center">
            Discover the flexibility of leasing your ideal home with our diverse
            listings.
          </p>
        </div>
        {/* 6 */}
        <div className="border p-10 flex flex-col items-center space-y-4 group  hover:border-cyan-400">
          <GiProgression className="text-7xl group-hover:text-cyan-400" />
          <h3 className="font-bold text-2xl group-hover:text-cyan-400">
            Price Anaylsis
          </h3>
          <p className="text-center">
            Gain valuable insights with our comprehensive price analysis tool,
            empowering informed decisions in real estate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyServices;
