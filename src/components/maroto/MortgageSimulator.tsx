import React, { useState } from 'react';

export const MortgageSimulator = () => {
  // Valores iniciales por defecto acoplados al simulador del BDE
  const [precioVivienda, setPrecioVivienda] = useState(145000); 
  const [ahorrosIniciales, setAhorrosIniciales] = useState(0); 
  const [tipoInteres, setTipoInteres] = useState(3.0); 
  const [aniosPlazo, setAniosPlazo] = useState(30); // 30 años (360 meses)

  // El capital del préstamo es el precio de la vivienda menos lo aportado inicialmente
  const importePrestamo = precioVivienda - ahorrosIniciales > 0 ? precioVivienda - ahorrosIniciales : 0;

  // Cálculo de la cuota mensual utilizando la fórmula del sistema de amortización francés
  const calcularCuotaMensual = () => {
    if (importePrestamo <= 0 || tipoInteres <= 0 || aniosPlazo <= 0) return 0;
    const interesMensual = (tipoInteres / 100) / 12;
    const numeroPagos = aniosPlazo * 12; // 30 años * 12 = 360 meses
    
    const cuota =
      (importePrestamo * interesMensual * Math.pow(1 + interesMensual, numeroPagos)) /
      (Math.pow(1 + interesMensual, numeroPagos) - 1);
      
    return isNaN(cuota) ? 0 : Math.round(cuota);
  };

  const cuotaMensual = calcularCuotaMensual();
  
  // Estimación estándar de gastos de compraventa e impuestos en Andalucía (aprox 10%)
  const gastosEstimados = Math.round(precioVivienda * 0.10); 
  const dineroTotalNecesario = ahorrosIniciales + gastosEstimados;

  return (
    // <section id="simulador" className="py-16 bg-zinc-50 border-t border-zinc-200">
    <section id="simulador" className="py-16 bg-[#f8f7f5] border-t border-zinc-200">
      {/* <div className="max-w-4xl mx-auto px-4"> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* <div className="text-center mb-12"> */}
          {/* <div className="mb-12"> */}
          <div className="lg:col-span-5">
            {/* <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-4"> */}
             <p className="eyebrow mb-4">02 — Haz tus números</p>
            <h2 className="text-display text-4xl md:text-6xl text-zinc-900 mb-4 max-w-xl">
              {/* Simulador de Cuota Hipotecaria */}
              ¿Cuánto pagarías al mes?
            </h2>
            {/* <p className="text-zinc-600 max-w-xl mx-auto"> */}
            <p className="text-zinc-600 max-w-xl">
              {/* Calcula las condiciones de tu hipoteca en tiempo real y comprueba por qué es más inteligente comprar que alquilar en Málaga. */}
              Descubre cómo una vivienda propia puede costarte menos que un alquiler
            </p>
          </div>
        
          <div className="lg:col-span-7">

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl shadow-sm border border-zinc-100"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-background p-8 rounded-2xl shadow-sm border border-zinc-100">
              
              {/* COLUMNA DE ENTRADA DE DATOS */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">
                    Precio de la vivienda (€)
                  </label>
                  <input
                    type="number"
                    value={precioVivienda}
                    onChange={(e) => setPrecioVivienda(Number(e.target.value))}
                    className="w-full p-3 border border-zinc-300 rounded-lg text-zinc-900 font-medium focus:outline-none focus:border-zinc-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">
                    Aportación inicial / Ahorros (€)
                  </label>
                  <input
                    type="number"
                    value={ahorrosIniciales}
                    onChange={(e) => setAhorrosIniciales(Number(e.target.value))}
                    className="w-full p-3 border border-zinc-300 rounded-lg text-zinc-900 font-medium focus:outline-none focus:border-zinc-900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">
                      Interés fijo (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={tipoInteres}
                      onChange={(e) => setTipoInteres(Number(e.target.value))}
                      className="w-full p-3 border border-zinc-300 rounded-lg text-zinc-900 font-medium focus:outline-none focus:border-zinc-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">
                      Plazo (Años)
                    </label>
                    <input
                      type="number"
                      value={aniosPlazo}
                      onChange={(e) => setAniosPlazo(Number(e.target.value))}
                      className="w-full p-3 border border-zinc-300 rounded-lg text-zinc-900 font-medium focus:outline-none focus:border-zinc-900"
                    />
                  </div>
                </div>
              </div>

              {/* COLUMNA DE RESULTADOS COMPILADOS */}
              <div className="bg-zinc-900 text-white p-6 rounded-xl flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <p className="text-zinc-400 text-xs uppercase tracking-wider">Tu cuota mensual estimada</p>
                    <p className="text-5xl font-serif mt-1 text-white">
                      {cuotaMensual} €<span className="text-sm font-sans text-zinc-400">/mes</span>
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-800 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Capital a financiar:</span>
                      <span className="font-medium">{importePrestamo.toLocaleString()} €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Gastos e Impuestos est. (10%):</span>
                      <span className="font-medium">~ {gastosEstimados.toLocaleString()} €</span>
                    </div>
                    <div className="flex justify-between border-t border-zinc-800 pt-2 font-medium">
                      <span className="text-zinc-300">Efectivo total necesario:</span>
                      <span className="text-emerald-400">{dineroTotalNecesario.toLocaleString()} €</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a 
                    href="#contacto" 
                    className="block text-center w-full bg-white text-zinc-900 font-medium py-3 rounded-lg hover:bg-zinc-100 transition-colors"                    
                  >
                    Solicitar más información
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};