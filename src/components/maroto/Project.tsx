import { motion } from "motion/react";
import facade from "@/assets/Fachada-web2.jpg";
import plano from "@/assets/plano-general.jpg";

export function Project() {
  return (
    <section id="proyecto" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* FILA SUPERIOR */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* TEXTO */}
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

          {/* FACHADA */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[21/9] overflow-hidden">
              <img
                src={facade}
                alt="Fachada reformada del proyecto MAROTO en Málaga"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-[40%_center]"
              />
            </div>
          </motion.div>

        </div>

        {/* PLANO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="max-w-4xl mx-auto text-center mb-8">

            <p className="eyebrow mb-3">
              Distribución de las viviendas
            </p>

            <h3 className="text-3xl md:text-4xl mb-4">
              Cuatro estudios diseñados para aprovechar cada metro cuadrado
            </h3>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada vivienda ha sido diseñada para combinar amplitud visual,
              funcionalidad y confort, optimizando la distribución interior
              y la entrada de luz natural.
            </p>

          </div>

          <div className="max-w-5xl mx-auto">

            <div className="overflow-hidden border border-border bg-background">
              <img
                src={plano}
                alt="Plano general de distribución de los cuatro estudios"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center">

              <div>
                <p className="text-2xl font-semibold">A</p>
                <p className="text-sm text-muted-foreground">
                  Exterior · 2 ventanas
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold">B</p>
                <p className="text-sm text-muted-foreground">
                  Exterior · 2 ventanas
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold">C</p>
                <p className="text-sm text-muted-foreground">
                  Interior · 1 ventana
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold">D</p>
                <p className="text-sm text-muted-foreground">
                  Interior · 1 ventana
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}