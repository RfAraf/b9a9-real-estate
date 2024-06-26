import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Register = () => {
  const { createUser, setReload, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState();
  const [showPassword, setShowPassword] = useState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, name, image } = data;

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
      setError(
        "Password must contains at least one uppercase and lowercase letter"
      );
      return;
    }
    setError("");

    // create user
    createUser(email, password)
      .then(() => {
        // update user profile
        updateUserProfile(name, image).then(() => {
          setReload(true);
          // navigate to home after register
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
    toast.success("Account created successfully.");
  };

  return (
    <div className="my-10">
      <h1 className="text-3xl text-center mb-5 font-bold">Register Now</h1>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-cyan-400 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="your name"
              className="input input-bordered border-cyan-400"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 mt-2 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              className="input input-bordered border-cyan-400"
              {...register("image")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered border-cyan-400"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 mt-2 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered border-cyan-400 w-full"
                {...register("password", { required: true })}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 cursor-pointer "
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </div>
            {errors.password && (
              <span className="text-red-500 mt-2 text-sm">
                This field is required
              </span>
            )}
            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-cyan-400 text-cyan-100 hover:bg-white hover:border hover:border-cyan-400 hover:text-cyan-400">
              Register
            </button>
            <p className="text-center mt-3">
              Do not have an account?{" "}
              <Link className="text-blue-500 font-bold" to="/login">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
