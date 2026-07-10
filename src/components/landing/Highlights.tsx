import { motion } from "motion/react";
import { project } from "@/data/project.config";

export function Highlights() {
  return (
    <section id="caracteristicas" className="py-28 md:py-40 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Cabecera */}

        <div className="max-w-2xl mb-20">

          <p className="eyebrow mb-4">
            {project.highlights.eyebrow}
          </p>

          <h2 className="text-display text-4xl md:text-6xl">
            {project.highlights.title}
          </h2>

          {project.highlights.description && (
            <p className="mt-6 text-lg text-muted-foreground">
              {project.highlights.description}
            </p>
          )}

        </div>

        {/* Tarjetas */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border">

          {project.highlights.items.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                className="bg-secondary p-8 md:p-10 flex flex-col items-start gap-6 aspect-square justify-between hover:bg-background transition-colors"
              >

                <Icon
                  className="h-7 w-7"
                  strokeWidth={1.2}
                  style={{
                    color: project.branding.primaryColor,
                  }}
                />

                <div>

                  <p className="text-display text-2xl leading-tight">
                    {item.label}
                  </p>

                  {item.description && (

                    <p className="mt-3 text-sm text-muted-foreground">

                      {item.description}

                    </p>

                  )}

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}