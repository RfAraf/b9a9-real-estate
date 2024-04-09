/* eslint-disable react/prop-types */
const TeamAgent = ({ agent }) => {
  const { name, image, post } = agent;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="image" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p>{post}</p>
      </div>
    </div>
  );
};

export default TeamAgent;
