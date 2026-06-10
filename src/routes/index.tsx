import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/maroto/Nav";
import { Hero } from "@/components/maroto/Hero";
import { RentVsOwn } from "@/components/maroto/RentVsOwn";
import { Project } from "@/components/maroto/Project";
import { FeaturedStudios } from "@/components/maroto/FeaturedStudios";
import { BeforeAfter } from "@/components/maroto/BeforeAfter";
import { Features } from "@/components/maroto/Features";
import { LiveOrInvest } from "@/components/maroto/LiveOrInvest";
import { Location } from "@/components/maroto/Location";
import { MortgageSimulator } from '@/components/maroto/MortgageSimulator'; // Importación limpia
import { Contact } from "@/components/maroto/Contact";
import { Footer } from "@/components/maroto/Footer";

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
      <Project />
      <FeaturedStudios />
      <BeforeAfter />
      <Features />
      <LiveOrInvest />
      <Location />
      
      {/* 🚀 Colocamos el simulador aquí: un sitio estratégico antes de que el cliente decida contactar */}
      <div className="w-full bg-zinc-50 text-zinc-900">
        <MortgageSimulator />
      </div>
      
      <Contact />
      <Footer />
    </main>
  );
}