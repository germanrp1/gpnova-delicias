// import React from "react";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

import { Nav } from "./components/landing/Nav";
import { Hero } from "./components/landing/Hero";
// import { RentVsOwn } from "./components/landing/RentVsOwn";
import { BuyerModeSelector } from "./components/landing/BuyerModeSelector";
import { SmartSimulator } from "./components/landing/SmartSimulator";
import { MortgageCalculator } from "./components/landing/MortgageCalculator";
import { ProfitCalculator } from "./components/landing/ProfitCalculator";
import { Project } from "./components/landing/Project";
import { Gallery } from "./components/landing/Gallery_Old";
import { Transformation } from "./components/landing/Transformation";
import { Highlights } from "./components/landing/Highlights";
import { LiveOrInvest } from "./components/landing/LiveOrInvest";
import { Location } from "./components/landing/Location";
import { Contact } from "./components/landing/Contact";
import { Footer } from "./components/landing/Footer";

// Ahora centralizamos todo el SEO, para que desde el projecto.config.ts lo cambiemos para cada operación
//  Nueva de GP NOVA
import { project as projectConfig } from "@/data/project.config";
// Renombro el objeto de configuración project (con p minúscula) como projectConfig
//    para no confundirlo con el objeto React Project (con P mayúscula)
document.title = projectConfig.seo.seoTitle;

const setMeta = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
};
setMeta("description", projectConfig.seo.seoDescription);

function App() {
  
  const [buyerMode, setBuyerMode] = useState<"living" | "investing">("living");
  

  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      {/* <LiveOrInvest /> */}
      <BuyerModeSelector
        buyerMode={buyerMode}
        setBuyerMode={setBuyerMode}
      />
      
      <div className="w-full bg-zinc-50 text-zinc-900">
        <SmartSimulator
          buyerMode={buyerMode}
        />
      </div>

      <Project />

      <Highlights />

      <Gallery />
      <Transformation />
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
