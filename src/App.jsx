import React from "react";
import ServiceCard from "./components/ServiceCard";

function App() {
  return (
    <div>
      <h1>Service Listing:</h1>
      <ServiceCard title="Web Development" description="React Developer" />
      <ServiceCard title="Web Development" description="Full Stack Developer" />
    </div>
  );
}

export default App;
