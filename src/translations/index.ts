import { Language } from '@/contexts/LanguageContext';

export interface Translations {
  header: {
    services: string;
    content: string;
    talents: string;
    contact: string;
    joinAsTalent: string;
    getStarted: string;
  };
  hero: {
    badge: string;
    title: {
      main: string;
      highlight: string;
    };
    subtitle: string;
    socialProof: {
      talents: string;
      rating: string;
    };
    cta: {
      primary: string;
      secondary: string;
    };
    urgency: string;
    stats: {
      experience: string;
      success: string;
      retention: string;
      response: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    description: string;
    services: {
      traffic: {
        title: string;
        description: string;
        features: string[];
      };
      analytics: {
        title: string;
        description: string;
        features: string[];
      };
      social: {
        title: string;
        description: string;
        features: string[];
      };
      sponsorships: {
        title: string;
        description: string;
        features: string[];
      };
      media: {
        title: string;
        description: string;
        features: string[];
      };
      content: {
        title: string;
        description: string;
        features: string[];
      };
    };
    learnMore: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
    ctaUrgency: string;
  };
  socialProof: {
    title: string;
    subtitle: string;
    metrics: {
      experience: {
        label: string;
        highlight: string;
      };
      stories: {
        label: string;
        highlight: string;
      };
      rating: {
        label: string;
        highlight: string;
      };
    };
    testimonials: {
      quote: string;
      author: string;
      role: string;
      result: string;
    }[];
  };
  talentCTA: {
    title: string;
    subtitle: string;
    description: string;
    benefits: {
      earnings: {
        title: string;
        description: string;
      };
      reach: {
        title: string;
        description: string;
      };
      brands: {
        title: string;
        description: string;
      };
      support: {
        title: string;
        description: string;
      };
    };
    stats: {
      talents: string;
      reach: string;
      partners: string;
      support: string;
    };
    regions: {
      title: string;
      subtitle: string;
    };
    button: string;
    requirements: string;
  };
  contact: {
    title: string;
    subtitle: string;
    available: string;
    response: string;
    form: {
      title: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      company: string;
      identification: string;
      contactMethod: string;
      message: string;
      messagePlaceholder: string;
      submitButton: string;
      privacy: string;
      options: {
        brand: string;
        operator: string;
        developer: string;
        talent: string;
        other: string;
      };
      methods: {
        email: string;
        phone: string;
        whatsapp: string;
        telegram: string;
        skype: string;
      };
    };
    quickContact: {
      title: string;
      email: string;
      phone: string;
      whatsapp: string;
    };
    offices: {
      title: string;
      latam: string;
      europe: string;
      apac: string;
    };
    trust: {
      responseTime: string;
      clients: string;
      guarantee: string;
      awards: string;
    };
  };
  clientLogos: {
    title: string;
    subtitle: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    companies: {
      company: string;
      text: string;
    }[];
    guaranteedResults: string;
    trackRecord: string;
    stats: {
      registrations: string;
      ftds: string;
      satisfaction: string;
      optimization: string;
    };
    features: string[];
  };
  footer: {
    description: string;
    services: {
      title: string;
      traffic: string;
      benchmarking: string;
      socialMedia: string;
      sponsorships: string;
      mediaBuying: string;
      contentProduction: string;
    };
    regions: {
      title: string;
      latam: string;
      northAmerica: string;
      europe: string;
      apac: string;
      australia: string;
      newZealand: string;
    };
    contact: {
      title: string;
      email: string;
      phone: string;
      location: string;
      workWithUs: string;
    };
    legal: {
      copyright: string;
      privacy: string;
      terms: string;
      cookies: string;
    };
  };
}

const translations: Record<Language, Translations> = {
  en: {
    header: {
      services: "Services",
      content: "B.Content",
      talents: "Talents",
      contact: "Contact",
      joinAsTalent: "Join as Talent",
      getStarted: "Get Started"
    },
    hero: {
      badge: "⚡ 200+ Success Stories • Proven Results",
      title: {
        main: "Turn Your iGaming Traffic Into",
        highlight: "Pure Profit"
      },
      subtitle: "We've helped 200+ casino operators and influencers grow their business. Join our proven iGaming marketing network.",
      socialProof: {
        talents: "200+ Talents Trust Us",
        rating: "⭐⭐⭐⭐⭐ 4.9/5 Rating"
      },
      cta: {
        primary: "🚀 Get Your FREE Marketing Consultation",
        secondary: "Watch $1M Case Study (2 min)"
      },
      urgency: "⏰ Get Started: Free consultation to discuss your goals.",
      stats: {
        experience: "Years Experience",
        success: "Success Stories",
        retention: "Client Retention",
        response: "Average Response"
      }
    },
    services: {
      title: "How We 10X Your Results",
      subtitle: "Our proven system has helped 200+ clients grow their revenue. Here's exactly how we'll scale your iGaming business.",
      description: "Comprehensive iGaming solutions for maximum growth.",
      services: {
        traffic: {
          title: "Traffic for Casino Operators",
          description: "High-quality traffic generation with proven conversion rates. Specialized in casino and betting platforms.",
          features: ["Quality traffic", "High conversion", "Global reach"]
        },
        analytics: {
          title: "Benchmarking & Analytics",
          description: "Comprehensive market analysis and platform benchmarking to optimize your competitive position.",
          features: ["Market analysis", "Competitor insights", "Performance metrics"]
        },
        social: {
          title: "Social Media Management",
          description: "Full-scale social media strategies tailored for the iGaming industry across all major platforms.",
          features: ["Content strategy", "Community building", "Brand awareness"]
        },
        sponsorships: {
          title: "Sponsorships & Activations",
          description: "Strategic partnerships and brand activations that connect with your target audience effectively.",
          features: ["Event sponsorships", "Brand partnerships", "Audience engagement"]
        },
        media: {
          title: "Media Buying & Marketing",
          description: "Performance-driven media buying strategies optimized for maximum ROI in the iGaming sector.",
          features: ["Media buying", "Performance optimization", "ROI focused"]
        },
        content: {
          title: "Content & Event Production",
          description: "High-quality audiovisual content and event production services for maximum brand impact.",
          features: ["Video production", "Event management", "Creative content"]
        }
      },
      learnMore: "Learn More",
      ctaTitle: "💰 Results-Driven Approach",
      ctaDescription: "Join 200+ operators who've seen strong ROI with our proven strategies. Performance-based pricing available.",
      ctaButton: "Get Your FREE Marketing Consultation",
      ctaUrgency: "⏰ Schedule your consultation today"
    },
    socialProof: {
      title: "Trusted by Industry Leaders",
      subtitle: "Don't take our word for it. Here's what our clients and partners say about working with us.",
      metrics: {
        experience: {
          label: "Years Experience",
          highlight: "Helping clients grow"
        },
        stories: {
          label: "Success Stories",
          highlight: "Strong ROI results"
        },
        rating: {
          label: "Client Rating",
          highlight: "98% retention rate"
        }
      },
      testimonials: [
        {
          quote: "Basher Agency took our casino from $100K to $2M monthly revenue in just 6 months.",
          author: "Marcus Chen",
          role: "CEO, LuxBet Casino",
          result: "+1900% Revenue Growth"
        },
        {
          quote: "As an influencer, I went from $5K to $85K/month with their premium brand partnerships.",
          author: "Sofia Rodriguez",
          role: "Gaming Influencer, 2.3M followers",
          result: "+1600% Income Increase"
        },
        {
          quote: "ROI was 450% in the first quarter. These guys know exactly what they're doing.",
          author: "David Thompson",
          role: "CMO, BetKing",
          result: "+450% ROI"
        }
      ]
    },
    talentCTA: {
      title: "Earn Great Income as Our Partner",
      subtitle: "200+ influencers already earning well with our exclusive iGaming partnerships. Join our growing talent network.",
      description: "💰 Competitive rates and performance bonuses available",
      benefits: {
        earnings: {
          title: "Top Earnings",
          description: "Competitive rates and performance bonuses"
        },
        reach: {
          title: "Global Reach",
          description: "Work with brands across 4 continents"
        },
        brands: {
          title: "Premium Brands",
          description: "Partner with industry-leading operators"
        },
        support: {
          title: "Full Support",
          description: "Dedicated account management and resources"
        }
      },
      stats: {
        talents: "Active Talents",
        reach: "Monthly Reach",
        partners: "Brand Partners",
        support: "Support"
      },
      regions: {
        title: "Talents Across All Regions",
        subtitle: "Elite talents ready to partner"
      },
      button: "💎 Apply to Elite Network (2 min)",
      requirements: "⭐ Minimum 10K followers • 🎮 Gaming/Casino content focus • 📊 Consistent engagement rates"
    },
    contact: {
      title: "Ready to 10X Your Results?",
      subtitle: "Join 50+ industry leaders who trust us with their growth. Free consultation call - guaranteed results or money back.",
      available: "Available now",
      response: "Response within 2 hours",
      form: {
        title: "Get Started Today",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        company: "Company/Brand",
        identification: "How would you like to be identified?",
        contactMethod: "Preferred Contact Method",
        message: "Your Message",
        messagePlaceholder: "Tell us about your project, goals, and how we can help...",
        submitButton: "🚀 Get My Free Strategy Session",
        privacy: "No spam. We'll only send you updates about your campaign.",
        options: {
          brand: "Brand",
          operator: "Betting or Casino Operator",
          developer: "Game Developer",
          talent: "Talent/Influencer",
          other: "Other"
        },
        methods: {
          email: "Email",
          phone: "Phone",
          whatsapp: "WhatsApp",
          telegram: "Telegram",
          skype: "Skype"
        }
      },
      quickContact: {
        title: "Quick Contact",
        email: "Email",
        phone: "Phone",
        whatsapp: "WhatsApp"
      },
      offices: {
        title: "Our Offices",
        latam: "Latin America HQ",
        europe: "Europe Office",
        apac: "APAC Office"
      },
      trust: {
        responseTime: "⚡ 2 Hours Average Response Time",
        clients: "50+ Happy Clients",
        guarantee: "100% Money Back",
        awards: "🏆 Award-winning campaigns • 🔒 NDA protected • 📈 Results guaranteed"
      }
    },
    clientLogos: {
      title: "Trusted by the biggest names in iGaming",
      subtitle: "Working with industry leaders across casino operators, betting platforms, and game providers worldwide."
    },
    testimonials: {
      title: "Who Trusts Us",
      subtitle: "Hear from our partners about the results we've delivered together in the iGaming industry.",
      companies: [
        {
          company: "Pinnacle",
          text: "Basher has been a close partner throughout these years in LATAM, thanks to his knowledge in eSports we were able to develop successful campaigns together delivering quality results."
        },
        {
          company: "BetBoom",
          text: "We've been working with Basher Agency for a whole year! They are highly skilled professionals in streamers, ambassadors, social media, and special projects for esports. Working together is very comfortable, so we highly recommend the agency as a reliable partner."
        },
        {
          company: "Leon",
          text: "Working with Basher Agency for over a year in APAC, Australia, and New Zealand has been a game-changer. Their expertise in iGaming marketing, influencer partnerships, and high-quality traffic generation has delivered outstanding results. The team is proactive, data-driven, and truly understands the market. Basher is not just a partner—they are a key part of our success."
        },
        {
          company: "22Bet",
          text: "Working with the basher agency was always a pleasure, sometimes there were unpleasant situations that arose due to the nature of our work, however, all these situations were resolved by the basher agency with excellent quality and speed. I cannot say anything else but recommend them to anyone who is willing to do business with them."
        }
      ],
      guaranteedResults: "Guaranteed Results",
      trackRecord: "Our track record speaks for itself",
      stats: {
        registrations: "Monthly Registrations",
        ftds: "Monthly FTDs",
        satisfaction: "Client Satisfaction",
        optimization: "Real-time Optimization"
      },
      features: [
        "Real-time optimization to maximize conversions and ROI",
        "Monthly reports and weekly strategy meetings",
        "Expertise in marketing, branding, and social media",
        "Local market support from industry experts"
      ]
    },
    footer: {
      description: "The worldwide leading marketing agency for casino/betting operators, influencers, and audiovisual content.",
      services: {
        title: "Services",
        traffic: "Traffic Generation",
        benchmarking: "Benchmarking",
        socialMedia: "Social Media",
        sponsorships: "Sponsorships",
        mediaBuying: "Media Buying",
        contentProduction: "Content Production"
      },
      regions: {
        title: "Regions",
        latam: "Latin America",
        northAmerica: "North America",
        europe: "Europe",
        apac: "APAC",
        australia: "Australia",
        newZealand: "New Zealand"
      },
      contact: {
        title: "Contact",
        email: "hello@basher.agency",
        phone: "+1 (555) 123-4567",
        location: "Global offices",
        workWithUs: "Work With Us"
      },
      legal: {
        copyright: "© 2024 Basher Agency. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookie Policy"
      }
    }
  },
  es: {
    header: {
      services: "Servicios",
      content: "B.Content",
      talents: "Talentos",
      contact: "Contacto",
      joinAsTalent: "Únete como Talento",
      getStarted: "Comenzar"
    },
    hero: {
      badge: "⚡ 200+ Historias de Éxito • Resultados Comprobados",
      title: {
        main: "Convierte tu Tráfico iGaming en",
        highlight: "Pura Ganancia"
      },
      subtitle: "Hemos ayudado a 200+ operadores de casino e influencers a hacer crecer su negocio. Únete a nuestra red probada de marketing iGaming.",
      socialProof: {
        talents: "200+ Talentos Confían en Nosotros",
        rating: "⭐⭐⭐⭐⭐ 4.9/5 Calificación"
      },
      cta: {
        primary: "🚀 Obtén tu Consulta de Marketing GRATUITA",
        secondary: "Ver Caso de Estudio $1M (2 min)"
      },
      urgency: "⏰ Comienza Ahora: Consulta gratuita para discutir tus objetivos.",
      stats: {
        experience: "Años de Experiencia",
        success: "Historias de Éxito",
        retention: "Retención de Clientes",
        response: "Respuesta Promedio"
      }
    },
    services: {
      title: "Cómo Multiplicamos por 10 tus Resultados",
      subtitle: "Nuestro sistema probado ha ayudado a 200+ clientes a hacer crecer sus ingresos. Así es exactamente como escalaremos tu negocio iGaming.",
      description: "Soluciones integrales de iGaming para máximo crecimiento.",
      services: {
        traffic: {
          title: "Tráfico para Operadores de Casino",
          description: "Generación de tráfico de alta calidad con tasas de conversión comprobadas. Especializado en plataformas de casino y apuestas.",
          features: ["Tráfico de calidad", "Alta conversión", "Alcance global"]
        },
        analytics: {
          title: "Benchmarking y Análisis",
          description: "Análisis de mercado integral y benchmarking de plataformas para optimizar tu posición competitiva.",
          features: ["Análisis de mercado", "Insights de competencia", "Métricas de rendimiento"]
        },
        social: {
          title: "Gestión de Redes Sociales",
          description: "Estrategias de redes sociales a gran escala adaptadas para la industria iGaming en todas las plataformas principales.",
          features: ["Estrategia de contenido", "Construcción de comunidad", "Conciencia de marca"]
        },
        sponsorships: {
          title: "Patrocinios y Activaciones",
          description: "Alianzas estratégicas y activaciones de marca que conectan efectivamente con tu audiencia objetivo.",
          features: ["Patrocinios de eventos", "Alianzas de marca", "Engagement de audiencia"]
        },
        media: {
          title: "Compra de Medios y Marketing",
          description: "Estrategias de compra de medios orientadas al rendimiento optimizadas para máximo ROI en el sector iGaming.",
          features: ["Compra de medios", "Optimización de rendimiento", "Enfoque en ROI"]
        },
        content: {
          title: "Producción de Contenido y Eventos",
          description: "Servicios de producción de contenido audiovisual y eventos de alta calidad para máximo impacto de marca.",
          features: ["Producción de video", "Gestión de eventos", "Contenido creativo"]
        }
      },
      learnMore: "Saber Más",
      ctaTitle: "💰 Enfoque Orientado a Resultados",
      ctaDescription: "Únete a 200+ operadores que han visto fuerte ROI con nuestras estrategias probadas. Precios basados en rendimiento disponibles.",
      ctaButton: "Obtén tu Consulta de Marketing GRATUITA",
      ctaUrgency: "⏰ Programa tu consulta hoy"
    },
    socialProof: {
      title: "Confianza de Líderes de la Industria",
      subtitle: "No tomes nuestra palabra. Esto es lo que nuestros clientes y socios dicen sobre trabajar con nosotros.",
      metrics: {
        experience: {
          label: "Años de Experiencia",
          highlight: "Ayudando a clientes a crecer"
        },
        stories: {
          label: "Historias de Éxito",
          highlight: "Resultados sólidos de ROI"
        },
        rating: {
          label: "Calificación de Clientes",
          highlight: "98% tasa de retención"
        }
      },
      testimonials: [
        {
          quote: "Basher Agency llevó nuestro casino de $100K a $2M de ingresos mensuales en solo 6 meses.",
          author: "Marcus Chen",
          role: "CEO, LuxBet Casino",
          result: "+1900% Crecimiento de Ingresos"
        },
        {
          quote: "Como influencer, pasé de $5K a $85K/mes con sus alianzas premium de marca.",
          author: "Sofia Rodriguez",
          role: "Influencer Gaming, 2.3M seguidores",
          result: "+1600% Aumento de Ingresos"
        },
        {
          quote: "El ROI fue 450% en el primer trimestre. Estos tipos saben exactamente lo que hacen.",
          author: "David Thompson",
          role: "CMO, BetKing",
          result: "+450% ROI"
        }
      ]
    },
    talentCTA: {
      title: "Gana Grandes Ingresos como Nuestro Socio",
      subtitle: "200+ influencers ya están ganando bien con nuestras alianzas exclusivas de iGaming. Únete a nuestra creciente red de talentos.",
      description: "💰 Tarifas competitivas y bonos de rendimiento disponibles",
      benefits: {
        earnings: {
          title: "Ingresos Top",
          description: "Tarifas competitivas y bonos de rendimiento"
        },
        reach: {
          title: "Alcance Global",
          description: "Trabaja con marcas en 4 continentes"
        },
        brands: {
          title: "Marcas Premium",
          description: "Asociate con operadores líderes de la industria"
        },
        support: {
          title: "Soporte Completo",
          description: "Gestión de cuenta dedicada y recursos"
        }
      },
      stats: {
        talents: "Talentos Activos",
        reach: "Alcance Mensual",
        partners: "Socios de Marca",
        support: "Soporte"
      },
      regions: {
        title: "Talentos en Todas las Regiones",
        subtitle: "Talentos elite listos para asociarse"
      },
      button: "💎 Aplicar a Red Elite (2 min)",
      requirements: "⭐ Mínimo 10K seguidores • 🎮 Enfoque en contenido Gaming/Casino • 📊 Tasas de engagement consistentes"
    },
    contact: {
      title: "¿Listo para Multiplicar por 10 tus Resultados?",
      subtitle: "Únete a 50+ líderes de la industria que confían en nosotros para su crecimiento. Llamada de consulta gratuita - resultados garantizados o devolvemos el dinero.",
      available: "Disponible ahora",
      response: "Respuesta en 2 horas",
      form: {
        title: "Comienza Hoy",
        firstName: "Nombre",
        lastName: "Apellido",
        email: "Dirección de Email",
        phone: "Número de Teléfono",
        company: "Empresa/Marca",
        identification: "¿Cómo te gustaría ser identificado?",
        contactMethod: "Método de Contacto Preferido",
        message: "Tu Mensaje",
        messagePlaceholder: "Cuéntanos sobre tu proyecto, objetivos y cómo podemos ayudar...",
        submitButton: "🚀 Obtener Mi Sesión de Estrategia Gratuita",
        privacy: "Sin spam. Solo te enviaremos actualizaciones sobre tu campaña.",
        options: {
          brand: "Marca",
          operator: "Operador de Apuestas o Casino",
          developer: "Desarrollador de Juegos",
          talent: "Talento/Influencer",
          other: "Otro"
        },
        methods: {
          email: "Email",
          phone: "Teléfono",
          whatsapp: "WhatsApp",
          telegram: "Telegram",
          skype: "Skype"
        }
      },
      quickContact: {
        title: "Contacto Rápido",
        email: "Email",
        phone: "Teléfono",
        whatsapp: "WhatsApp"
      },
      offices: {
        title: "Nuestras Oficinas",
        latam: "Sede América Latina",
        europe: "Oficina Europa",
        apac: "Oficina APAC"
      },
      trust: {
        responseTime: "⚡ 2 Horas Tiempo de Respuesta Promedio",
        clients: "50+ Clientes Felices",
        guarantee: "100% Devolución de Dinero",
        awards: "🏆 Campañas galardonadas • 🔒 Protegido por NDA • 📈 Resultados garantizados"
      }
    },
    clientLogos: {
      title: "Confianza de los nombres más grandes en iGaming",
      subtitle: "Trabajando con líderes de la industria en operadores de casino, plataformas de apuestas y proveedores de juegos en todo el mundo."
    },
    testimonials: {
      title: "Quién Confía en Nosotros",
      subtitle: "Escucha de nuestros socios sobre los resultados que hemos entregado juntos en la industria iGaming.",
      companies: [
        {
          company: "Pinnacle",
          text: "Basher ha sido un socio cercano durante estos años en LATAM, gracias a su conocimiento en eSports pudimos desarrollar campañas exitosas juntos entregando resultados de calidad."
        },
        {
          company: "BetBoom",
          text: "¡Hemos estado trabajando con Basher Agency durante todo un año! Son profesionales altamente calificados en streamers, embajadores, redes sociales y proyectos especiales para esports. Trabajar juntos es muy cómodo, por lo que recomendamos encarecidamente la agencia como un socio confiable."
        },
        {
          company: "Leon",
          text: "Trabajar con Basher Agency durante más de un año en APAC, Australia y Nueva Zelanda ha sido un cambio de juego. Su experiencia en marketing iGaming, asociaciones de influencers y generación de tráfico de alta calidad ha entregado resultados sobresalientes. El equipo es proactivo, basado en datos y realmente entiende el mercado. Basher no es solo un socio, son una parte clave de nuestro éxito."
        },
        {
          company: "22Bet",
          text: "Trabajar con basher agency siempre fue un placer, a veces hubo situaciones desagradables que surgieron debido a la naturaleza de nuestro trabajo, sin embargo, todas estas situaciones fueron resueltas por basher agency con excelente calidad y velocidad. No puedo decir nada más que recomendarlos a cualquiera que esté dispuesto a hacer negocios con ellos."
        }
      ],
      guaranteedResults: "Resultados Garantizados",
      trackRecord: "Nuestro historial habla por sí mismo",
      stats: {
        registrations: "Registros Mensuales",
        ftds: "FTDs Mensuales",
        satisfaction: "Satisfacción del Cliente",
        optimization: "Optimización en Tiempo Real"
      },
      features: [
        "Optimización en tiempo real para maximizar conversiones y ROI",
        "Reportes mensuales y reuniones de estrategia semanales",
        "Experiencia en marketing, branding y redes sociales",
        "Soporte de mercado local de expertos de la industria"
      ]
    },
    footer: {
      description: "La agencia de marketing líder mundial para operadores de casino/apuestas, influencers y contenido audiovisual.",
      services: {
        title: "Servicios",
        traffic: "Generación de Tráfico",
        benchmarking: "Benchmarking",
        socialMedia: "Redes Sociales",
        sponsorships: "Patrocinios",
        mediaBuying: "Compra de Medios",
        contentProduction: "Producción de Contenido"
      },
      regions: {
        title: "Regiones",
        latam: "América Latina",
        northAmerica: "América del Norte",
        europe: "Europa",
        apac: "APAC",
        australia: "Australia",
        newZealand: "Nueva Zelanda"
      },
      contact: {
        title: "Contacto",
        email: "hello@basher.agency",
        phone: "+1 (555) 123-4567",
        location: "Oficinas globales",
        workWithUs: "Trabaja Con Nosotros"
      },
      legal: {
        copyright: "© 2024 Basher Agency. Todos los derechos reservados.",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
        cookies: "Política de Cookies"
      }
    }
  },
  ru: {
    header: {
      services: "Услуги",
      content: "B.Content",
      talents: "Таланты",
      contact: "Контакты",
      joinAsTalent: "Присоединиться как Талант",
      getStarted: "Начать"
    },
    hero: {
      badge: "⚡ 200+ Историй Успеха • Проверенные Результаты",
      title: {
        main: "Превратите свой iGaming Трафик в",
        highlight: "Чистую Прибыль"
      },
      subtitle: "Мы помогли 200+ операторам казино и инфлюенсерам развить их бизнес. Присоединяйтесь к нашей проверенной сети iGaming маркетинга.",
      socialProof: {
        talents: "200+ Талантов Доверяют Нам",
        rating: "⭐⭐⭐⭐⭐ 4.9/5 Рейтинг"
      },
      cta: {
        primary: "🚀 Получите БЕСПЛАТНУЮ Маркетинговую Консультацию",
        secondary: "Смотреть Кейс $1М (2 мин)"
      },
      urgency: "⏰ Начать Сейчас: Бесплатная консультация для обсуждения ваших целей.",
      stats: {
        experience: "Лет Опыта",
        success: "Истории Успеха",
        retention: "Удержание Клиентов",
        response: "Среднее Время Ответа"
      }
    },
    services: {
      title: "Как Мы Увеличиваем Ваши Результаты в 10 Раз",
      subtitle: "Наша проверенная система помогла 200+ клиентам увеличить доходы. Вот именно как мы масштабируем ваш iGaming бизнес.",
      description: "Комплексные iGaming решения для максимального роста.",
      services: {
        traffic: {
          title: "Трафик для Операторов Казино",
          description: "Генерация высококачественного трафика с проверенными коэффициентами конверсии. Специализируемся на казино и платформах ставок.",
          features: ["Качественный трафик", "Высокая конверсия", "Глобальный охват"]
        },
        analytics: {
          title: "Бенчмаркинг и Аналитика",
          description: "Комплексный анализ рынка и бенчмаркинг платформ для оптимизации вашей конкурентной позиции.",
          features: ["Анализ рынка", "Конкурентные инсайты", "Метрики производительности"]
        },
        social: {
          title: "Управление Социальными Сетями",
          description: "Полномасштабные стратегии социальных сетей, адаптированные для индустрии iGaming на всех основных платформах.",
          features: ["Контент-стратегия", "Построение сообщества", "Узнаваемость бренда"]
        },
        sponsorships: {
          title: "Спонсорство и Активации",
          description: "Стратегические партнерства и брендовые активации, которые эффективно связывают с вашей целевой аудиторией.",
          features: ["Спонсорство событий", "Брендовые партнерства", "Вовлечение аудитории"]
        },
        media: {
          title: "Медиабаинг и Маркетинг",
          description: "Стратегии медиабаинга, ориентированные на производительность, оптимизированные для максимального ROI в секторе iGaming.",
          features: ["Медиабаинг", "Оптимизация производительности", "Фокус на ROI"]
        },
        content: {
          title: "Производство Контента и События",
          description: "Высококачественные услуги производства аудиовизуального контента и событий для максимального воздействия бренда.",
          features: ["Видеопроизводство", "Управление событиями", "Креативный контент"]
        }
      },
      learnMore: "Узнать Больше",
      ctaTitle: "💰 Подход, Ориентированный на Результаты",
      ctaDescription: "Присоединяйтесь к 200+ операторам, которые увидели сильный ROI с нашими проверенными стратегиями. Доступно ценообразование на основе производительности.",
      ctaButton: "Получите БЕСПЛАТНУЮ Маркетинговую Консультацию",
      ctaUrgency: "⏰ Запланируйте вашу консультацию сегодня"
    },
    socialProof: {
      title: "Доверие Лидеров Индустрии",
      subtitle: "Не верьте нам на слово. Вот что наши клиенты и партнеры говорят о работе с нами.",
      metrics: {
        experience: {
          label: "Лет Опыта",
          highlight: "Помогаем клиентам расти"
        },
        stories: {
          label: "Истории Успеха",
          highlight: "Сильные результаты ROI"
        },
        rating: {
          label: "Рейтинг Клиентов",
          highlight: "98% коэффициент удержания"
        }
      },
      testimonials: [
        {
          quote: "Basher Agency привело наше казино от $100K до $2M месячного дохода всего за 6 месяцев.",
          author: "Маркус Чен",
          role: "CEO, LuxBet Casino",
          result: "+1900% Рост Доходов"
        },
        {
          quote: "Как инфлюенсер, я перешел от $5K до $85K/месяц с их премиальными брендовыми партнерствами.",
          author: "София Родригес",
          role: "Gaming Инфлюенсер, 2.3M подписчиков",
          result: "+1600% Увеличение Доходов"
        },
        {
          quote: "ROI составил 450% в первом квартале. Эти ребята точно знают, что делают.",
          author: "Дэвид Томпсон",
          role: "CMO, BetKing",
          result: "+450% ROI"
        }
      ]
    },
    talentCTA: {
      title: "Зарабатывайте Отличный Доход как Наш Партнер",
      subtitle: "200+ инфлюенсеров уже хорошо зарабатывают с нашими эксклюзивными iGaming партнерствами. Присоединяйтесь к нашей растущей сети талантов.",
      description: "💰 Доступны конкурентные ставки и бонусы за производительность",
      benefits: {
        earnings: {
          title: "Топ Заработки",
          description: "Конкурентные ставки и бонусы за производительность"
        },
        reach: {
          title: "Глобальный Охват",
          description: "Работайте с брендами на 4 континентах"
        },
        brands: {
          title: "Премиальные Бренды",
          description: "Партнерство с ведущими операторами индустрии"
        },
        support: {
          title: "Полная Поддержка",
          description: "Выделенное управление аккаунтом и ресурсы"
        }
      },
      stats: {
        talents: "Активные Таланты",
        reach: "Месячный Охват",
        partners: "Брендовые Партнеры",
        support: "Поддержка"
      },
      regions: {
        title: "Таланты Во Всех Регионах",
        subtitle: "Элитные таланты готовы к партнерству"
      },
      button: "💎 Подать Заявку в Элитную Сеть (2 мин)",
      requirements: "⭐ Минимум 10K подписчиков • 🎮 Фокус на Gaming/Casino контенте • 📊 Стабильные показатели вовлеченности"
    },
    contact: {
      title: "Готовы Увеличить Ваши Результаты в 10 Раз?",
      subtitle: "Присоединяйтесь к 50+ лидерам индустрии, которые доверяют нам свой рост. Бесплатная консультация - гарантированные результаты или возврат денег.",
      available: "Доступно сейчас",
      response: "Ответ в течение 2 часов",
      form: {
        title: "Начать Сегодня",
        firstName: "Имя",
        lastName: "Фамилия",
        email: "Email Адрес",
        phone: "Номер Телефона",
        company: "Компания/Бренд",
        identification: "Как бы вы хотели быть идентифицированы?",
        contactMethod: "Предпочтительный Способ Связи",
        message: "Ваше Сообщение",
        messagePlaceholder: "Расскажите нам о вашем проекте, целях и как мы можем помочь...",
        submitButton: "🚀 Получить Мою Бесплатную Стратегическую Сессию",
        privacy: "Никакого спама. Мы будем отправлять вам только обновления о вашей кампании.",
        options: {
          brand: "Бренд",
          operator: "Оператор Ставок или Казино",
          developer: "Разработчик Игр",
          talent: "Талант/Инфлюенсер",
          other: "Другое"
        },
        methods: {
          email: "Email",
          phone: "Телефон",
          whatsapp: "WhatsApp",
          telegram: "Telegram",
          skype: "Skype"
        }
      },
      quickContact: {
        title: "Быстрая Связь",
        email: "Email",
        phone: "Телефон",
        whatsapp: "WhatsApp"
      },
      offices: {
        title: "Наши Офисы",
        latam: "Штаб-квартира Латинской Америки",
        europe: "Европейский Офис",
        apac: "Офис APAC"
      },
      trust: {
        responseTime: "⚡ 2 Часа Среднее Время Ответа",
        clients: "50+ Довольных Клиентов",
        guarantee: "100% Возврат Денег",
        awards: "🏆 Награжденные кампании • 🔒 Защищено NDA • 📈 Гарантированные результаты"
      }
    },
    clientLogos: {
      title: "Доверие крупнейших имен в iGaming",
      subtitle: "Работаем с лидерами индустрии среди операторов казино, платформ ставок и поставщиков игр по всему миру."
    },
    testimonials: {
      title: "Кто Нам Доверяет",
      subtitle: "Услышьте от наших партнеров о результатах, которые мы достигли вместе в индустрии iGaming.",
      companies: [
        {
          company: "Pinnacle",
          text: "Basher был близким партнером на протяжении этих лет в LATAM, благодаря его знаниям в eSports мы смогли разработать успешные кампании вместе, обеспечивающие качественные результаты."
        },
        {
          company: "BetBoom",
          text: "Мы работаем с Basher Agency уже целый год! Это высококвалифицированные профессионалы в стримерах, амбассадорах, социальных сетях и специальных проектах для киберспорта. Работать вместе очень комфортно, поэтому мы настоятельно рекомендуем агентство как надежного партнера."
        },
        {
          company: "Leon",
          text: "Работа с Basher Agency более года в APAC, Австралии и Новой Зеландии стала переломным моментом. Их экспертиза в маркетинге iGaming, партнерстве с инфлюенсерами и генерации высококачественного трафика принесла выдающиеся результаты. Команда проактивна, основана на данных и действительно понимает рынок. Basher не просто партнер - они ключевая часть нашего успеха."
        },
        {
          company: "22Bet",
          text: "Работать с basher agency всегда было удовольствием, иногда возникали неприятные ситуации из-за характера нашей работы, однако все эти ситуации были решены basher agency с отличным качеством и скоростью. Я не могу сказать ничего, кроме как рекомендовать их всем, кто готов вести с ними бизнес."
        }
      ],
      guaranteedResults: "Гарантированные Результаты",
      trackRecord: "Наш послужной список говорит сам за себя",
      stats: {
        registrations: "Ежемесячные Регистрации",
        ftds: "Ежемесячные FTD",
        satisfaction: "Удовлетворенность Клиентов",
        optimization: "Оптимизация в Реальном Времени"
      },
      features: [
        "Оптимизация в реальном времени для максимизации конверсий и ROI",
        "Ежемесячные отчеты и еженедельные стратегические встречи",
        "Экспертиза в маркетинге, брендинге и социальных сетях",
        "Локальная поддержка рынка от экспертов индустрии"
      ]
    },
    footer: {
      description: "Ведущее мировое маркетинговое агентство для операторов казино/ставок, инфлюенсеров и аудиовизуального контента.",
      services: {
        title: "Услуги",
        traffic: "Генерация Трафика",
        benchmarking: "Бенчмаркинг",
        socialMedia: "Социальные Сети",
        sponsorships: "Спонсорство",
        mediaBuying: "Медиабаинг",
        contentProduction: "Производство Контента"
      },
      regions: {
        title: "Регионы",
        latam: "Латинская Америка",
        northAmerica: "Северная Америка",
        europe: "Европа",
        apac: "APAC",
        australia: "Австралия",
        newZealand: "Новая Зеландия"
      },
      contact: {
        title: "Контакты",
        email: "hello@basher.agency",
        phone: "+1 (555) 123-4567",
        location: "Глобальные офисы",
        workWithUs: "Работать С Нами"
      },
      legal: {
        copyright: "© 2024 Basher Agency. Все права защищены.",
        privacy: "Политика Конфиденциальности",
        terms: "Условия Обслуживания",
        cookies: "Политика Куки"
      }
    }
  },
  ua: {
    header: {
      services: "Послуги",
      content: "B.Content",
      talents: "Таланти",
      contact: "Контакти",
      joinAsTalent: "Приєднатися як Талант",
      getStarted: "Почати"
    },
    hero: {
      badge: "⚡ 200+ Історій Успіху • Перевірені Результати",
      title: {
        main: "Перетворіть свій iGaming Трафік на",
        highlight: "Чистий Прибуток"
      },
      subtitle: "Ми допомогли 200+ операторам казино та інфлюенсерам розвинути їхній бізнес. Приєднуйтесь до нашої перевіреної мережі iGaming маркетингу.",
      socialProof: {
        talents: "200+ Талантів Довіряють Нам",
        rating: "⭐⭐⭐⭐⭐ 4.9/5 Рейтинг"
      },
      cta: {
        primary: "🚀 Отримайте БЕЗКОШТОВНУ Маркетингову Консультацію",
        secondary: "Дивитися Кейс $1М (2 хв)"
      },
      urgency: "⏰ Почати Зараз: Безкоштовна консультація для обговорення ваших цілей.",
      stats: {
        experience: "Років Досвіду",
        success: "Історії Успіху",
        retention: "Утримання Клієнтів",
        response: "Середній Час Відповіді"
      }
    },
    services: {
      title: "Як Ми Збільшуємо Ваші Результати в 10 Разів",
      subtitle: "Наша перевірена система допомогла 200+ клієнтам збільшити доходи. Ось саме як ми масштабуємо ваш iGaming бізнес.",
      description: "Комплексні iGaming рішення для максимального зростання.",
      services: {
        traffic: {
          title: "Трафік для Операторів Казино",
          description: "Генерація високоякісного трафіку з перевіреними коефіцієнтами конверсії. Спеціалізуємося на казино та платформах ставок.",
          features: ["Якісний трафік", "Висока конверсія", "Глобальний охоплення"]
        },
        analytics: {
          title: "Бенчмаркінг та Аналітика",
          description: "Комплексний аналіз ринку та бенчмаркінг платформ для оптимізації вашої конкурентної позиції.",
          features: ["Аналіз ринку", "Конкурентні інсайти", "Метрики продуктивності"]
        },
        social: {
          title: "Управління Соціальними Мережами",
          description: "Повномасштабні стратегії соціальних мереж, адаптовані для індустрії iGaming на всіх основних платформах.",
          features: ["Контент-стратегія", "Побудова спільноти", "Впізнаваність бренду"]
        },
        sponsorships: {
          title: "Спонсорство та Активації",
          description: "Стратегічні партнерства та брендові активації, які ефективно з'єднують з вашою цільовою аудиторією.",
          features: ["Спонсорство подій", "Брендові партнерства", "Залучення аудиторії"]
        },
        media: {
          title: "Медіабаїнг та Маркетинг",
          description: "Стратегії медіабаїнгу, орієнтовані на продуктивність, оптимізовані для максимального ROI в секторі iGaming.",
          features: ["Медіабаїнг", "Оптимізація продуктивності", "Фокус на ROI"]
        },
        content: {
          title: "Виробництво Контенту та Події",
          description: "Високоякісні послуги виробництва аудіовізуального контенту та подій для максимального впливу бренду.",
          features: ["Відеовиробництво", "Управління подіями", "Креативний контент"]
        }
      },
      learnMore: "Дізнатися Більше",
      ctaTitle: "💰 Підхід, Орієнтований на Результати",
      ctaDescription: "Приєднуйтесь до 200+ операторів, які побачили сильний ROI з нашими перевіреними стратегіями. Доступне ціноутворення на основі продуктивності.",
      ctaButton: "Отримайте БЕЗКОШТОВНУ Маркетингову Консультацію",
      ctaUrgency: "⏰ Заплануйте вашу консультацію сьогодні"
    },
    socialProof: {
      title: "Довіра Лідерів Індустрії",
      subtitle: "Не вірте нам на слово. Ось що наші клієнти та партнери кажуть про роботу з нами.",
      metrics: {
        experience: {
          label: "Років Досвіду",
          highlight: "Допомагаємо клієнтам рости"
        },
        stories: {
          label: "Історії Успіху",
          highlight: "Сильні результати ROI"
        },
        rating: {
          label: "Рейтинг Клієнтів",
          highlight: "98% коефіцієнт утримання"
        }
      },
      testimonials: [
        {
          quote: "Basher Agency привело наше казино від $100K до $2M місячного доходу всього за 6 місяців.",
          author: "Маркус Чен",
          role: "CEO, LuxBet Casino",
          result: "+1900% Зростання Доходів"
        },
        {
          quote: "Як інфлюенсер, я перейшов від $5K до $85K/місяць з їхніми преміальними брендовими партнерствами.",
          author: "Софія Родрігес",
          role: "Gaming Інфлюенсер, 2.3M підписників",
          result: "+1600% Збільшення Доходів"
        },
        {
          quote: "ROI склав 450% в першому кварталі. Ці хлопці точно знають, що роблять.",
          author: "Девід Томпсон",
          role: "CMO, BetKing",
          result: "+450% ROI"
        }
      ]
    },
    talentCTA: {
      title: "Заробляйте Відмінний Дохід як Наш Партнер",
      subtitle: "200+ інфлюенсерів вже добре заробляють з нашими ексклюзивними iGaming партнерствами. Приєднуйтесь до нашої зростаючої мережі талантів.",
      description: "💰 Доступні конкурентні ставки та бонуси за продуктивність",
      benefits: {
        earnings: {
          title: "Топ Заробітки",
          description: "Конкурентні ставки та бонуси за продуктивність"
        },
        reach: {
          title: "Глобальне Охоплення",
          description: "Працюйте з брендами на 4 континентах"
        },
        brands: {
          title: "Преміальні Бренди",
          description: "Партнерство з провідними операторами індустрії"
        },
        support: {
          title: "Повна Підтримка",
          description: "Виділене управління аккаунтом та ресурси"
        }
      },
      stats: {
        talents: "Активні Таланти",
        reach: "Місячне Охоплення",
        partners: "Брендові Партнери",
        support: "Підтримка"
      },
      regions: {
        title: "Таланти У Всіх Регіонах",
        subtitle: "Елітні таланти готові до партнерства"
      },
      button: "💎 Подати Заявку в Елітну Мережу (2 хв)",
      requirements: "⭐ Мінімум 10K підписників • 🎮 Фокус на Gaming/Casino контенті • 📊 Стабільні показники залученості"
    },
    contact: {
      title: "Готові Збільшити Ваші Результати в 10 Разів?",
      subtitle: "Приєднуйтесь до 50+ лідерів індустрії, які довіряють нам своє зростання. Безкоштовна консультація - гарантовані результати або повернення грошей.",
      available: "Доступно зараз",
      response: "Відповідь протягом 2 годин",
      form: {
        title: "Почати Сьогодні",
        firstName: "Ім'я",
        lastName: "Прізвище",
        email: "Email Адреса",
        phone: "Номер Телефону",
        company: "Компанія/Бренд",
        identification: "Як би ви хотіли бути ідентифіковані?",
        contactMethod: "Бажаний Спосіб Зв'язку",
        message: "Ваше Повідомлення",
        messagePlaceholder: "Розкажіть нам про ваш проект, цілі та як ми можемо допомогти...",
        submitButton: "🚀 Отримати Мою Безкоштовну Стратегічну Сесію",
        privacy: "Ніякого спаму. Ми будемо відправляти вам тільки оновлення про вашу кампанію.",
        options: {
          brand: "Бренд",
          operator: "Оператор Ставок або Казино",
          developer: "Розробник Ігор",
          talent: "Талант/Інфлюенсер",
          other: "Інше"
        },
        methods: {
          email: "Email",
          phone: "Телефон",
          whatsapp: "WhatsApp",
          telegram: "Telegram",
          skype: "Skype"
        }
      },
      quickContact: {
        title: "Швидкий Зв'язок",
        email: "Email",
        phone: "Телефон",
        whatsapp: "WhatsApp"
      },
      offices: {
        title: "Наші Офіси",
        latam: "Штаб-квартира Латинської Америки",
        europe: "Європейський Офіс",
        apac: "Офіс APAC"
      },
      trust: {
        responseTime: "⚡ 2 Години Середній Час Відповіді",
        clients: "50+ Задоволених Клієнтів",
        guarantee: "100% Повернення Грошей",
        awards: "🏆 Нагороджені кампанії • 🔒 Захищено NDA • 📈 Гарантовані результати"
      }
    },
    clientLogos: {
      title: "Довіра найбільших імен в iGaming",
      subtitle: "Працюємо з лідерами індустрії серед операторів казино, платформ ставок та постачальників ігор по всьому світу."
    },
    testimonials: {
      title: "Хто Нам Довіряє",
      subtitle: "Почуйте від наших партнерів про результати, яких ми досягли разом в індустрії iGaming.",
      companies: [
        {
          company: "Pinnacle",
          text: "Basher був близьким партнером протягом цих років в LATAM, завдяки його знанням в eSports ми змогли розробити успішні кампанії разом, забезпечуючи якісні результати."
        },
        {
          company: "BetBoom",
          text: "Ми працюємо з Basher Agency вже цілий рік! Це висококваліфіковані професіонали в стрімерах, амбасадорах, соціальних мережах та спеціальних проектах для кіберспорту. Працювати разом дуже комфортно, тому ми наполегливо рекомендуємо агентство як надійного партнера."
        },
        {
          company: "Leon",
          text: "Робота з Basher Agency більше року в APAC, Австралії та Новій Зеландії стала переломним моментом. Їх експертиза в маркетингу iGaming, партнерстві з інфлюенсерами та генерації високоякісного трафіку принесла видатні результати. Команда проактивна, заснована на даних і справді розуміє ринок. Basher не просто партнер - вони ключова частина нашого успіху."
        },
        {
          company: "22Bet",
          text: "Працювати з basher agency завжди було задоволенням, іноді виникали неприємні ситуації через характер нашої роботи, однак всі ці ситуації були вирішені basher agency з відмінною якістю та швидкістю. Я не можу сказати нічого, окрім як рекомендувати їх всім, хто готовий вести з ними бізнес."
        }
      ],
      guaranteedResults: "Гарантовані Результати",
      trackRecord: "Наш послужний список говорить сам за себе",
      stats: {
        registrations: "Щомісячні Реєстрації",
        ftds: "Щомісячні FTD",
        satisfaction: "Задоволення Клієнтів",
        optimization: "Оптимізація в Реальному Часі"
      },
      features: [
        "Оптимізація в реальному часі для максимізації конверсій та ROI",
        "Щомісячні звіти та щотижневі стратегічні зустрічі",
        "Експертиза в маркетингу, брендингу та соціальних мережах",
        "Локальна підтримка ринку від експертів індустрії"
      ]
    },
    footer: {
      description: "Провідне світове маркетингове агентство для операторів казино/ставок, інфлюенсерів та аудіовізуального контенту.",
      services: {
        title: "Послуги",
        traffic: "Генерація Трафіку",
        benchmarking: "Бенчмаркінг",
        socialMedia: "Соціальні Мережі",
        sponsorships: "Спонсорство",
        mediaBuying: "Медіабаїнг",
        contentProduction: "Виробництво Контенту"
      },
      regions: {
        title: "Регіони",
        latam: "Латинська Америка",
        northAmerica: "Північна Америка",
        europe: "Європа",
        apac: "APAC",
        australia: "Австралія",
        newZealand: "Нова Зеландія"
      },
      contact: {
        title: "Контакти",
        email: "hello@basher.agency",
        phone: "+1 (555) 123-4567",
        location: "Глобальні офіси",
        workWithUs: "Працювати З Нами"
      },
      legal: {
        copyright: "© 2024 Basher Agency. Всі права захищені.",
        privacy: "Політика Конфіденційності",
        terms: "Умови Обслуговування",
        cookies: "Політика Кукі"
      }
    }
  }
};

export default translations;