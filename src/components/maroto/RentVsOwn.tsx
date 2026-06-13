import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const rent = [
  "Pagas todos los meses",
  "No generas patrimonio",
  "La vivienda nunca será tuya",
];
const own = [
  "Cuota mensual inferior a un alquiler",
  "Construyes patrimonio",
  "La vivienda es tuya",
];

export function RentVsOwn() {
  return (
    <section className="relative py-28 md:py-40 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-20">
          <p className="eyebrow mb-4">02 — La decisión</p>
          <h2 className="text-display text-4xl md:text-6xl">
            ¿Alquiler <span className="italic">o</span> propiedad?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {/* Alquiler */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-background/60 border border-border p-10 lg:p-14"
          >
            <p className="eyebrow mb-8">Alquiler</p>
            <ul className="space-y-5">
              {rent.map((t) => (
                <li key={t} className="flex items-start gap-4 text-lg text-muted-foreground">
                  <X className="mt-1 h-5 w-5 shrink-0 opacity-50" strokeWidth={1.5} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Propiedad */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-primary text-primary-foreground p-10 lg:p-14"
          >
            <p className="eyebrow mb-8 !text-primary-foreground/60">Propiedad</p>
            <ul className="space-y-5">
              {own.map((t) => (
                <li key={t} className="flex items-start gap-4 text-lg">
                  <Check className="mt-1 h-5 w-5 shrink-0" strokeWidth={1.5} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-display text-3xl md:text-5xl mt-20 max-w-4xl"
        >
          Cada mensualidad puede acercarte a{" "}
          <span className="italic">ser propietario.</span>
        </motion.p>
      </div>
    </section>
  );
}
