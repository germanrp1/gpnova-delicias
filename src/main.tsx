import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

import { Nav } from "./components/maroto/Nav";
import { Hero } from "./components/maroto/Hero";
import { RentVsOwn } from "./components/maroto/RentVsOwn";
import { Project } from "./components/maroto/Project";
import { FeaturedStudios } from "./components/maroto/FeaturedStudios";
import { BeforeAfter } from "./components/maroto/BeforeAfter";
import { Features } from "./components/maroto/Features";
import { LiveOrInvest } from "./components/maroto/LiveOrInvest";
import { Location } from "./components/maroto/Location";
import { Contact } from "./components/maroto/Contact";
import { Footer } from "./components/maroto/Footer";

function App() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <RentVsOwn />
      <Project />
      <FeaturedStudios />
      <BeforeAfter />
      <Features />
      <LiveOrInvest />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
