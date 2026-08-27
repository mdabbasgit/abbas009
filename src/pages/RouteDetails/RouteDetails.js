import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/Button";
import "./RouteDetails.css";

function RouteDetails({ routes, favorites, onFavorite }) {
  const { routeId } = useParams();
  const route = routes.find((item) => item.id === routeId);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(0);
    const timer = setInterval(() => setOffset((value) => (value + 1) % 3), 60000);
    return () => clearInterval(timer);
  }, [routeId]);

  if (!route) {
    return <section className="page"><div className="empty"><h2>Route not found</h2><Link to="/routes">Back to routes</Link></div></section>;
  }

  return (
    <section className="page">
      <Link className="back" to="/routes">← Back to routes</Link>
      <div className="details-header">
        <div><span className={`status ${route.status.toLowerCase()}`}>{route.status}</span><h1>{route.name}</h1><p>{route.description}</p></div>
        <Button variant="secondary" onClick={() => onFavorite(route.id)}>{favorites.includes(route.id) ? "♥ Saved" : "♡ Save route"}</Button>
      </div>

      <div className="detail-summary">
        <div><b>{route.frequency}</b><span>Frequency</span></div>
        <div><b>{route.stops.length}</b><span>Stops</span></div>
        <div><b>{route.code}</b><span>Route code</span></div>
      </div>

      <div className="timeline-card">
        <h2>Upcoming stops</h2><p className="muted">Estimated arrivals update automatically.</p>
        {route.stops.map((stop) => {
          const eta = Math.max(1, stop.eta - offset);
          return (
            <div className="timeline-item" key={stop.id}>
              <div className="timeline-dot" />
              <div><strong>{stop.name}</strong><span>{stop.zone} zone</span></div>
              <b>{eta} min</b>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default RouteDetails;