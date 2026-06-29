import type { User } from "../../types/auth.types";

interface Props {
  user: User;
}

export default function HRDashboard({ user }: Props) {
  return (
    <div className="dashboard">
      <h1 className="dashboard__title">HR Overview — {user.name}</h1>
      <div className="stat-grid">
        <div className="stat-card">
          <span className="stat-card__label">Total cases</span>
          <span className="stat-card__value">142</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__label">Open cases</span>
          <span className="stat-card__value">38</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__label">Critical</span>
          <span className="stat-card__value stat-card__value--danger">7</span>
        </div>
      </div>
    </div>
  );
}
