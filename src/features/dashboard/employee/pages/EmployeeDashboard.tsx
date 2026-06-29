import type { User } from "../../../../types/auth.types";

interface Props {
  user: User;
}

export default function EmployeeDashboard({ user }: Props) {
  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Welcome, {user.name}</h1>
      <div className="stat-grid">
        <div className="stat-card">
          <span className="stat-card__label">My submissions</span>
          <span className="stat-card__value">4</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__label">Open</span>
          <span className="stat-card__value">2</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__label">Resolved</span>
          <span className="stat-card__value">2</span>
        </div>
      </div>
      <p className="dashboard__hint">
        Use the sidebar to submit a new report or track your cases.
      </p>
    </div>
  );
}
