const BadgeCard = ({ badge }) => {
  return (
    <div className="badge-card">
      <h3>{badge.name}</h3>
      <p>{badge.description}</p>
    </div>
  );
};

export default BadgeCard;