import "./styles.css";

interface CardProps {
  image: string;
  name: string;
}

export const Card = ({ image, name }: CardProps) => {
  return (
    <div
      className="ui-card"
    >
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
};
