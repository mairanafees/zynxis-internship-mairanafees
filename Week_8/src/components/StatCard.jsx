function StatCard({
  title,
  value,
  change,
  icon: Icon,
  positive = true,
}) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div className="stat-icon">
          <Icon size={20} />
        </div>

        <span className={positive ? "positive" : "negative"}>
          {change}
        </span>
      </div>

      <div className="stat-value">
        {value}
      </div>

      <div className="stat-title">
        {title}
      </div>
    </div>
  );
}

export default StatCard;