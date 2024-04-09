import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import TeamAgent from "./TeamAgent";

const Team = () => {
  const agents = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>RF Real State | Team</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {agents.map((agent, idx) => (
          <TeamAgent key={idx} agent={agent}></TeamAgent>
        ))}
      </div>
    </div>
  );
};

export default Team;
