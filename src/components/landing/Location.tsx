import { motion } from "motion/react";
import { project } from "@/data/project.config";
import { MapPin, Train, ShoppingBag, Coffee, Waves, TrendingUp } from "lucide-react";
import { TrainFront, Building2 } from "lucide-react";

const perks = [
  { icon: Train, label: "Transporte", text: "Metro, autobuses y acceso rápido al centro." },
  { icon: ShoppingBag, label: "Servicios", text: "Supermercados, colegios, centros de salud." },
  { icon: Coffee, label: "Estilo de vida", text: "Comercios, cafeterías y vida de barrio." },
  { icon: Waves, label: "Playa", text: "Paseo marítimo, playas y chiringuitos muy cerca." },
  { icon: TrendingUp, label: "Inversión", text: "Alta demanda de alquiler residencial y por habitaciones." },
];
const quickFacts = [
  { icon: TrainFront, title: "Metro", text: "5 min", },
  { icon: Waves, title: "Playa", text: "8 min", },
  { icon: Building2, title: "Centro", text: "12 min", },
];

// Para cuando lo leamos del CONFIG
//const quickFacts = project.location.quickFacts;

export function Location() {
  return (
    <section id="ubicacion" className="py-16 md:py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">08 — Ubicación</p>
            <h2 className="text-display text-4xl md:text-6xl mb-8">
              Las Delicias,
              <br />
              <span className="block text-5xl italic">
                un barrio para vivir.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-md">
              Un barrio consolidado donde disfrutar del día a día, con todos los servicios, excelentes comunicaciones y la playa a pocos minutos.
            </p>

            <h3 className="text-xl font-semibold mb-2">Dirección</h3>
            <p className="text-muted-foreground mb-8">
              Calle Jorge Guillén, 15, 29003, Málaga Capital
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
            //className="lg:col-span-7"
            className="lg:col-span-7 mt-10 lg:mt-24"
          >
            {/* <div className="relative -aspect-[16/9] w-full overflow-hidden bg-background"> */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-background border border-border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.3108090773453!2d-4.444468017784228!3d36.700749996331844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f77e3dbb93bf%3A0x4877f0fab9fafccb!2sC.%20Jorge%20Guill%C3%A9n%2C%2015%2C%20Carretera%20de%20C%C3%A1diz%2C%2029003%20M%C3%A1laga!5e1!3m2!1ses!2ses!4v1783878218822!5m2!1ses!2ses" 
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* <div className="absolute inset-0 bg-gradient-to-t from-secondary/15 to-transparent pointer-events-none" /> */}

              
            </div>


            <div className="lg:col-span-12">
              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-6">
                {quickFacts.map((fact) => {
                  const Icon = fact.icon;

                  return (
                    <div
                      key={fact.title}
                      className="flex flex-col items-center text-center"
                    >
                      <Icon
                        size={26}
                        color={project.branding.primaryColor}
                        className="mb-3"
                      />
                      <p className="text-2xl font-serif text-zinc-900">
                        {fact.text}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.25em] text-zinc-500">
                        {fact.title}
                      </p>
                    </div>
                  );
                })}
              </div>          
            </div>

          </motion.div>

                    


        </div>
      </div>
    </section>
  );
}
