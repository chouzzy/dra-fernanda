// src/data/servicesData.ts
'use client';

import { IconType } from "react-icons";
import { PiStethoscope, PiScissors, PiHandHeart, PiChartLineUp, PiFlower, PiBaby, PiFirstAid, PiFirstAidKit } from "react-icons/pi";

export interface ServiceItem {
    value: string;
    icon: IconType;
    title: string;
    content: string;
}

export const servicesData: ServiceItem[] = [
    {
        value: "cirurgia",
        icon: PiFirstAid,
        title: "Cirurgia",
        content: "Realização de procedimentos cirúrgicos minimamente invasivos (laparoscopia e histeroscopia) e cirurgias convencionais para o tratamento de diversas condições, como miomas, cistos ovarianos e endometriose, visando uma recuperação mais rápida e segura."
    },
    {
        value: "endocrina",
        icon: PiStethoscope,
        title: "Ginecologia Endócrina",
        content: "Diagnóstico e tratamento de distúrbios hormonais que afetam a saúde da mulher, como Síndrome dos Ovários Policísticos (SOP), irregularidades menstruais e questões relacionadas à menopausa, buscando o reequilíbrio hormonal e o bem-estar."
    },
    {
        value: "endometriose",
        icon: PiFirstAidKit,
        title: "Endometriose",
        content: "Abordagem especializada e multidisciplinar para o diagnóstico e tratamento da endometriose. Oferecemos desde o manejo clínico da dor até tratamentos cirúrgicos avançados, com um plano de cuidado personalizado para cada paciente."
    },
    {
        value: "diu",
        icon: PiHandHeart,
        title: "Colocação de DIU",
        content: "Oferecemos aconselhamento e colocação de Dispositivos Intrauterinos (DIU), hormonais e não hormonais. Um método contraceptivo seguro, eficaz e de longa duração, realizado com todo o cuidado e conforto no consultório."
    },
    {
        value: "menopausa",
        icon: PiStethoscope,
        title: "Tratamento da Menopausa",
        content: "Oferecemos uma abordagem abrangente para o tratamento da menopausa, com o objetivo de aliviar os sintomas e melhorar a qualidade de vida da mulher nessa fase de transição. Inclui terapia hormonal, orientações sobre estilo de vida e acompanhamento individualizado."
    },
    {
        value: "saude-hormonal",
        icon: PiFlower,
        title: "Saúde Hormonal Feminina",
        content: "Avaliação completa da saúde hormonal feminina, desde a puberdade até a menopausa. Identificamos e tratamos desequilíbrios hormonais que podem afetar o bem-estar, fertilidade e qualidade de vida da mulher."
    }
];
