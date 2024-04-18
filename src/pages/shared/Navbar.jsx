import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import userProfile from "../../assets/user.png";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navLinks = (
    <>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-white border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg"
              : "hover:bg-white hover:text-cyan-400 py-2 px-4 border border-transparent"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-white border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg"
              : "hover:bg-white hover:text-cyan-400 py-2 px-4 border border-transparent"
          }
          to="/team"
        >
          Team
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-white border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg"
              : "hover:bg-white hover:text-cyan-400 py-2 px-4 border border-transparent"
          }
          to="/gallery"
        >
          Gallery
        </NavLink>
      </li>
      {user && (
        <li className="font-bold">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-white border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg"
                : "hover:bg-white  hover:text-cyan-400 py-2 px-4 border border-transparent"
            }
            to="/updateProfile"
          >
            Update Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100  justify-center">
      <div className="navbar-start  w-3/4 ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <Link to="/">
          <div className="flex items-center">
            <img className="w-10 md:w-20 lg:w-16 xl:w-20" src={logo} alt="" />
            <h1 className="md:text-3xl lg:text-2xl xl:text-3xl font-bold cursor-pointer">
              RF <span className="text-cyan-400">REAL</span> ESTATE
            </h1>
          </div>
        </Link>
      </div>
      <div className="navbar-center justify-center  hidden lg:flex  ">
        <ul className="menu-horizontal">{navLinks}</ul>
      </div>
      <div className="navbar-end ">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="tooltip" data-tip={user.displayName}>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL || userProfile}
                  />
                </div>
              </div>
            </div>

            <button
              onClick={logout}
              className="btn font-bold bg-cyan-400 text-cyan-100 hover:bg-white hover:border hover:border-cyan-400 hover:text-cyan-400"
            >
              Log out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn font-bold bg-cyan-400 text-cyan-100 hover:bg-white hover:border hover:border-cyan-400 hover:text-cyan-400">
              Log in
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
