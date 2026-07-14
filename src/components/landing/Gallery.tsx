// Gallery.tsx V1
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import { project } from "@/data/project.config";

export function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const CURRENT_BADGE = "Estado actual";
  const PROPOSAL_BADGE = "Propuesta de amueblado";

  return (
    <section id="galeria" className="py-28 md:py-40 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-20">
          <p className="eyebrow mb-4">05 — Galería</p>
          <h2 className="text-display text-4xl md:text-6xl max-w-3xl">
            Recorre la vivienda<br/>estancia por estancia.
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl">
            Fotografías reales y propuestas de amueblado mediante Home Staging Virtual.
          </p>
        </div>

        <div className="space-y-24">
          {project.gallery.map((item:any)=>(
            <motion.article
              key={item.title}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{duration:0.6}}
              className="space-y-6"
            >
              <div>
                <h3 className="text-display text-3xl">{item.title}</h3>
                {item.subtitle && <p className="text-muted-foreground mt-2">{item.subtitle}</p>}
              </div>

              {item.layout==="single" ? (
                <div className="relative overflow-hidden rounded-3xl group cursor-pointer"
                     onClick={()=>setActiveImage(item.image)}>
                  <img src={item.image} alt={item.title}
                    className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"/>
                  <button className="absolute bottom-4 right-4 bg-white/90 rounded-full p-3 opacity-0 group-hover:opacity-100 transition">
                    <ZoomIn className="h-5 w-5"/>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {[["current",CURRENT_BADGE],["proposal",item.proposalBadge ?? PROPOSAL_BADGE]].map(([k,b])=>{
                    const src=(item as any)[k];
                    return (
                    <div key={k} className="relative overflow-hidden rounded-3xl group cursor-pointer"
                         onClick={()=>setActiveImage(src)}>
                      <img src={src} alt={item.title}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"/>
                      <span className="absolute top-4 left-4 text-white text-xs uppercase tracking-[0.18em] px-3 py-1 rounded-full"
                        style={{backgroundColor:project.branding.primaryColor}}>
                        {k==="current" ? (item.currentBadge ?? CURRENT_BADGE) : (item.proposalBadge ?? PROPOSAL_BADGE)}
                      </span>
                      <button className="absolute bottom-4 right-4 bg-white/90 rounded-full p-3 opacity-0 group-hover:opacity-100 transition">
                        <ZoomIn className="h-5 w-5"/>
                      </button>
                    </div>)
                  })}
                </div>
              )}

              {item.note && <p className="text-sm italic text-muted-foreground">{item.note}</p>}
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            onClick={()=>setActiveImage(null)}>
            <button className="absolute top-6 right-6 text-white">
              <X className="h-7 w-7"/>
            </button>
            <motion.img initial={{scale:0.95}} animate={{scale:1}} exit={{scale:0.95}}
              src={activeImage}
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl"
              onClick={(e)=>e.stopPropagation()}/>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
