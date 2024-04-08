import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Team from "../pages/Team";
import Gallery from "../pages/Gallery";
import UpdateProfile from "../pages/UpdateProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/team",
        element: <Team></Team>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
