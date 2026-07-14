import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import { project } from "@/data/project.config";


export function Gallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  // ✨ Nuevo estado para controlar la imagen que se amplía
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const CURRENT_BADGE = "Estado actual";
  const PROPOSAL_BADGE = "Propuesta de amueblado";

  return (
    <section id="estudios" className="py-28 md:py-40 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Cabecera */}
        <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
          <div>
            <p className="eyebrow mb-4">05 — Galería</p>
            <h2 className="text-display text-4xl md:text-6xl max-w-3xl">
              Recorre la vivienda
              estancia por estancia.
            </h2>
            <p className="text-xs md:text-sm tracking-wide text-muted-foreground/80 mt-4 italic font-normal">
              <strong>* {project.images.virtualStagingNote}</strong>
            </p>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Descubre cada espacio de la vivienda mediante fotografías reales y, cuando está disponible, una propuesta de amueblado realizada mediante Home Staging Virtual.
          </p>
        </div>

        {/* Listado */}
        <div className="space-y-32">
          {project.gallery.map((item, i) => (
            <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
            >
              {/* Contenedor de imágenes */}
              <div className="lg:col-span-7 grid grid-cols-3 gap-3">
                
                {/* 🖼️ Imagen Principal (Grande) */}
                <div 
                  className="col-span-2 aspect-[4/3] overflow-hidden relative cursor-pointer group"
                  // onClick={() => setActiveImage(s.images[0])} // Al hacer clic, se amplía
                >
                  <img
                    // src={s.images[0]}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-[1500ms] group-hover:scale-105"
                  />
                  {/* Capa flotante con icono de zoom */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="bg-background/90 text-foreground p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                      <ZoomIn className="h-4 w-4" />
                      <span className="text-[10px] font-semibold uppercase tracking-wider">Ampliar Foto</span>
                    </div>
                  </div>
                  {/* {s.badge && (
                    <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                      {s.badge}
                    </span>
                  )} */}

                  {s.badge ? (
                    <span className="absolute top-3 left-3 z-20 bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full shadow-md">
                      {s.badge}
                    </span>
                  ) : (
                    project.images?.showVirtualStagingLabel && (
                      <div className="absolute top-3 left-3 z-20 bg-white/85 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] tracking-[0.18em] uppercase text-neutral-700 font-medium shadow-sm">
                        {project.images.virtualStagingLabel}
                      </div>
                    )
                  )}

                </div>

                {/* 🖼️ Imagen Secundaria (Vertical) */}
                <div 
                  className="aspect-[3/4] overflow-hidden relative cursor-pointer group"
                  // onClick={() => setActiveImage(s.images[1])} // Al hacer clic, se amplía
                >
                  <img
                    // src={s.images[1]}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover bg-white transition-transform duration-[1500ms] group-hover:scale-105"
                  />
                  {/* Capa flotante con icono de zoom */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="bg-background/90 text-foreground p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <ZoomIn className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Textos */}
              <div className="lg:col-span-5 lg:pl-8">
                <p className="text-display text-7xl md:text-8xl text-muted-foreground/30 leading-none mb-4">
                  {s.number}
                </p>
                <h3 className="text-display text-3xl md:text-4xl mb-4">
                  {s.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
                  {s.tagline}
                </p>
                
                <dl className="grid grid-cols-3 border-t border-border pt-6 max-w-md">
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">Superficie</dt>
                    <dd className="text-display text-xl md:text-2xl mt-2">{s.meters}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">Distribución</dt>
                    <dd className="text-xs font-medium mt-2 leading-tight">{s.rooms}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">Orientación</dt>
                    <dd className="text-sm font-semibold mt-2 leading-tight">{s.orientation}</dd>
                  </div>
                </dl>

                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-10">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] font-medium border-b border-foreground pb-2 hover:gap-4 transition-all self-start"
                  >
                    Solicitar dossier
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                  <button
                    // onClick={() => setActiveVideo(s.video)}
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] font-medium text-muted-foreground hover:text-foreground border-b border-transparent hover:border-foreground pb-2 transition-all self-start"
                  >
                    <Play className="h-4 w-4" />
                    Reproducir Vídeo RENDER
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* 🔍 MODAL LIGHTBOX PARA IMÁGENES GRANDES */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setActiveImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-50"
              onClick={() => setActiveImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-7xl max-h-[85vh] overflow-hidden rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={activeImage} 
                alt="Estudio ampliado" 
                className="w-full h-full max-h-[85vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Lightbox para Vídeos */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setActiveVideo(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
              onClick={() => setActiveVideo(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video src={activeVideo} autoPlay controls playsInline className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}