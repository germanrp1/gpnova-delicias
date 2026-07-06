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

    price: 310000,

    years: 30,

    interest: 3.0
    

  },

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
