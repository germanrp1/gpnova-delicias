
// import React, { useState } from "react";
import React from "react";
import { project } from "@/data/project.config";
// TODO:
// import { project } from "@/data/project.config";

interface ProfitCalculatorProps {
  purchasePrice: number;
  setPurchasePrice: React.Dispatch<React.SetStateAction<number>>;
  rooms: number;
  setRooms: React.Dispatch<React.SetStateAction<number>>;
  roomRent: number;
  setRoomRent: React.Dispatch<React.SetStateAction<number>>;
}

export const ProfitCalculator = ({
    purchasePrice,
    setPurchasePrice,
    rooms,
    setRooms,
    roomRent,
    setRoomRent,
}: ProfitCalculatorProps) => {
  // ============================
  // CONFIGURACIÓN (pasará al project.config.ts)
  // ============================

//   const [precioCompra, setPrecioCompra] = useState(project.investment.purchasePrice);

//   const [habitaciones, setHabitaciones] = useState(project.investment.rooms.default);

//   const [precioHabitacion, setPrecioHabitacion] = useState(project.investment.rent.default);

  const minRent = project.investment.rent.min;
  const maxRent = project.investment.rent.max;
  const rentStep = project.investment.rent.step;

  // ============================
  // CÁLCULOS
  // ============================

  const ingresosMensuales = rooms * roomRent;

  const ingresosAnuales = ingresosMensuales * 12;

  const rentabilidadBruta =
    purchasePrice > 0
      ? (ingresosAnuales / purchasePrice) * 100
      : 0;

  return (
    <section
      id="simulador"
      className="py-16 bg-[#f8f7f5] border-t border-zinc-200"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* CABECERA */}

          <div className="lg:col-span-5">

            <p className="eyebrow mb-4">
              02 — Haz tus números
            </p>

            <h2 className="text-display text-4xl md:text-6xl text-zinc-900 mb-4 max-w-xl">
              ¿Qué rentabilidad podría generar?
            </h2>

            <p className="text-zinc-600 max-w-xl">
              Simula diferentes escenarios de alquiler por habitaciones y
              descubre el potencial de esta inversión.
            </p>

          </div>

          {/* CALCULADORA */}

          <div className="lg:col-span-7">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-background p-8 rounded-2xl shadow-sm border border-zinc-100">

              {/* COLUMNA IZQUIERDA */}

              <div className="space-y-6">

                <div>

                  <label className="block text-sm font-medium text-zinc-700 mb-1">
                    Precio de compra (€)
                  </label>

                  <input
                    type="number"
                    value={purchasePrice}
                    onChange={(e) =>
                      setPurchasePrice(Number(e.target.value))
                    }
                    className="w-full p-3 border border-zinc-300 rounded-lg text-zinc-900 font-medium focus:outline-none focus:border-zinc-900"
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Número de habitaciones
                  </label>

                  <div className="grid grid-cols-2 gap-4">

                    <button
                      onClick={() => setRooms(3)}
                      className={`p-3 rounded-lg border transition ${
                        rooms === 3
                          ? "bg-zinc-900 text-white border-zinc-900"
                          : "bg-white text-zinc-700 border-zinc-300"
                      }`}
                    >
                      3 habitaciones
                    </button>

                    <button
                      onClick={() => setRooms(4)}
                      className={`p-3 rounded-lg border transition ${
                        rooms === 4
                          ? "bg-zinc-900 text-white border-zinc-900"
                          : "bg-white text-zinc-700 border-zinc-300"
                      }`}
                    >
                      4 habitaciones
                    </button>

                  </div>

                </div>

                <div>

                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Precio medio por habitación
                  </label>

                  <input
                    type="range"
                    min={minRent}
                    max={maxRent}
                    step={rentStep}
                    value={roomRent}
                    onChange={(e) =>
                      setRoomRent(Number(e.target.value))
                    }
                    className="w-full"
                  />

                  <div className="flex justify-between text-xs text-zinc-500 mt-1">
                    <span>{minRent} €</span>
                    <span>{maxRent} €</span>
                  </div>

                  <div className="text-center mt-4">

                    <p className="text-zinc-500 text-sm">
                      Precio seleccionado
                    </p>

                    <p className="text-3xl font-serif text-zinc-900">
                      {roomRent.toLocaleString()} €
                    </p>

                  </div>

                </div>

              </div>

              {/* COLUMNA DERECHA */}

              <div className="bg-zinc-900 text-white p-6 rounded-xl flex flex-col justify-between">

                <div>

                  <div>

                    <p className="text-zinc-400 text-xs uppercase tracking-wider">
                      Rentabilidad bruta estimada
                    </p>

                    <p className="text-5xl font-serif mt-1">
                      {rentabilidadBruta.toFixed(2)}
                      <span className="text-base text-zinc-400"> %</span>
                    </p>

                  </div>

                  <div className="pt-6 mt-6 border-t border-zinc-800 space-y-3 text-sm">

                    <div className="flex justify-between">

                      <span className="text-zinc-400">
                        Ingresos mensuales
                      </span>

                      <span>
                        {ingresosMensuales.toLocaleString()} €
                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-zinc-400">
                        Ingresos anuales
                      </span>

                      <span>
                        {ingresosAnuales.toLocaleString()} €
                      </span>

                    </div>

                    <div className="flex justify-between border-t border-zinc-800 pt-3">

                      <span className="text-zinc-300">
                        Precio de compra
                      </span>

                      <span style={{ color: project.branding.primaryColor }}>
                        {purchasePrice.toLocaleString()} €
                      </span>

                    </div>

                  </div>

                </div>

                <div className="mt-8">

                  <a
                    href="#contacto"
                    className="block text-center w-full bg-white text-zinc-900 font-medium py-3 rounded-lg hover:bg-zinc-100 transition-colors"
                  >
                    Solicitar estudio personalizado
                  </a>

                  <p className="text-xs text-zinc-500 mt-4 text-center">
                    Simulación orientativa. La rentabilidad final dependerá
                    de la ocupación, los gastos y las condiciones reales del
                    alquiler.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};