import { motion } from "motion/react";
import heroImg from "@/assets/hero-studio.jpg";
import heroVideo from "@/assets/Render1.mp4";

export function Hero() {
  // 🔍 Leemos los parámetros directamente desde la URL de forma nativa (JavaScript puro)
  // Al no usar 'react-router-dom', eliminamos el error del <Router> para siempre.
  const urlParams = new URLSearchParams(window.location.search);
  
  // 🎛️ Si en la URL pones '?foto=1', la variable será FALSE (muestra foto).
  // Si no pones nada, por defecto será TRUE (muestra vídeo).
  const mostrarVideo = urlParams.get("foto") !== "1";

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      
      {/* 🎬 Renderizado dinámico del fondo */}
      {mostrarVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={heroImg}
          src={heroVideo}
        />
      ) : (
        <img
          src={heroImg}
          alt="Estudio MAROTO en Málaga"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      
      {/* Capa de transparencia oscura (overlay) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />

      <div className="relative z-10 mx-auto max-w-7xl h-full px-6 lg:px-10 flex flex-col justify-end pb-20 pt-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-white/80 text-xs uppercase tracking-[0.32em] mb-6"
        >
          Málaga capital · 4 estudios · Listos para entrar a vivir
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="text-display text-white text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] max-w-5xl"
        >
          Tu vivienda propia en Málaga por una cuota inferior a un alquiler
          <a href="#nota-simulacion" className="hover:text-emerald-400 transition-colors cursor-pointer">
            <sup className="text-[0.4em] align-super font-light">1</sup>.
          </a>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 max-w-xl text-white/85 text-base sm:text-lg font-light leading-relaxed"
        >
          Estudios completamente reformados y diseñados para aprovechar cada metro cuadrado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#contacto" className="btn-primary !bg-white !text-foreground hover:!bg-white/90">
            Solicitar información
          </a>
          <a href="#estudios" className="btn-outline">
            Ver estudios
          </a>
          <a href="#simulador" className="btn-outline">
            Calcula tu cuota
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70">
        <span className="text-[10px] uppercase tracking-[0.3em]">Descubre</span>
        <div className="h-10 w-px bg-white/40" />
      </div>
    </section>
  );
}