import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import s1a from "@/assets/studio-1-a.jpg";
import s1b from "@/assets/studio-1-b.jpg";
import s3a from "@/assets/studio-3-a.jpg";
import s3b from "@/assets/studio-3-b.jpg";

type Studio = {
  number: string;
  title: string;
  tagline: string;
  meters: string;
  rooms: string;
  orientation: string;
  images: { src: string; alt: string; className?: string }[];
};

const studios: Studio[] = [
  {
    number: "01",
    title: "Estudio Uno",
    tagline: "La unidad estrella. Luz, amplitud y diseño optimizado.",
    meters: "42 m²",
    rooms: "Salón · Cocina · Baño",
    orientation: "Sur",
    images: [
      { src: s1a, alt: "Salón del Estudio Uno" },
      { src: s1b, alt: "Baño del Estudio Uno" },
    ],
  },
  {
    number: "03",
    title: "Estudio Tres",
    tagline: "Espacio dormitorio integrado con cocina abierta y acabados premium.",
    meters: "38 m²",
    rooms: "Dormitorio · Cocina · Baño",
    orientation: "Este",
    images: [
      { src: s3a, alt: "Dormitorio del Estudio Tres" },
      { src: s3b, alt: "Cocina del Estudio Tres" },
    ],
  },
];

export function FeaturedStudios() {
  return (
    <section id="estudios" className="py-28 md:py-40 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
          <div>
            <p className="eyebrow mb-4">04 — Unidades estrella</p>
            <h2 className="text-display text-4xl md:text-6xl max-w-2xl">
              Estudios destacados
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Dos unidades pensadas como manifiesto del proyecto. Más luz, mejor
            distribución, materiales de mayor categoría.
          </p>
        </div>

        <div className="space-y-32">
          {studios.map((s, i) => (
            <motion.article
              key={s.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7 grid grid-cols-3 gap-3">
                <div className="col-span-2 aspect-[4/3] overflow-hidden">
                  <img
                    src={s.images[0].src}
                    alt={s.images[0].alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={s.images[1].src}
                    alt={s.images[1].alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 lg:pl-8">
                <p className="text-display text-7xl md:text-8xl text-muted-foreground/40 leading-none mb-4">
                  {s.number}
                </p>
                <h3 className="text-display text-3xl md:text-4xl mb-4">
                  {s.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
                  {s.tagline}
                </p>
                <dl className="grid grid-cols-3 border-t border-border pt-6 max-w-md">
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Superficie
                    </dt>
                    <dd className="text-display text-2xl mt-2">{s.meters}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Distribución
                    </dt>
                    <dd className="text-sm mt-2">{s.rooms}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Orientación
                    </dt>
                    <dd className="text-display text-2xl mt-2">{s.orientation}</dd>
                  </div>
                </dl>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 mt-10 text-sm uppercase tracking-[0.18em] font-medium border-b border-foreground pb-2 hover:gap-4 transition-all"
                >
                  Solicitar dossier
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
