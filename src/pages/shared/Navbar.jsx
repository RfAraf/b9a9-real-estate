import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import userProfile from "../../assets/user.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const navLinks = (
    <>
      <li className="font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/team">Team</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/updateProfile">Update Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
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
          <h1 className=" text-3xl font-bold cursor-pointer">RF Real Estate</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
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

            <button onClick={logout} className="btn">
              Log out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn">Log in</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
