import { useEffect, useState } from "react";
import TeamAgent from "../team/TeamAgent";
import { Link } from "react-router-dom";

const TeamDisplay = () => {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    fetch("agents.json")
      .then((res) => res.json())
      .then((data) => setAgents(data));
  }, []);
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-center ">Our Expert Team</h2>
        <p className="text-center max-w-xl mx-auto mt-5">
          Meet our dedicated team of real estate professionals, ready to assist
          you every step of the way. With their expertise and commitment, we
          ensure your property journey is smooth and successful.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {agents.slice(0, 4).map((agent, idx) => (
          <TeamAgent key={idx} agent={agent}></TeamAgent>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/team">
          <button className="btn mt-10 bg-cyan-400 text-cyan-100 hover:bg-white hover:border hover:border-cyan-400 hover:text-cyan-400 font-bold">
            View All Agents
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TeamDisplay;
