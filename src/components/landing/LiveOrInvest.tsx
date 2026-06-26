import { motion } from "motion/react";
import { Home, TrendingUp } from "lucide-react";

const live = ["Primera vivienda", "Independizarse", "Calidad de vida", "Cuota similar al alquiler"];
const invest = ["Activo inmobiliario", "Demanda constante", "Bajo mantenimiento", "Fácil gestión"];

export function LiveOrInvest() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-20">
          <p className="eyebrow mb-4">07 — Dos formas de empezar</p>
          <h2 className="text-display text-4xl md:text-6xl">
            Vivir <span className="italic">o</span> invertir.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-px border-t border-b border-border py-12 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:p-12 lg:p-16 md:border-r border-border"
          >
            <Home className="h-8 w-8 mb-8" strokeWidth={1.2} />
            <h3 className="text-display text-3xl md:text-4xl mb-8">
              Vivir
            </h3>
            <ul className="space-y-4">
              {live.map((t) => (
                <li key={t} className="flex items-baseline gap-4 text-lg">
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {String(live.indexOf(t) + 1).padStart(2, "0")}
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:p-12 lg:p-16"
          >
            <TrendingUp className="h-8 w-8 mb-8" strokeWidth={1.2} />
            <h3 className="text-display text-3xl md:text-4xl mb-8">
              Invertir
            </h3>
            <ul className="space-y-4">
              {invest.map((t) => (
                <li key={t} className="flex items-baseline gap-4 text-lg">
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {String(invest.indexOf(t) + 1).padStart(2, "0")}
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
