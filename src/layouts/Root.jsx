import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/footer";

const Root = () => {
  return (
    <div>
      <div className="px-5 lg:max-w-4xl xl:max-w-6xl mx-auto mt-5">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
