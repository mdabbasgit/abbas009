import React, { useMemo, useState } from "react";
import "./Stops.css";

function Stops({ routes }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const stops = useMemo(() => {
    const all = routes.flatMap((route) => route.stops.map((stop) => ({ ...stop, routeName: route.name })));
    const unique = Array.from(new Map(all.map((stop) => [stop.name, stop])).values());
    return unique.filter((stop) => stop.name.toLowerCase().includes(query.toLowerCase()));
  }, [routes, query]);

  return (
    <section className="page">
      <div className="page-heading"><span className="eyebrow">CAMPUS LOCATIONS</span><h1>Bus stops</h1><p>Find a stop and inspect its details.</p></div>
      <input className="stop-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search bus stops..." />

      <div className="stops-layout">
        <div className="stops-list">
          {stops.map((stop) => (
            <button className="stop-card" key={stop.name} onClick={() => setSelected(stop)}>
              <span className="pin">●</span>
              <span><strong>{stop.name}</strong><small>{stop.zone} zone • {stop.routeName}</small></span>
              <b>{stop.eta} min</b>
            </button>
          ))}
          {!stops.length && <div className="empty"><h3>No stops found</h3></div>}
        </div>

        <div className="stop-detail">
          {selected ? (
            <>
              <span className="eyebrow">STOP DETAILS</span>
              <h2>{selected.name}</h2>
              <p>{selected.zone} campus zone</p>
              <div className="big-eta">{selected.eta} <span>min ETA</span></div>
              <h4>Facilities</h4>
              <div className="facilities">{selected.facilities.map((facility) => <span key={facility}>{facility}</span>)}</div>
            </>
          ) : (
            <div className="select-message"><div>📍</div><h3>Select a stop</h3><p>Choose a stop from the list.</p></div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Stops;