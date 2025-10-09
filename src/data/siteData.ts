

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
    prefaxTitle: string;
    prefax: string;
    title: string;
    secondTitle: string;
    mainText: string;
    secondMainText: string;
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
    email: "drafernandamilani@gmail.com", // Sugestão de e-mail
    instagramUrl: "https://www.instagram.com/drafernandamilani/", // Sugestão de URL
  },
  hero: {
    title: "Cuidado ginecológico com escuta, respeito e ciência.",
    subtitle: "Atendimentos realizados com responsabilidade, sigilo e respeito à autonomia da paciente.",
    ctaButton: "Agende sua Consulta",
  },
  about: {
    prefaxTitle:'Boas vindas ao espaço da Dra. Fernanda Milani',
    prefax: `A saúde da mulher merece atenção integral, acolhimento e informação de qualidade. No consultório da Dra. Fernanda Milani, cada paciente é recebido com empatia e profissionalismo, em um ambiente seguro para falar sobre seu corpo, suas dúvidas e seus ciclos. ${'\n\n'}
      Com formação sólida e atuação ética, Dra.Fernanda oferece acompanhamento ginecológico baseado em evidências científicas, respeitando as singularidades de cada fase da vida — da adolescência à menopausa. ${'\n\n'}
      Aqui, o foco é promover saúde, prevenir doenças e apoiar decisões conscientes sobre o bem- estar feminino.`,
    title: "Sobre Mim",
    mainText: "Médica formada pela PUC-SP, com residência em Ginecologia e Obstetrícia. Especialista em cirurgia ginecológica, ginecologia endócrina e saúde da mulher. Atuação em hospitais de referência como Beneficência Portuguesa e Hospital das Clínicas da FMUSP e, no momento, cursando pós graduação de ginecologia endócrina pela CETRUS.",
    secondTitle: "Filosofia de Atendimento",
    secondMainText: "Cuidado, acolhimento e excelência em saúde da mulher. Atendimento personalizado, baseado em evidências científicas, com foco no bem-estar físico e emocional da paciente.",
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
    image: '/about/about.png', // Imagem de exemplo, substituir pelo caminho real
  },
  services: {
    title: "Áreas de Atuação",
    areas: [
      "Cirurgia",
      "Ginecologia Geral",
      "Endometriose",
      "Colocação de DIU",
      "Tratamento da Menopausa",
      "Saúde Hormonal Feminina",
    ],
  },
  footer: {
    copyright: `© ${new Date().getFullYear()
      } Dra.Fernanda Milani.Todos os direitos reservados.`,
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
