import { useState } from "react";
import { motion } from "motion/react";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "34671984202"; // TODO: reemplazar por número real
const WEB3FORMS_KEY = "04f7354b-dc8b-4c84-8e00-3a25c2123231"; // 🔑 Pega aquí la clave que recibas de web3forms.com

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: conectar con backend / email service
    setLoading(true);

    try {
      // 🚀 Enviamos los datos directamente al servicio de correo
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: "Web MAROTO - Nuevo Lead",
          subject: `Nuevo interesado: ${form.name}`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
      } else {
        alert("Hubo un error al enviar el formulario. Por favor, inténtalo por WhatsApp.");
      }
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      alert("Error de conexión. Inténtalo de nuevo en unos instantes.");
    } finally {
      setLoading(false);
    }
    
    setSent(true);
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hola, me interesa el proyecto MAROTO en Málaga. ¿Pueden enviarme información?",
  )}`;

  return (
    <section id="contacto" className="relative py-28 md:py-40 bg-primary text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6"
        >
          <p className="eyebrow !text-primary-foreground/60 mb-4">09 — Contacto</p>
          <h2 className="text-display text-5xl md:text-7xl mb-8">
            Solicita información
            <br />
            <span className="italic">sin compromiso.</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-md leading-relaxed mb-10">
            Te enviaremos el dossier completo con planos, calidades, precios y
            condiciones de financiación.
          </p>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-background text-foreground px-6 py-4 rounded-full hover:bg-background/90 transition-all"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-sm uppercase tracking-[0.18em] font-medium">
              Escríbenos por WhatsApp
            </span>
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          onSubmit={onSubmit}
          className="lg:col-span-6 space-y-6"
        >
          {sent ? (
            <div className="border border-primary-foreground/20 p-10 text-center">
              <p className="text-display text-3xl mb-3">Gracias.</p>
              <p className="text-primary-foreground/70">
                Hemos recibido tus datos. Te contactaremos en menos de 24 horas.
              </p>
            </div>
          ) : (
            <>
              <Field
                label="Nombre"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
              />
              <Field
                label="Teléfono"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
              />
              <div className="border-b border-primary-foreground/20 pb-3">
                <label className="block text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50 mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="¿Para vivir o invertir? ¿Algún estudio que te interese especialmente? ¿Alguna información en especial que necesites?"
                  className="w-full bg-transparent text-primary-foreground placeholder:text-primary-foreground/30 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-background text-foreground px-7 py-4 rounded-full mt-4 hover:bg-background/90 transition-all"
              >
                <span className="text-sm uppercase tracking-[0.18em] font-medium">
                  Enviar solicitud
                </span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </button>
            </>
          )}
        </motion.form>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={1.8} />
      </a>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="border-b border-primary-foreground/20 pb-3">
      <label className="block text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50 mb-2">
        {label}
        {required && " *"}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-primary-foreground outline-none text-lg"
      />
    </div>
  );
}
