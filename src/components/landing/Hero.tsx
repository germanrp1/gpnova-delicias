import { motion } from "motion/react";
//import heroImg from "@/assets/hero-studio.jpg";
import heroImg from "@/assets/Salon-Cocina.jpeg";
import heroVideo from "@/assets/Render1.mp4";
import { project } from "@/data/project.config"; 
import { Signature } from "@/components/branding/Signature";

export function Hero() {
  // 🔍 Leemos los parámetros directamente desde la URL de forma nativa
  const urlParams = new URLSearchParams(window.location.search);
  
  // 🎛️ Si en la URL detecta '?foto=1', se apaga el vídeo
  //const mostrarVideo = urlParams.get("foto") !== "1";
  // Si entran limpio (maroto.gpnova.es), da FALSE y muestra la foto fija para máxima velocidad.
  // Solo si añaden explícitamente '?video=1', dará TRUE y cargará el vídeo en bucle.
  const mostrarVideo = urlParams.get("video") === "1";

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
          //className="absolute inset-0 h-full w-full object-cover"
          className="absolute inset-0 h-full w-full object-cover object-[65%_center] md:object-center"
        />
      )}
      
      {/* Capa de transparencia oscura (overlay) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />

      {/* <div className="relative z-10 mx-auto max-w-7xl h-full px-6 lg:px-10 flex flex-col justify-end pb-20 pt-32"> */}
      {/* <div className="relative z-10 mx-auto max-w-7xl h-full px-6 lg:px-10 flex flex-col justify-end pb-20 pt-40 md:pt-32"> */}
      {/* <div className={`relative z-10 mx-auto max-w-7xl h-full px-6 lg:px-10 flex flex-col justify-end pb-20 ${project.hero.heroPaddingTop}`}> */}
      <div className="relative z-10 pt-32 md:pt-28 lg:pt-32 mx-auto max-w-7xl h-full px-6 lg:px-10 flex flex-col justify-between  pb-12 md:pb-28 ">
      {/* <div className="relative z-10 mx-auto max-w-7xl h-full px-6 lg:px-10 flex flex-col justify-between pb-28 pt-16 md:pt-0 -translate-y-16 md:translate-y-0"> */}
        {/* Hero Eyebrow */}
        {/* <motion.p
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 18 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          // className="text-white/80 text-xs uppercase tracking-[0.32em] mb-6"
          className="eyebrow text-white/80 mb-6"          
        >
          {project.hero.eyebrow}
        </motion.p> */}
         
        <p className={`eyebrow text-white/80 ${project.hero.eyebrowMargin}`}>
          {project.hero.eyebrow}
        </p>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          //className="text-display text-white text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] max-w-5xl leading-[1.15]"
          // className="text-display text-white text-5xl sm:text-6xl lg:text-7xl max-w-4xl leading-[1.05]"
          //className={`${project.hero.titleMarginTop} text-display text-white text-5xl sm:text-6xl lg:text-7xl max-w-4xl leading-[1.05]`}
          className="text-display text-white text-[3.2rem] sm:text-6xl lg:text-7xl max-w-4xl leading-[1.05]"
        >
          {/* ¿Buscas vivienda...
          <p></p>
          o una inversión rentable? */}
          {project.hero.title.line1}
          <br />
          {project.hero.title.line2}
          {/* 🔗 Enlace elegante integrado con espaciado y estilo sutil */}
          {/* <a 
            href="#simulador" 
            className="ml-4 inline-block text-xs sm:text-sm font-sans tracking-widest text-white/60 hover:text-emerald-400 underline underline-offset-4 decoration-emerald-500/50 hover:decoration-emerald-400 transition-all uppercase"
          >
            (Calcula tu cuota)
          </a> */}
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 max-w-xl text-white/85 text-base sm:text-lg font-light leading-relaxed"
        >
          {project.hero.description}          
        </motion.p>

        {/* Hero CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          // className="mt-10 flex flex-wrap items-center gap-4"
          className="mt-10 grid grid-cols-2 gap-4 md:flex md:flex-wrap md:items-center"
        >
          <a href="#contacto" className="btn-primary !bg-white !text-foreground hover:!bg-white/90">
            {project.hero.buttons.primary.label}
          </a>
          <a href="#estudios" className="btn-outline">
            {project.hero.buttons.secondary.label}
          </a>
          <a href="#simulador" className="btn-outline">
            {project.hero.buttons.simulator.label}
          </a>
        </motion.div>
        
        {/* Firma by Pablo & German */}
        {/* <p
          className="text-center mt-8 text-3xl"
          style={{
            color: project.branding.signatureColor,
            fontFamily: project.branding.signatureFont,
            fontSize: project.branding.signatureSize,
          }}
        >
          {project.branding.signatureText}
        </p> */}
        {/* <Signature
          className="h-8 md:h-12"
          color={project.branding.primaryColor}
        /> */}
        <div className="-mt-6 md:mt-8 flex justify-center">
          <Signature
              className="h-10 md:h-12"
              color={project.branding.primaryColor}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70">
      {/* <div className="absolute bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70"> */}
        <span className="text-[10px] uppercase tracking-[0.3em]">Descubre</span>
        <div className="h-10 w-px bg-white/40" />
      </div>
    </section>
  );
}