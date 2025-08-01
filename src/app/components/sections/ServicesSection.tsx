// src/components/sections/ServicesSection.tsx
'use client';

// --- React e Frameworks ---
import {
    Heading,
    Text,
    VStack,
    Icon,
    Flex,
    Box,
    // A MUDANÇA: Importando o Collapsible
    Collapsible
} from "@chakra-ui/react";
import { motion, Variants } from 'framer-motion';

// --- Dados Locais ---
import { siteData } from '@/data/siteData';
import { servicesData } from '@/data/servicesData';
import { PiCaretCircleDown } from "react-icons/pi";

// ============================================================================
//   VARIANTES DE ANIMAÇÃO (Framer Motion)
// ============================================================================
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

// ============================================================================
//   COMPONENTE PRINCIPAL: ServicesSection
// ============================================================================
export function ServicesSection() {
    const MotionVStack = motion(VStack);
    const MotionBox = motion(Box);
    const MotionFlex = motion(Flex);
    const MotionHeading = motion(Heading);

    return (
        <MotionFlex
            as="section"
            id="atuacao" // ID para a navegação da Navbar
            w="100%"
            py={{ base: 16, md: 24 }}
            px={{ base: 4, md: 8 }}
            bgGradient="to-b" gradientFrom="white" gradientTo="fer.beigeLighter"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            alignItems={'center'}
            justifyContent={'center'}
            flexDir={{base:"column", md:"row"}}
            gap={{ base: 8, md: 2 }}
        >
            <MotionFlex flexDir='column' alignItems='center' justifyContent='center' gap={8} variants={itemVariants} mx='auto'>
                {/* Título da Seção */}
                <MotionHeading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl' }}
                    fontWeight="bold"
                    color="fer.lipstickLighter"
                    textAlign="center"
                    variants={itemVariants}
                >
                    {siteData.services.title}
                </MotionHeading>
            </MotionFlex>

            <Flex h="sm" w={1} bg="fer.beigeLighter" borderRadius={'100%'} display={{ base: 'none', md: 'flex' }} />

            {/* A MUDANÇA: Usando uma lista de Collapsibles */}
            <MotionVStack
                w="100%"
                maxW="xl" // Limita a largura para melhor legibilidade
                mx="auto"
                variants={containerVariants} // Aplica o stagger nos filhos
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                align="stretch"
                gap={4}
                px={{ base: 8, md:0 }}
                pl={{base:0, md: 4}}
                py={4}
            >
                {servicesData.map((service) => (
                    <MotionBox
                        key={service.value}
                        variants={itemVariants}
                        borderWidth="1px"
                        borderColor="gray.200"
                        borderRadius="sm"
                        bg="white"
                        overflow="hidden"

                    >
                        <Collapsible.Root
                            borderLeft={'8px solid'}
                            borderLeftColor={'fer.lipstickLighter'}
                        >
                            <Collapsible.Trigger width="100%" py={4} px={6} cursor={'pointer'} _hover={{ bg: 'gray.100', transition: 'background-color 0.5s' }}>
                                <Flex w='100%' alignItems="center" gap={4}>
                                    <Icon as={service.icon} size={'xl'} color="fer.lipstick" />
                                    <Text fontWeight="medium" flex="1" textAlign="center" color={'gray.600'}>{service.title}</Text>
                                    <Icon as={PiCaretCircleDown} size={'xl'} color="fer.beige" _hover={{ color: 'fer.lipstick', transition:'color 0.5s' }} />
                                </Flex>
                            </Collapsible.Trigger>
                            <Collapsible.Content>
                                <Flex pb={5} px={6}>
                                    <Text color="gray.600" p={4}>
                                        {service.content}
                                    </Text>
                                </Flex>
                            </Collapsible.Content>
                        </Collapsible.Root>
                    </MotionBox>
                ))}
            </MotionVStack>
        </MotionFlex>
    );
}
