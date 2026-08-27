import React, { useState } from "react";
import Button from "./Button";
import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim().length < 2) {
      setResult("Please enter your name.");
      return;
    }

    if (message.trim().length < 10) {
      setResult("Feedback must contain at least 10 characters.");
      return;
    }

    const saved = JSON.parse(localStorage.getItem("campusTransitFeedback") || "[]");
    saved.push({ name: name.trim(), message: message.trim(), createdAt: new Date().toISOString() });
    localStorage.setItem("campusTransitFeedback", JSON.stringify(saved));

    setName("");
    setMessage("");
    setResult("Thanks! Your feedback has been saved.");
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="feedback-name">Your name</label>
        <input id="feedback-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
      </div>
      <div className="form-field">
        <label htmlFor="feedback-message">Feedback</label>
        <textarea id="feedback-message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your journey..." rows="4" />
      </div>
      <Button type="submit">Submit feedback</Button>
      {result && <p className={result.startsWith("Thanks") ? "form-success" : "form-error"}>{result}</p>}
    </form>
  );
}

export default Form;