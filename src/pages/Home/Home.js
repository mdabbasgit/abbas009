import React from "react";
import { Link } from "react-router-dom";
import TaskCard from "../../components/TaskCard";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Button from "../../components/Button";
import { buses } from "../../data/tasks";
import "./Home.css";

function Home({ routes, favorites }) {
  const running = routes.filter((route) => route.status === "Running").length;
  const totalStops = routes.reduce((sum, route) => sum + route.stops.length, 0);

  return (
    <>
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">CAMPUS MOBILITY</span>
            <h1>Know your bus. <em>Know your arrival.</em></h1>
            <p>One simple place to explore campus routes, find stops and check estimated arrival times.</p>
            <div className="hero-buttons">
              <Link to="/routes"><Button>Explore routes →</Button></Link>
              <Link to="/status"><Button variant="secondary">Check bus status</Button></Link>
            </div>
          </div>
          <div className="hero-map">
            <div className="map-road r1" /><div className="map-road r2" /><div className="map-road r3" />
            <div className="map-building b1">LIBRARY</div>
            <div className="map-building b2">ENGINEERING</div>
            <div className="map-building b3">HOSTELS</div>
            <div className="map-dot d1" /><div className="map-dot d2" /><div className="map-dot d3" />
            <div className="map-bus">🚌</div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-inner">
          <div><strong>{running}</strong><span>Routes running</span></div>
          <div><strong>{totalStops}</strong><span>Campus stops</span></div>
          <div><strong>5 min</strong><span>Average ETA</span></div>
          <div><strong>{buses.length}</strong><span>Buses tracked</span></div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div><span className="eyebrow">QUICK ACCESS</span><h2>Popular routes</h2><p>Get where you need to go without guessing.</p></div>
          <Link to="/routes">See all routes →</Link>
        </div>
        <div className="route-grid">
          {routes.slice(0, 3).map((route) => (
            <TaskCard key={route.id} route={route} favorite={favorites.includes(route.id)} onFavorite={() => {}} />
          ))}
        </div>
      </section>

      <section className="home-lower">
        <Card className="how-card">
          <span className="eyebrow">HOW IT WORKS</span>
          <h2>Three steps to a smoother campus journey.</h2>
          {["Choose your route", "Select your stop", "Check the ETA"].map((step, i) => (
            <div className="step" key={step}><b>0{i + 1}</b><span>{step}</span></div>
          ))}
        </Card>
        <Card className="feedback-card">
          <span className="eyebrow">FEEDBACK</span>
          <h2>Help improve campus transport.</h2>
          <Form />
        </Card>
      </section>
    </>
  );
}

export default Home;