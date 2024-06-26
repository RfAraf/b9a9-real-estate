import { Helmet } from "react-helmet-async";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import gallery5 from "../assets/gallery-5.jpg";
import gallery6 from "../assets/gallery-6.jpg";
import gallery7 from "../assets/gallery-7.jpg";
import gallery8 from "../assets/gallery-8.jpg";
import gallery9 from "../assets/gallery-9.jpg";
import gallery10 from "../assets/gallery-10.jpg";
import gallery11 from "../assets/gallery-11.jpg";
import gallery12 from "../assets/gallery-12.jpg";
import "animate.css";
import { ScrollRestoration } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="animate__animated animate__zoomIn mb-20">
      <ScrollRestoration />
      <Helmet>
        <title>RF Real State | Gallery</title>
      </Helmet>
      <h2 className="text-5xl font-bold text-center my-10">Photo Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 *:rounded-2xl">
        <img className="w-full" src={gallery1} alt="" />
        <img className="w-full" src={gallery2} alt="" />
        <img className="w-full" src={gallery3} alt="" />
        <img className="w-full" src={gallery4} alt="" />
        <img className="w-full" src={gallery5} alt="" />
        <img className="w-full" src={gallery6} alt="" />
        <img className="w-full" src={gallery7} alt="" />
        <img className="w-full" src={gallery8} alt="" />
        <img className="w-full" src={gallery9} alt="" />
        <img className="w-full" src={gallery10} alt="" />
        <img className="w-full" src={gallery11} alt="" />
        <img className="w-full" src={gallery12} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
