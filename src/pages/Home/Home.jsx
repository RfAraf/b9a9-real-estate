import { Helmet } from "react-helmet-async";
import Slider from "./Slider";
import Properties from "./Properties";
import PhotoGallery from "./PhotoGallery";
import PropertyServices from "./PropertyServices";

const Home = () => {
  return (
    <div className="space-y-20 mb-20">
      <Helmet>
        <title>RF Real State | Home</title>
      </Helmet>
      <Slider></Slider>
      <Properties></Properties>
      <PropertyServices></PropertyServices>
      <PhotoGallery></PhotoGallery>
    </div>
  );
};

export default Home;
