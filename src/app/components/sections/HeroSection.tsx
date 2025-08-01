// src/components/sections/HeroSection.tsx
'use client';

// --- React e Frameworks ---
import {
    Flex,
    Heading,
    Text,
    Button,
    Icon,
    HStack,
    Link,
} from "@chakra-ui/react";
import { motion, Variants } from 'framer-motion';

// --- Ícones ---
import { PiWhatsappLogo } from "react-icons/pi";

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
            staggerChildren: 0.2, // Anima os filhos em sequência
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
//   COMPONENTE PRINCIPAL: HeroSection
// ============================================================================
export function HeroSection() {
    const MotionFlex = motion(Flex);
    const MotionHeading = motion(Heading);
    const MotionText = motion(Text);
    const MotionButton = motion(Button);

    return (
        <>

            {/* 2. Camada de Overlay com o Efeito de Blur Gradiente */}
            <Flex
                as="section"
                w="100%"
                minH={{ base: '90vh', md: '85vh' }} // Altura mínima para ocupar a maior parte da tela
                py={{ base: 2, md: 20 }}
                px={{ base: 4, md: 8 }}
                alignItems={{ base: "stretch", md: "center" }}
                justify={{ base: "space-between", md: "center" }}
            >

                <Flex
                    zIndex={10}
                    w="100%"
                    maxW="container.lg"
                    direction={{ base: 'column-reverse', md: 'row' }}
                    align="center"
                    gap={{ base: 10, md: 12 }}
                    py={{ base: 10, md: 0 }}
                    h='stretch'
                >
                    {/* Lado Esquerdo: Textos e Call-to-Action */}
                    <MotionFlex
                        flex={1} // Ocupa metade do espaço
                        flexDir={'column'}
                        align={{ base: 'center', md: 'flex-start' }}
                        justifyContent={{ base: "end", md: "center" }}
                        textAlign={{ base: 'center', md: 'left' }}
                        gap={6}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        h='stretch'
                    >
                        <Flex flexDir={'column'} gap={4}>
                            <MotionHeading
                                as="h1"
                                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                                fontWeight="bold"
                                color="gray.50"
                                lineHeight="1.2"
                                variants={itemVariants}
                                textShadow={'2px 2px 4px rgba(0, 0, 0, 0.08)'}
                            >
                                {siteData.hero.title}
                            </MotionHeading>
                            <MotionText
                                fontSize={{ base: 'md', lg: 'lg' }}
                                color="gray.50"
                                variants={itemVariants}
                                textShadow={'2px 2px 4px rgba(0, 0, 0, 0.2)'}
                            >
                                {siteData.hero.subtitle}
                            </MotionText>
                        </Flex>
                        <MotionButton
                            bgColor='fer.lipstick'
                            size="lg"
                            py={7}
                            px={8}
                            variants={itemVariants}
                        >
                            <Link
                                href={siteData.contact.whatsappLink}
                                target="_blank"
                                textDecoration="none"
                            >
                                <HStack gap={2}>
                                    <Icon as={PiWhatsappLogo} boxSize={5} />
                                    <Text color='white'>{siteData.hero.ctaButton}</Text>
                                </HStack>
                            </Link>
                        </MotionButton>
                    </MotionFlex>

                    {/* Lado Direito: Imagem */}
                    <Flex
                        flex={1} // Ocupa a outra metade do espaço
                        justify="center"
                        align="center"
                        display={{ base: 'none', md: 'flex' }} // Esconde a imagem em telemóveis
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}
