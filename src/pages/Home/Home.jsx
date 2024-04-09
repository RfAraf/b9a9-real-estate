import { Helmet } from "react-helmet-async";
import Slider from "./Slider";
import Properties from "./Properties";
import "animate.css";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>RF Real State | Home</title>
      </Helmet>
      <div className="mt-5 animate__animated animate__slideInUp">
        <Slider></Slider>
      </div>
      <div>
        <Properties></Properties>
      </div>
    </div>
  );
};

export default Home;
