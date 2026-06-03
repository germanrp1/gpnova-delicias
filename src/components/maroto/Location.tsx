import { motion } from "motion/react";
import { MapPin, Train, ShoppingBag, Coffee, Waves } from "lucide-react";

const perks = [
  { icon: Train, label: "Transporte", text: "Conexión directa con metro, cercanías y autobús urbano." },
  { icon: ShoppingBag, label: "Servicios", text: "Comercios, supermercados y atención médica en el entorno." },
  { icon: Coffee, label: "Estilo de vida", text: "Cafeterías, restaurantes y zonas verdes a pocos minutos." },
  { icon: Waves, label: "Playa", text: "A escasos minutos del paseo marítimo de Málaga." },
];

export function Location() {
  return (
    <section id="ubicacion" className="py-28 md:py-40 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">08 — Ubicación</p>
            <h2 className="text-display text-4xl md:text-6xl mb-8">
              Málaga capital,
              <br />
              <span className="italic">a tu alcance.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-md">
              Una ciudad en expansión, con economía dinámica, clima excepcional y
              una demanda inmobiliaria sostenida durante todo el año.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {perks.map((p) => (
                <div key={p.label} className="flex flex-col gap-3">
                  <p.icon className="h-5 w-5" strokeWidth={1.4} />
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {p.label}
                  </p>
                  <p className="text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[4/5] lg:aspect-square w-full overflow-hidden bg-background">
              <iframe
                title="Ubicación MAROTO en Málaga"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-4.4500%2C36.7050%2C-4.3950%2C36.7350&amp;layer=mapnik&amp;marker=36.7213%2C-4.4214"
                className="absolute inset-0 h-full w-full grayscale contrast-110"
                loading="lazy"
              />
              <div className="absolute top-5 left-5 bg-background px-4 py-3 flex items-center gap-2">
                <MapPin className="h-4 w-4" strokeWidth={1.5} />
                <span className="text-xs uppercase tracking-widest">Málaga · España</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
