import { motion } from "motion/react";
import facade from "@/assets/facade.jpg";

export function Project() {
  return (
    <section id="proyecto" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <p className="eyebrow mb-4">03 — El proyecto</p>
          <h2 className="text-display text-4xl md:text-6xl mb-8">
            Cuatro estudios.
            <br />
            <span className="italic">Una nueva vida.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            Transformación integral de un local comercial en cuatro estudios
            independientes diseñados para ofrecer comodidad, funcionalidad y
            calidad.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <p className="text-display text-4xl">04</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                Estudios
              </p>
            </div>
            <div>
              <p className="text-display text-4xl">100%</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                Reformado
              </p>
            </div>
            <div>
              <p className="text-display text-4xl">2026</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                Entrega
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-7"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={facade}
              alt="Fachada reformada del proyecto MAROTO en Málaga"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
