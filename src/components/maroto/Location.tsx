import { motion } from "motion/react";
import { MapPin, Train, ShoppingBag, Coffee, Waves } from "lucide-react";

const perks = [
  { icon: Train, label: "Transporte", text: "Conexión directa con metro, cercanías y autobús urbano." },
  { icon: ShoppingBag, label: "Servicios", text: "Comercios, supermercados y atención médica en el entorno." },
  { icon: Coffee, label: "Estilo de vida", text: "Cafeterías, restaurantes y zonas verdes a pocos minutos." },
  { icon: Waves, label: "Playa", text: "A escasos minutos del paseo marítimo de Málaga." },
];

export function Location() {
  return (
    <section id="ubicacion" className="py-16 md:py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">08 — Ubicación</p>
            <h2 className="text-display text-4xl md:text-6xl mb-8">
              Málaga capital,
              <br />
              <span className="italic">a tu alcance.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-md">
              Una ciudad en expansión, con economía dinámica, clima excepcional y
              una demanda inmobiliaria sostenida durante todo el año.
            </p>

            <h3 className="text-xl font-semibold mb-2">Ubicación del Proyecto</h3>
            <p className="text-muted-foreground mb-8">
              Calle Alcalde Nicolás Maroto, 11, 29014, Málaga Capital
            </p>


            <div className="grid sm:grid-cols-2 gap-8">
              {perks.map((p) => (
                <div key={p.label} className="flex flex-col gap-3">
                  <p.icon className="h-5 w-5" strokeWidth={1.4} />
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {p.label}
                  </p>
                  <p className="text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7"
          >
            {/* <div className="relative -aspect-[16/9] w-full overflow-hidden bg-background"> */}
            <div className="relative h-[420px] w-full overflow-hidden bg-background">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d785.8211143327758!2d-4.418283701916013!3d36.74949857902123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f6361b23680d%3A0x8e64233e0eda8cea!2sC.%20Alcalde%20Nicol%C3%A1s%20Maroto%2C%2011%2C%20Cdad.%20Jard%C3%ADn%2C%2029014%20M%C3%A1laga!5e1!3m2!1ses!2ses!4v1781121373944!5m2!1ses!2ses" 
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* <div className="absolute inset-0 bg-gradient-to-t from-secondary/15 to-transparent pointer-events-none" /> */}

              <div className="absolute top-5 left-5 bg-background px-4 py-3 flex items-center gap-2">
                <MapPin className="h-4 w-4" strokeWidth={1.5} />
                <span className="text-xs uppercase tracking-widest">Málaga · España</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
