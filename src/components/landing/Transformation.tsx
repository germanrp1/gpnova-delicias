import { useRef, useState } from "react";
import { motion } from "motion/react";
// import before from "@/assets/Salon-Cocina-Antes.jpeg";
// import after from "@/assets/Salon-Cocina-Despues.png";

export function Transformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">05 — Antes / Después</p>
          <h2 className="text-display text-4xl md:text-6xl">
            La transformación,
            <br />
            <span className="italic">paso a paso.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Arrastra el control para descubrir el posible resultado final que te sugerimos.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          ref={containerRef}
          className="relative w-full aspect-[16/10] overflow-hidden select-none cursor-ew-resize bg-muted"
          onMouseMove={(e) => dragging && updateFromClientX(e.clientX)}
          onMouseDown={(e) => {
            setDragging(true);
            updateFromClientX(e.clientX);
          }}
          onMouseUp={() => setDragging(false)}
          onMouseLeave={() => setDragging(false)}
          onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
          onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
        >
          {/* After (full) */}
          <img
            // src={after}
            alt="Después de la reforma"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Before clipped */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${pos}%` }}
          >
            <img
              // src={before}
              alt="Antes de la reforma"
              loading="lazy"
              className="absolute inset-0 h-full object-cover"
              style={{ width: containerRef.current?.offsetWidth ?? "100%" }}
            />
          </div>

          {/* Labels */}
          <span className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] text-white bg-black/40 backdrop-blur px-3 py-1.5">
            Antes
          </span>
          <span className="absolute top-5 right-5 text-[10px] uppercase tracking-[0.3em] text-foreground bg-white/80 backdrop-blur px-3 py-1.5">
            Después
          </span>

          {/* Divider */}
          <div
            className="absolute top-0 bottom-0 w-px bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)] pointer-events-none"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-lg">
              <span className="text-foreground text-xs tracking-widest">‹ ›</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
