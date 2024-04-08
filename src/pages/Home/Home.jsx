import { Helmet } from "react-helmet-async";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>RF Real State | Home</title>
      </Helmet>
      <div className="mt-5">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Home;
