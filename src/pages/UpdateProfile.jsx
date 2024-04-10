import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";

const UpdateProfile = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { user } = useContext(AuthContext);
  const { updateUserProfile } = useContext(AuthContext);

  useEffect(() => {
    setValue("name", `${user.displayName}`);
    setValue("image", `${user.photoURL}`);
    setValue("email", `${user.email}`);
  }, [setValue]);

  const onSubmit = (data) => {
    const { name, image } = data;
    updateUserProfile(name, image).then((result) => console.log(result));
  };

  return (
    <div>
      <Helmet>
        <title>RF Real State | Update Profile</title>
      </Helmet>

      <div className="my-10">
        <h1 className="text-3xl text-center mb-10 font-bold">
          Update your profile
        </h1>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100  mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="your name"
                className="input input-bordered"
                {...register("name")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                className="input input-bordered"
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
                className="input input-bordered"
                {...register("email")}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
