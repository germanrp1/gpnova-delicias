import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { project } from "@/data/project.config"; 

//import fachada from "@/assets/Fachada.png";
import fachada from "@/assets/gallery/Fachada_IA1.png";
import plano from "@/assets/gallery/Plano-principal.png";

import {
  ZoomIn, X
} from "lucide-react";

export function Project() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
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
            className="lg:col-span-6"
          >
            <p className="eyebrow mb-4"> {project.project.eyebrow} </p>

            <h2 className="text-display text-4xl md:text-6xl mb-8">
              {project.project.title[0]}
              <br />
              <span className="italic">{project.project.title[1]}</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-md max-w-xl">
              {project.project.description}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-8">

              {project.project.specs.map((spec) => {
                const Icon = spec.icon;
                return (
                  <div key={spec.label}>
                    <p className="font-serif text-3xl text-zinc-900 leading-none">
                      {spec.value}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Icon
                        size={15}
                        strokeWidth={2.2}
                        color={project.branding.primaryColor}
                      />
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                        {spec.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </motion.div>

          {/* FACHADA */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-6"
          >
            {/* <div className="relative aspect-[21/9] overflow-hidden"> */}
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={fachada}
                alt="Plano principal de las Delicias"
                loading="lazy"
                onClick={() => setActiveImage(fachada)}
                // className="absolute inset-0 h-full w-full object-contain object-[40%_center]"
                className="w-full h-auto cursor-zoom-in hover:scale-[1.01]"
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

          <div className="max-w-4xl mx-auto">

            <p className="eyebrow text-center mb-4">
                Plano de distribución - Pulsa para ampliar
            </p>
            {/* <p className="text-xs text-muted-foreground text-center mt-3">
                Distribución optimizada
                <br />
                Cada estancia ha sido diseñada para aprovechar al máximo la superficie disponible.
                <br />
            </p> */}
              <div className="relative overflow-hidden border border-border bg-background">
            <p>
                <br />
            </p>
              <img
                src={plano}
                alt="Plano general"
                className="w-full h-auto cursor-zoom-in transition-transform duration-300 hover:scale-[1.01]"
                onClick={() => setActiveImage(plano)}
              />
              <ZoomIn
                onClick={() => setActiveImage(plano)}
                className="absolute top-4 right-4 h-5 w-5 text-muted-foreground bg-background/80 p-1 rounded-full cursor-pointer"
              />
            </div>

            {/* <p className="text-xs text-muted-foreground text-center mt-3">
              Plano de distribución · Pulsa para ampliar
            </p> */}


          </div>

        </motion.div>

      </div>
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-12"
            onClick={() => setActiveImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full"
              onClick={() => setActiveImage(null)}
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              // className="max-w-7xl max-h-[90vh]"
              className="max-w-[95vw] max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage}
                alt="Plano ampliado"
                className="max-w-[95vw] max-h-[95vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}