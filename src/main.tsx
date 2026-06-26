import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

import { Nav } from "./components/landing/Nav";
import { Hero } from "./components/landing/Hero";
import { RentVsOwn } from "./components/landing/RentVsOwn";
import { Project } from "./components/landing/Project";
import { FeaturedStudios } from "./components/landing/FeaturedStudios";
import { BeforeAfter } from "./components/landing/BeforeAfter";
import { Features } from "./components/landing/Features";
import { LiveOrInvest } from "./components/landing/LiveOrInvest";
import { Location } from "./components/landing/Location";
import { MortgageSimulator } from "./components/landing/MortgageSimulator";
import { Contact } from "./components/landing/Contact";
import { Footer } from "./components/landing/Footer";

function App() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <RentVsOwn />
      <div className="w-full bg-zinc-50 text-zinc-900">
        <MortgageSimulator />
      </div>
      <Project />
      <FeaturedStudios />
      <BeforeAfter />
      <Features />
      <LiveOrInvest />
      <Location />
      <Contact />
      <div id="nota-simulacion" className="scroll-mt-28">
        <Footer />
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
