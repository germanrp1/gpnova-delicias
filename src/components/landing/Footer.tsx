//import mortgageSimulation from "@/assets/mortgage-simulation.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-display text-2xl tracking-wider">MAROTO</p>
            <p className="text-xs text-muted-foreground mt-1">
              Cuatro estudios reformados en Málaga capital
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MAROTO · Todos los derechos reservados
          </p>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
            <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">
              <sup className="mr-0.5">1</sup>
              Cuota orientativa basada en una simulación de hipoteca bancaria
              (hecha con el 
              {" "}
              <a 
                href="https://app.bde.es/asb_spa/#/es/cuota/form" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-900 font-semibold underline decoration-zinc-400 hover:text-emerald-600 hover:decoration-emerald-600 transition-colors"
              >
              simulador de hipotecas del Banco de España
              </a>
              No constituye una oferta vinculante. Las condiciones reales
              dependen de cada entidad financiera y del perfil de cada cliente.
              <span className="block mt-4 text-zinc-500">
                Para probar otros valores, usa{" "}
                <a 
                  href="#simulador" 
                  className="text-zinc-900 font-semibold underline decoration-zinc-400 hover:text-emerald-600 hover:decoration-emerald-600 transition-colors cursor-pointer"
                >
                  nuestro simulador de hipotecas
                </a>
                .
              </span>
            </p>
            {/* <img
              src={mortgageSimulation}
              alt="Ejemplo de simulación de hipoteca bancaria"
              loading="lazy"
              width={1318}
              height={1195}
              className="w-full sm:w-[28rem] rounded-lg border border-border"
            /> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
