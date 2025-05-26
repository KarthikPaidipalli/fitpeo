import "./Card.css";

interface CardProps {
  title: string;
  time: string;
  doctor?: string;
  icon: string;
  full?: boolean;
}

export const Card = ({ title, time, doctor, icon, full = false }: CardProps) => {
  return (
    <div className={`card ${full ? "card-full" : "card-default"}`}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <span className="card-icon">{icon}</span>
      </div>
      <p className="card-time">{time}</p>
      {doctor && <p className="card-doctor">{doctor}</p>}
    </div>
  );
};
