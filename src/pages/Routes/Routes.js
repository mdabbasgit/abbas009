import React, { useMemo, useState } from "react";
import TaskCard from "../../components/TaskCard";
import "./Routes.css";

function Routes({ routes, favorites, onFavorite }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");

  const filteredRoutes = useMemo(() => {
    return routes
      .filter((route) => status === "All" || route.status === status)
      .filter((route) => `${route.name} ${route.code}`.toLowerCase().includes(query.toLowerCase()));
  }, [routes, query, status]);

  return (
    <section className="page">
      <div className="page-heading"><span className="eyebrow">TRANSIT NETWORK</span><h1>All routes</h1><p>Search and filter campus services.</p></div>
      <div className="route-tools">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search routes..." />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>All</option><option>Running</option><option>Delayed</option><option>Limited</option>
        </select>
      </div>
      {filteredRoutes.length ? (
        <div className="route-page-grid">
          {filteredRoutes.map((route) => <TaskCard key={route.id} route={route} favorite={favorites.includes(route.id)} onFavorite={onFavorite} />)}
        </div>
      ) : (
        <div className="empty"><h2>No routes found</h2><p>Try another search term or filter.</p></div>
      )}
    </section>
  );
}

export default Routes;