import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { RentVsOwn } from "@/components/landing/BuyerModeSelector";
import { Project } from "@/components/landing/Project";
import { FeaturedStudios } from "@/components/landing/Gallery";
import { BeforeAfter } from "@/components/landing/Transformation";
import { Features } from "@/components/landing/Highlights";
import { LiveOrInvest } from "@/components/landing/LiveOrInvest";
import { Location } from "@/components/landing/Location";
import { MortgageSimulator } from '@/components/landing/MortgageCalculator'; // Importación limpia
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MAROTO · Estudios reformados en Málaga capital" },
      {
        name: "description",
        content:
          "Tu vivienda propia en Málaga por una cuota similar a un alquiler. Cuatro estudios completamente reformados, listos para entrar a vivir o invertir.",
      },
      { property: "og:title", content: "MAROTO · Estudios reformados en Málaga" },
      {
        property: "og:description",
        content:
          "Deja de pagar alquiler y empieza a construir patrimonio. Estudios reformados listos para entrar a vivir.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ApartmentComplex",
          name: "MAROTO",
          description:
            "Cuatro estudios completamente reformados en Málaga capital, listos para entrar a vivir o invertir.",
          numberOfAccommodationUnits: 4,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Málaga",
            addressCountry: "ES",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <RentVsOwn />
      {/* <div className="w-full bg-zinc-50 text-zinc-900"> */}
        <MortgageSimulator />
      {/* </div> */}
      <Project />
      <FeaturedStudios />
      <BeforeAfter />
      <Features />
      <LiveOrInvest />
      <Location />
      

      <Features />
      
      <Contact />
      <Footer />
    </main>
  );
}