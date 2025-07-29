// src/components/sections/AboutSection.tsx
'use client';

// --- React e Frameworks ---
import {
    Flex,
    Heading,
    Text,
    VStack,
    Box,
    SimpleGrid,
    Icon,
} from "@chakra-ui/react";
import { motion, Variants } from 'framer-motion';

// --- Ícones ---
import { PiStethoscope } from "react-icons/pi";

// --- Dados Locais ---
import { siteData } from '@/data/siteData';

// ============================================================================
//   VARIANTES DE ANIMAÇÃO (Framer Motion)
// ============================================================================
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

// ============================================================================
//   COMPONENTE PRINCIPAL: AboutSection
// ============================================================================
export function AboutSection() {
    const MotionFlex = motion(Flex);
    const MotionVStack = motion(VStack);

    return (
        <MotionFlex
            as="section"
            id="sobre" // ID para a navegação da Navbar
            w="100%"
            py={{ base: 16, md: 24 }}
            px={{ base: 4, md: 8 }}
            justify="center"
            bg="white" // Fundo branco para um visual limpo
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <Flex
                w="100%"
                maxW="container.lg"
                direction={{ base: 'column', lg: 'row' }}
                gap={{ base: 12, lg: 16 }}
                align="start"
            >
                {/* Lado Esquerdo: Texto Principal */}
                <MotionVStack
                    flex={1}
                    align={{ base: 'center', lg: 'flex-start' }}
                    textAlign={{ base: 'center', lg: 'left' }}
                    gap={4}
                    variants={itemVariants}
                >
                    <Heading
                        as="h2"
                        fontSize={{ base: '2xl', md: '4xl' }}
                        fontWeight="bold"
                        color="gray.800"
                    >
                        {siteData.about.title}
                    </Heading>
                    <Text
                        fontSize={{ base: 'md', lg: 'lg' }}
                        color="gray.600"
                        lineHeight="tall"
                    >
                        {siteData.about.mainText}
                    </Text>
                </MotionVStack>

                {/* Lado Direito: Experiência Profissional */}
                <MotionVStack
                    flex={1}
                    align="stretch"
                    gap={6}
                    w="100%"
                    variants={itemVariants}
                >
                    <Heading
                        as="h3"
                        size="lg"
                        fontWeight="semibold"
                        color="gray.700"
                        textAlign={{ base: 'center', lg: 'left' }}
                    >
                        {siteData.about.experienceTitle}
                    </Heading>
                    <SimpleGrid columns={1} gap={4}>
                        {siteData.about.experience.map((exp, index) => (
                            <Flex
                                key={index}
                                p={5}
                                bg="gray.50"
                                borderRadius="xl"
                                border="1px solid"
                                borderColor="gray.200"
                                gap={4}
                                align="center"
                            >
                                <Icon as={PiStethoscope} boxSize={8} color="pink.500" />
                                <Box textAlign="left">
                                    <Text fontWeight="bold" color="gray.800">{exp.title}</Text>
                                    <Text fontSize="sm" color="gray.600">{exp.institution}</Text>
                                    <Text fontSize="xs" color="gray.500" mt={1}>{exp.description}</Text>
                                </Box>
                            </Flex>
                        ))}
                    </SimpleGrid>
                </MotionVStack>
            </Flex>
        </MotionFlex>
    );
}
