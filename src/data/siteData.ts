

// src/data/siteData.ts

import { IconType } from "react-icons";
import { PiStudent, PiCertificate, PiGraduationCap, PiStethoscope } from "react-icons/pi";

// --- TIPAGEM DOS DADOS ---
// Define a estrutura dos nossos dados para garantir consistência.

export interface Service {
  title: string;
  description: string;
}

export interface Experience {
  period: string;
  title: string;
  institution: string;
  description?: string;
}

export interface SiteData {
  doctorName: string;
  specialty: string;
  rqe: string;
  contact: {
    whatsapp: string;
    whatsappLink: string;
    email: string;
    instagramUrl: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaButton: string;
  };
  about: {
    title: string;
    mainText: string;
    experienceTitle: string;
    experience: Experience[];
    image: string; // Caminho para a imagem de "Sobre"
  };
  services: {
    title: string;
    areas: string[];
  };
  footer: {
    copyright: string;
  };
}

// ============================================================================
//   CONTEÚDO PRINCIPAL DO SITE
// ============================================================================
// Todo o texto do site está centralizado aqui para fácil edição.

export const siteData: SiteData = {
  doctorName: "Dra. Fernanda Milani",
  specialty: "Ginecologista e Obstetra",
  rqe: "RQE: 126405",
  contact: {
    whatsapp: "+55 (11) 98982-3404", // Substituir pelo número real
    whatsappLink: "https://wa.me/5511989823404", // Substituir pelo link real
    email: "contato@drafernanda.com.br", // Sugestão de e-mail
    instagramUrl: "https://www.instagram.com/drafernandamilani/", // Sugestão de URL
  },
  hero: {
    title: "Cuidado, acolhimento e excelência em saúde da mulher.",
    subtitle: "Atendimento ginecológico personalizado e atualizado, focado no seu bem-estar e qualidade de vida.",
    ctaButton: "Agende sua Consulta",
  },
  about: {
    title: "Quem sou eu?",
    mainText: "Médica ginecologista formada pela PUC-SP, com residência médica na mesma instituição e especialização em cirurgia ginecológica endócrina. Meu objetivo é oferecer um atendimento acolhedor e de qualidade para as mulheres, sempre trazendo as técnicas e estudos mais recentes para um cuidado personalizado, eficaz e resolutivo.",
    experienceTitle: "Experiência Profissional",
    experience: [
      {
        period: "Atual",
        title: "Médica Voluntária da FMUSP",
        institution: "Hospital das Clínicas",
        description: "Atuação no setor de endometriose, auxiliando residentes no atendimento ambulatorial e cirúrgico de pacientes."
      },
      {
        period: "Atual",
        title: "Retaguarda de Ginecologia",
        institution: "Hospital Beneficência Portuguesa de São Paulo",
        description: "Parte da equipe de ginecologia, oferecendo suporte especializado e realizando procedimentos cirúrgicos."
      },
    ],
    image:'/about/about.png', // Imagem de exemplo, substituir pelo caminho real
  },
  services: {
    title: "Áreas de Atuação",
    areas: [
      "Ginecologia Geral",
      "Cirurgia Ginecológica",
      "Colocação de DIU",
      "Ginecologia Endócrina",
      "Endometriose",
      "Obstetrícia",
    ],
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Dra. Fernanda Fenólio. Todos os direitos reservados.`,
  },
};

export interface AcademicFormationItem {
    period: string;
    title: string;
    institution: string;
    icon: IconType;
}

export const academicFormation: AcademicFormationItem[] = [
    {
        period: "Em andamento",
        title: "Pós-Graduação em Ginecologia Endócrina",
        institution: "CETRUS",
        icon: PiStudent,
    },
    {
        period: "2024",
        title: "Título de Especialista em Ginecologia e Obstetrícia (TEGO)",
        institution: "FEBRASGO",
        icon: PiCertificate,
    },
    {
        period: "2024 - 2025",
        title: "Médica Voluntária da FMUSP",
        institution: "Hospital das Clínicas - Setor de Endometriose",
        icon: PiStethoscope,
    },
    {
        period: "2021 - 2024",
        title: "Residência Médica em Ginecologia e Obstetrícia",
        institution: "Pontifícia Universidade Católica de São Paulo (PUC-SP)",
        icon: PiStethoscope,
    },
    {
        period: "2015 - 2020",
        title: "Graduação em Medicina",
        institution: "Pontifícia Universidade Católica de São Paulo (PUC-SP)",
        icon: PiGraduationCap,
    },
]
