import { Helmet } from "react-helmet-async";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import TeamAgent from "./TeamAgent";
import "animate.css";

const Team = () => {
  const agents = useLoaderData();
  return (
    <div className="animate__animated animate__zoomIn mb-20">
      <ScrollRestoration />
      <Helmet>
        <title>RF Real State | Team</title>
      </Helmet>
      <h2 className="text-5xl font-bold text-center my-10">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {agents.map((agent, idx) => (
          <TeamAgent key={idx} agent={agent}></TeamAgent>
        ))}
      </div>
    </div>
  );
};

export default Team;
