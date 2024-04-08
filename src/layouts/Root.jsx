import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const Root = () => {
  return (
    <div className="lg:max-w-4xl xl:max-w-6xl mx-auto mt-5">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
