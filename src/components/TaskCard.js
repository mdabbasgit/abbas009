import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Button from "./Button";
import "./TaskCard.css";

function TaskCard({ route, favorite, onFavorite }) {
  return (
    <Card className="task-card">
      <div className={`route-line ${route.status.toLowerCase()}`} />
      <div className="task-card-content">
        <div className="task-top">
          <div>
            <span className={`status ${route.status.toLowerCase()}`}>{route.status}</span>
            <h3>{route.name}</h3>
            <p>{route.description}</p>
          </div>
          <button className="favorite" onClick={() => onFavorite(route.id)} aria-label="Save route">
            {favorite ? "♥" : "♡"}
          </button>
        </div>
        <div className="task-meta">
          <span>Every {route.frequency}</span>
          <span>{route.stops.length} stops</span>
          <span>{route.code}</span>
        </div>
        <div className="task-actions">
          <Link to={`/routes/${route.id}`} className="details-link">View route →</Link>
          <Button variant="secondary" onClick={() => onFavorite(route.id)}>
            {favorite ? "Saved" : "Save"}
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default TaskCard;