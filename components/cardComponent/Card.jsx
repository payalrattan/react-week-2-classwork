import "./card.css";
export const CardComponent = ({ title, description, imageUrl }) => {
  return (
    <div className="card-component">
      <img src={imageUrl} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
