import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import RoutesPage from "./pages/Routes/Routes";
import RouteDetails from "./pages/RouteDetails/RouteDetails";
import Stops from "./pages/Stops/Stops";
import BusStatus from "./pages/BusStatus/BusStatus";
import { routes, buses } from "./data/tasks";
import "./App.css";

function App() {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("campusTransitFavorites") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("campusTransitFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (routeId) => {
    setFavorites((current) =>
      current.includes(routeId)
        ? current.filter((id) => id !== routeId)
        : [...current, routeId]
    );
  };

  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home routes={routes} favorites={favorites} />} />
          <Route path="/routes" element={<RoutesPage routes={routes} favorites={favorites} onFavorite={toggleFavorite} />} />
          <Route path="/routes/:routeId" element={<RouteDetails routes={routes} favorites={favorites} onFavorite={toggleFavorite} />} />
          <Route path="/stops" element={<Stops routes={routes} />} />
          <Route path="/status" element={<BusStatus buses={buses} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">CampusTransit • React.js Campus Transport Demo</footer>
    </div>
  );
}

function NotFound() {
  return <section className="page"><div className="empty"><h2>404 — Page not found</h2><p>Return to the home page to continue.</p></div></section>;
}

export default App;