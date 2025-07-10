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
    title: string;
    subtitle: string;
    description: string;
    getStarted: string;
    learnMore: string;
  };
  services: {
    title: string;
    subtitle: string;
    contentCreation: {
      title: string;
      description: string;
    };
    socialMedia: {
      title: string;
      description: string;
    };
    analytics: {
      title: string;
      description: string;
    };
  };
  footer: {
    company: string;
    services: string;
    support: string;
    legal: string;
    allRightsReserved: string;
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
      title: "Elevate Your Gaming Content",
      subtitle: "Professional Gaming Content Creation & Talent Management",
      description: "Transform your gaming brand with our expert content creators, influencers, and comprehensive digital marketing solutions.",
      getStarted: "Get Started",
      learnMore: "Learn More"
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive gaming content solutions",
      contentCreation: {
        title: "Content Creation",
        description: "Professional gaming content tailored to your audience"
      },
      socialMedia: {
        title: "Social Media Management",
        description: "Complete social media strategy and management"
      },
      analytics: {
        title: "Analytics & Insights",
        description: "Data-driven insights to optimize your content"
      }
    },
    footer: {
      company: "Company",
      services: "Services",
      support: "Support",
      legal: "Legal",
      allRightsReserved: "All rights reserved"
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
      title: "Eleva tu Contenido Gaming",
      subtitle: "Creación Profesional de Contenido Gaming y Gestión de Talentos",
      description: "Transforma tu marca gaming con nuestros creadores de contenido expertos, influencers y soluciones integrales de marketing digital.",
      getStarted: "Comenzar",
      learnMore: "Saber Más"
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones integrales de contenido gaming",
      contentCreation: {
        title: "Creación de Contenido",
        description: "Contenido gaming profesional adaptado a tu audiencia"
      },
      socialMedia: {
        title: "Gestión de Redes Sociales",
        description: "Estrategia y gestión completa de redes sociales"
      },
      analytics: {
        title: "Análisis e Insights",
        description: "Insights basados en datos para optimizar tu contenido"
      }
    },
    footer: {
      company: "Empresa",
      services: "Servicios",
      support: "Soporte",
      legal: "Legal",
      allRightsReserved: "Todos los derechos reservados"
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
      title: "Поднимите свой Gaming Контент",
      subtitle: "Профессиональное создание Gaming контента и управление талантами",
      description: "Трансформируйте свой gaming бренд с нашими экспертными создателями контента, инфлюенсерами и комплексными решениями цифрового маркетинга.",
      getStarted: "Начать",
      learnMore: "Узнать больше"
    },
    services: {
      title: "Наши Услуги",
      subtitle: "Комплексные решения gaming контента",
      contentCreation: {
        title: "Создание Контента",
        description: "Профессиональный gaming контент, адаптированный для вашей аудитории"
      },
      socialMedia: {
        title: "Управление Соцсетями",
        description: "Полная стратегия и управление социальными сетями"
      },
      analytics: {
        title: "Аналитика и Инсайты",
        description: "Инсайты на основе данных для оптимизации вашего контента"
      }
    },
    footer: {
      company: "Компания",
      services: "Услуги",
      support: "Поддержка",
      legal: "Правовая информация",
      allRightsReserved: "Все права защищены"
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
      title: "Підніміть свій Gaming Контент",
      subtitle: "Професійне створення Gaming контенту та управління талантами",
      description: "Трансформуйте свій gaming бренд з нашими експертними творцями контенту, інфлюенсерами та комплексними рішеннями цифрового маркетингу.",
      getStarted: "Почати",
      learnMore: "Дізнатися більше"
    },
    services: {
      title: "Наші Послуги",
      subtitle: "Комплексні рішення gaming контенту",
      contentCreation: {
        title: "Створення Контенту",
        description: "Професійний gaming контент, адаптований для вашої аудиторії"
      },
      socialMedia: {
        title: "Управління Соцмережами",
        description: "Повна стратегія та управління соціальними мережами"
      },
      analytics: {
        title: "Аналітика та Інсайти",
        description: "Інсайти на основі даних для оптимізації вашого контенту"
      }
    },
    footer: {
      company: "Компанія",
      services: "Послуги",
      support: "Підтримка",
      legal: "Правова інформація",
      allRightsReserved: "Всі права захищені"
    }
  }
};

export default translations;