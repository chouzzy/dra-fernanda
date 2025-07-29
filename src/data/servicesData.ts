// src/data/servicesData.ts
'use client';

import { IconType } from "react-icons";
import { PiStethoscope, PiScissors, PiHandHeart, PiChartLineUp, PiFlower, PiBaby } from "react-icons/pi";

export interface ServiceItem {
    value: string;
    icon: IconType;
    title: string;
    content: string;
}

export const servicesData: ServiceItem[] = [
    {
        value: "ginecologia",
        icon: PiStethoscope,
        title: "Ginecologia Geral",
        content: "Acompanhamento completo da saúde feminina em todas as fases da vida, desde a adolescência até a menopausa. Realizamos exames preventivos, diagnóstico e tratamento de condições ginecológicas, sempre com foco no cuidado integral e na qualidade de vida."
    },
    {
        value: "cirurgia",
        icon: PiScissors,
        title: "Cirurgia Ginecológica",
        content: "Realização de procedimentos cirúrgicos minimamente invasivos (laparoscopia e histeroscopia) e cirurgias convencionais para o tratamento de diversas condições, como miomas, cistos ovarianos e endometriose, visando uma recuperação mais rápida e segura."
    },
    {
        value: "diu",
        icon: PiHandHeart,
        title: "Colocação de DIU",
        content: "Oferecemos aconselhamento e colocação de Dispositivos Intrauterinos (DIU), hormonais e não hormonais. Um método contraceptivo seguro, eficaz e de longa duração, realizado com todo o cuidado e conforto no consultório."
    },
    {
        value: "endocrina",
        icon: PiChartLineUp,
        title: "Ginecologia Endócrina",
        content: "Diagnóstico e tratamento de distúrbios hormonais que afetam a saúde da mulher, como Síndrome dos Ovários Policísticos (SOP), irregularidades menstruais e questões relacionadas à menopausa, buscando o reequilíbrio hormonal e o bem-estar."
    },
    {
        value: "endometriose",
        icon: PiFlower,
        title: "Endometriose",
        content: "Abordagem especializada e multidisciplinar para o diagnóstico e tratamento da endometriose. Oferecemos desde o manejo clínico da dor até tratamentos cirúrgicos avançados, com um plano de cuidado personalizado para cada paciente."
    },
    {
        value: "obstetricia",
        icon: PiBaby,
        title: "Obstetrícia",
        content: "Acompanhamento pré-natal completo, com foco em uma gestação saudável e um parto seguro e humanizado. Cuidamos da saúde da mãe e do bebé com dedicação e carinho em todas as etapas desta jornada especial."
    }
];
