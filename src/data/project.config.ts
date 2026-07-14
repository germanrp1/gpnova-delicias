import {
  Bed,
  Bath,
  Users,
  Hammer,
  Zap,
  Sofa,
  Snowflake,
  MapPin,

  
  Ruler,

} from "lucide-react";

// Importamos imágenes para el Gallery y cualquier otro apartado
// ============================
// FACHADA
// ============================

import Fachada from "@/assets/gallery/Fachada.png";
import FachadaIA from "@/assets/gallery/Fachada_IA1.png";

// ============================
// SALÓN
// ============================

import SalonCocina from "@/assets/gallery/Salon-Cocina.jpeg";
import SalonCocinaIA from "@/assets/gallery/Salon-CocinaIA.jpeg";

import SalonComedor from "@/assets/gallery/Salon-Comedor.png";
import SalonComedorIA from "@/assets/gallery/Salon-ComedorIA.png";

// ============================
// DORMITORIOS
// ============================

import Hab1 from "@/assets/gallery/Hab1.jpeg";
import Hab1IA from "@/assets/gallery/Hab1IA.jpeg";

import Hab2 from "@/assets/gallery/Hab2.jpeg";
import Hab2IA from "@/assets/gallery/Hab2IA.jpeg";

import Hab3 from "@/assets/gallery/Hab3.png";
import Hab3IA from "@/assets/gallery/Hab3IA.jpeg";

import Hab4 from "@/assets/gallery/Hab4.jpeg";
import Hab4IA from "@/assets/gallery/Hab4IA.png";

// ============================
// BAÑOS
// ============================

import Bano1 from "@/assets/gallery/Baño1.png";
import Bano1IA from "@/assets/gallery/Baño1IA.jpeg";

import Bano2 from "@/assets/gallery/Baño2.png";
import Bano2IA from "@/assets/gallery/Baño2IA.jpeg";

export const project = {

  id: "Delicias",
  name: "DELICIAS",

  city: "Málaga",

  neighborhood: "Las Delicias",

  title: "Tu nuevo hogar en Las Delicias",

  subtitle:
    "Vivienda completamente reformada lista para entrar a vivir.",

  navigation: [
    { href: "#proyecto", label: "Proyecto" },
    { href: "#vivienda", label: "Vivienda" },
    { href: "#caracteristicas", label: "Características" },
  ],
  
  hero: {
    eyebrow: "Málaga · Las Delicias · Reforma integral",
    title: {
      line1: "¿Buscas vivienda...",
      line2: "o una inversión rentable?"
    },
    description:
      "La respuesta está aquí. Una vivienda completamente reformada, con 3 dormitorios (opción de 4), 2 baños y un diseño pensado tanto para disfrutarla en familia como para obtener una elevada rentabilidad mediante alquiler por habitaciones.",

    primaryButton: "Solicitar información",
    secondaryButton: "Ver la vivienda",
    simulatorButton: "Calcula cuota / rentabilidad",

    buttons: {
      primary: {
        // label: "Solicitar información",
        label: "Solicitar info",
        href: "#contacto",
      },

      secondary: {
        label: "Ver vivienda",
        href: "#proyecto",
      },

      simulator: {
        //label: "Calcula cuota / rentabilidad",
        label: "Cuota/rentabilidad",
        href: "#simulador",
      },
    },
    heroPaddingTop: "pt-[34px] md:pt-0",
    maxWidth: "4xl",
    titleSize: "6xl",
    overlayOpacity: 0.55,
    eyebrowMargin: "mt-6 mb-10",
    titleMarginTop: "mt-8",
  },

  branding: {
    // primaryColor: "#869F57", Alternativa: #7D9650, Para MAROTO: #B8863B
    primaryColor: "#869F57",
    primaryColorHover: "#6F8647",
    primaryColorLight: "#B9C991",
    logoVariant: "colored",
    activeCardColor: "#869F57",

    primaryLight: "#8FA463",
    primaryDark: "#556536",
    accent: "#71844A",
    signatureColor: "#869F57",
    logoColor: "#869F57",

    signatureFont: '"Alex Brush", cursive',
    signatureSize: "2rem",
    signatureText: "By Pablo Mastrorilli & Germán Rodríguez",
  

    heroButtonStyle: "filled",

    logoMarginTop: "mt-4",
    logo: "...",
    logoOffsetY: 12,
    navHeight: "h-20",
  },

  simulator: {

    purchasePrice: 295000,
    years: 30,
    interest: 3.0,
    savings: 0    
  },

  investment: {
    purchasePrice: 295000,

    rooms: {
        default: 4,
        optional: 4
    },

    rent: {
        min: 400,
        max: 650,
        default: 500,
        step: 25
    },

    cta: "Solicitar estudio personalizado",
  },

  buyerMode: {
    eyebrow: "01 — Personaliza tu experiencia",

    title: "¿Cómo quieres descubrir esta vivienda?",

    description:
      "Selecciona el modo que mejor se adapte a ti. El simulador y parte del contenido se adaptarán automáticamente.",

    living: {
      title: "Quiero vivir aquí",

      description:
        "Descubre cuánto pagarías al mes, calcula tu cuota hipotecaria y comprueba por qué esta vivienda puede convertirse en tu próximo hogar.",
    },

    investing: {
      title: "Quiero invertir aquí",

      description:
        "Calcula la rentabilidad potencial mediante alquiler por habitaciones y analiza distintos escenarios de inversión.",
    },
  },

  project: {

    eyebrow: "03 — LA VIVIENDA",

    title: [
        "Una reforma integral",
        "pensada para durar."
    ],

    description:
      "Esta vivienda ha sido completamente transformada mediante una reforma integral, renovando instalaciones, distribución y acabados para ofrecer un hogar moderno, funcional y preparado para muchos años. Cada decisión se ha tomado buscando el equilibrio entre diseño, comodidad y valor a largo plazo.",

    specs: [

          {
            icon: Ruler,
            label: "Superficie",
            value: "76 m²",
          },

          {
            icon: Bed,
            label: "Dormitorios",
            value: "3 (+1)",
          },

          {
            icon: Bath,
            label: "Baños",
            value: "2",
          },

          {
            icon: Hammer,
            label: "Reforma",
            value: "Integral",
          },

          {
            icon: Zap,
            label: "Instalaciones",
            value: "Nuevas",
          },

          {
            icon: Snowflake,
            label: "A/A",
            value: "Preinstalación",
          },

      ],

      planImage: "",


  },

  highlights: {

    eyebrow: "06 — Lo que hace especial esta vivienda",

    title: "Pensada para disfrutarla desde el primer día.",

    description:
      "Cada detalle de la reforma se ha diseñado para ofrecer comodidad, funcionalidad y valor a largo plazo.",

    items: [

      {
        icon: Bed,
        label: "3 dormitorios (+1)",
        description:
          "Posibilidad de crear un cuarto dormitorio fácilmente.",
      },

      {
        icon: Bath,
        label: "2 baños completos",
        description:
          "Mayor comodidad para familias o alquiler por habitaciones.",
      },

      {
        icon: Hammer,
        label: "Reforma integral",
        description:
          "Vivienda completamente renovada.",
      },

      {
        icon: Zap,
        label: "Instalaciones nuevas",
        description:
          "Electricidad y fontanería totalmente sustituidas.",
      },

      {
        icon: Snowflake,
        label: "Preinstalación A/A",
        description:
          "Preparada para climatización.",
      },

      {
        icon: Sofa,
        label: "Lista para estrenar",
        description:
          "Reforma completamente terminada.",
      },

      {
        icon: Users,
        label: "Ideal para alquiler por habitaciones",
        description:
          "Alta demanda de estudiantes y trabajadores.",
      },

      {
        icon: MapPin,
        label: "Las Delicias",
        description:
          "Excelente ubicación en Málaga.",
      },

    ],
    
  },
  gallery: [

    // ==========================================
    // FACHADA
    // ==========================================

    {
      title: "Fachada",
      subtitle: "Vista exterior",

      layout: "single",

      image: FachadaIA,

      caption:
        "Edificio residencial situado en una calle tranquila del barrio de Las Delicias.",
    },

    // ==========================================
    // SALÓN
    // ==========================================

    {
      title: "Salón - Cocina",
      subtitle: "Vista desde la entrada",

      layout: "compare",

      current: SalonCocina,
      proposal: SalonCocinaIA,

      note:
        "Home Staging Virtual realizado sobre una fotografía real.",
    },

    {
      title: "Salón - Comedor",
      subtitle: "Vista hacia la zona de estar",

      layout: "compare",

      current: SalonComedor,
      proposal: SalonComedorIA,

      note:
        "Home Staging Virtual realizado sobre una fotografía real.",
    },

    // ==========================================
    // DORMITORIOS
    // ==========================================

    {
      title: "Dormitorio 1",

      layout: "compare",

      current: Hab1,
      proposal: Hab1IA,

      note:
        "Home Staging Virtual realizado sobre una fotografía real.",
    },

    {
      title: "Dormitorio 2",

      layout: "compare",

      current: Hab2,
      proposal: Hab2IA,

      note:
        "Home Staging Virtual realizado sobre una fotografía real.",
    },

    {
      title: "Dormitorio 3",

      layout: "compare",

      current: Hab3,
      proposal: Hab3IA,

      note:
        "Home Staging Virtual realizado sobre una fotografía real.",
    },

    {
      title: "Dormitorio 4",
      subtitle: "Espacio opcional",

      layout: "compare",

      current: Hab4,
      proposal: Hab4IA,

      note:
        "Este espacio puede utilizarse como cuarto dormitorio, despacho o sala multifuncional.",
    },

    // ==========================================
    // BAÑOS
    // ==========================================

    {
      title: "Baño principal",

      layout: "compare",

      current: Bano1,
      proposal: Bano1IA,

      proposalBadge: "Propuesta de decoración",

      note:
        "Ejemplo de decoración mediante Home Staging Virtual.",
    },

    {
      title: "Baño secundario",

      layout: "compare",

      current: Bano2,
      proposal: Bano2IA,

      proposalBadge: "Propuesta de decoración",

      note:
        "Ejemplo de decoración mediante Home Staging Virtual.",
    },

  ],



  // Resto de apartados

  contact: {
    email: "gpnova.realestate@gmail.com",
    phone: "34671984202",
    whatsapp: "34671984202",
  },

  web3forms: {
    accessKey: "04f7354b-dc8b-4c84-8e00-3a25c2123231",
    subjectPrefix: "[LAS DELICIAS]",
    includeProject: true,
    includeUrl: true,
  },

  images: {
    showVirtualStagingLabel: true,
    virtualStagingLabel: "HOME STAGING VIRTUAL",
    virtualStagingNote:
      "Home staging virtual realizado sobre fotografías reales de la vivienda.",
  },
  //enquirySubject: "[LAS DELICIAS]",

  whatsappMessage:
    "Hola, me interesa el proyecto Las Delicias en Málaga. ¿Podrían enviarme información?",

  seo: {
    seoTitle: "Delicias Signature Homes | GP NOVA",
    seoDescription: "Vivienda completamente reformada en Las Delicias (Málaga), lista para entrar a vivir.",
  }

}
