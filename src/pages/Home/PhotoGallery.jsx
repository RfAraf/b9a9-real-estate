import { Link } from "react-router-dom";
import gallery1 from "../../assets/gallery-1.jpg";
import gallery2 from "../../assets/gallery-2.jpg";
import gallery3 from "../../assets/gallery-3.jpg";
import gallery4 from "../../assets/gallery-4.jpg";
import gallery5 from "../../assets/gallery-5.jpg";
import gallery6 from "../../assets/gallery-6.jpg";

const PhotoGallery = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse p-0">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Our Photo Gallery</h1>
            <p className="py-6">
              Explore the allure of our exquisite properties through our
              captivating photo gallery. Immerse yourself in stunning visuals
              and envision your future in these exceptional homes.
            </p>
            <Link to="/gallery">
              <button className="btn hidden lg:grid bg-cyan-400 text-cyan-100 hover:bg-white hover:border hover:border-cyan-400 hover:text-cyan-400 font-bold">
                View All Photos
              </button>
            </Link>
          </div>
          <div className="card shrink-0 w-full lg:max-w-lg xl:max-w-2xl ">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 *:rounded-2xl *:w-full">
              <img src={gallery1} alt="" />
              <img src={gallery2} alt="" />
              <img src={gallery3} alt="" />
              <img src={gallery4} alt="" />
              <img src={gallery5} alt="" />
              <img src={gallery6} alt="" />
            </div>
          </div>
          <Link to="/gallery">
            <button className="btn mt-5 lg:hidden bg-cyan-400 text-cyan-100 hover:bg-white hover:border hover:border-cyan-400 hover:text-cyan-400 font-bold">
              View All Photos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
