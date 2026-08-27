import React, { useMemo, useState } from "react";
import Table from "../../components/Table";
import "./BusStatus.css";

function BusStatus({ buses }) {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => buses.filter((bus) => filter === "All" || bus.status === filter),
    [buses, filter]
  );

  const counts = buses.reduce((result, bus) => {
    if (bus.status === "On Time") result.onTime += 1;
    else if (bus.status === "Delayed") result.delayed += 1;
    else result.limited += 1;
    return result;
  }, { onTime: 0, delayed: 0, limited: 0 });

  const columns = [
    { key: "id", label: "Bus" },
    { key: "location", label: "Current location" },
    { key: "nextStop", label: "Next stop" },
    { key: "eta", label: "ETA", render: (row) => `${row.eta} min` },
    { key: "occupancy", label: "Occupancy", render: (row) => `${row.occupancy}%` },
    { key: "status", label: "Status", render: (row) => <span className={`table-status ${row.status.toLowerCase().replaceAll(" ", "-")}`}>{row.status}</span> }
  ];

  return (
    <section className="page">
      <div className="page-heading"><span className="eyebrow">OPERATIONS</span><h1>Bus status</h1><p>Current simulated service information.</p></div>

      <div className="status-cards">
        <div><strong>{counts.onTime}</strong><span>On time</span></div>
        <div><strong>{counts.delayed}</strong><span>Delayed</span></div>
        <div><strong>{counts.limited}</strong><span>Limited service</span></div>
      </div>

      <div className="status-filters">
        {["All", "On Time", "Delayed", "Limited Service"].map((item) => (
          <button key={item} className={filter === item ? "selected" : ""} onClick={() => setFilter(item)}>{item}</button>
        ))}
      </div>

      {filtered.length ? <Table columns={columns} data={filtered} /> : <div className="empty"><h3>No buses match this status.</h3></div>}
    </section>
  );
}

export default BusStatus;