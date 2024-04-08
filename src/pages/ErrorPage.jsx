import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center space-y-5">
        <h1 className="text-6xl">oops!</h1>
        <h1 className="text-4xl">You have lost</h1>
        <div>
          <Link to="/">
            <button className="btn">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
