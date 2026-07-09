import { motion } from "motion/react";
import { Home, TrendingUp } from "lucide-react";
import { project } from "@/data/project.config";

interface BuyerModeSelectorProps {
  buyerMode: "living" | "investing";
  setBuyerMode: React.Dispatch<
    React.SetStateAction<"living" | "investing">
  >;
}

export function BuyerModeSelector({
  buyerMode,
  setBuyerMode,
}: BuyerModeSelectorProps) {
  return (
    <section className="relative py-20 md:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Cabecera */}
        <div className="max-w-3xl mb-16">

          <p className="eyebrow mb-4">
            {project.buyerMode.eyebrow}
          </p>

          <h2 className="text-display text-4xl md:text-6xl mb-6">
            {project.buyerMode.title}
          </h2>

          <p className="text-lg text-muted-foreground">
            {project.buyerMode.description}
          </p>

        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* MODO VIVIR */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setBuyerMode("living")}
            className={`cursor-pointer rounded-2xl border p-10 transition-all duration-300 ${
              buyerMode === "living"
                ? "text-white shadow-xl"
                : "bg-background border-border hover:border-zinc-400"
            }`}
            style={
              buyerMode === "living"
                ? {
                    backgroundColor: project.branding.activeCardColor,
                    borderColor: project.branding.activeCardColor,
                  }
                : {}
            }
          >
            <Home className="h-10 w-10 mb-8" />

            <h3 className="text-3xl font-serif mb-4">
              {project.buyerMode.living.title}
            </h3>

            <p
              className={
                buyerMode === "living"
                  ? "text-zinc-300"
                  : "text-muted-foreground"
              }
            >
              {project.buyerMode.living.description}
            </p>

          </motion.div>

          {/* MODO INVERSIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onClick={() => setBuyerMode("investing")}
            className={`cursor-pointer rounded-2xl border p-10 transition-all duration-300 ${
              buyerMode === "investing"
                ? "text-white shadow-xl"
                : "bg-background border-border hover:border-zinc-400"
            }`}
            style={
              buyerMode === "investing"
                ? {
                    backgroundColor: project.branding.activeCardColor,
                    borderColor: project.branding.activeCardColor,
                  }
                : {}
            }
          >
            <TrendingUp className="h-10 w-10 mb-8" />

            <h3 className="text-3xl font-serif mb-4">
              {project.buyerMode.investing.title}
            </h3>

            <p
              className={
                buyerMode === "investing"
                  ? "text-zinc-300"
                  : "text-muted-foreground"
              }
            >
              {project.buyerMode.investing.description}
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}