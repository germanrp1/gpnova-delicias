import { motion } from "motion/react";
import {
  ChefHat,
  Bath,
  Thermometer,
  Sun,
  Hammer,
  Ruler,
  Sparkles,
} from "lucide-react";

const features = [
  { icon: ChefHat, label: "Cocina equipada" },
  { icon: Bath, label: "Baño completo" },
  { icon: Thermometer, label: "Preinstalación AA" },
  { icon: Sun, label: "Ventanas exteriores" },
  { icon: Hammer, label: "Reforma integral" },
  { icon: Ruler, label: "Diseño optimizado" },
  { icon: Sparkles, label: "Alta luminosidad" },
];

export function Features() {
  return (
    <section id="caracteristicas" className="py-28 md:py-40 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-20">
          <p className="eyebrow mb-4">06 — Características</p>
          <h2 className="text-display text-4xl md:text-6xl">
            Pensado al detalle,
            <br />
            <span className="italic">listo para vivir.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="bg-secondary p-8 md:p-10 flex flex-col items-start gap-6 aspect-square justify-between hover:bg-background transition-colors"
            >
              <f.icon className="h-7 w-7" strokeWidth={1.2} />
              <p className="text-display text-2xl leading-tight">{f.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
