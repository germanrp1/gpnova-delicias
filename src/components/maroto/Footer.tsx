export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-wrap items-center justify-between gap-6">
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
    </footer>
  );
}
