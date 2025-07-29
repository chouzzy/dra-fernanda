// src/components/sections/HeroSection.tsx
'use client';

// --- React e Frameworks ---
import {
    Flex,
    Heading,
    Text,
    Button,
    Icon,
    VStack,
    Image,
    HStack,
    Link
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
    const MotionVStack = motion(VStack);
    const MotionHeading = motion(Heading);
    const MotionText = motion(Text);
    const MotionButton = motion(Button);

    return (
        <Flex
            as="section"
            w="100%"
            minH={{ base: 'auto', md: '85vh' }} // Altura mínima para ocupar a maior parte da tela
            py={{ base: 16, md: 20 }}
            px={{ base: 4, md: 8 }}
            align="center"
            justify="center"
            bg="gray.50" // Um fundo claro e suave
        >
            <Flex
                w="100%"
                maxW="container.lg"
                direction={{ base: 'column', md: 'row' }}
                align="center"
                gap={{ base: 10, md: 12 }}
            >
                {/* Lado Esquerdo: Textos e Call-to-Action */}
                <MotionVStack
                    flex={1} // Ocupa metade do espaço
                    align={{ base: 'center', md: 'flex-start' }}
                    textAlign={{ base: 'center', md: 'left' }}
                    gap={6}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <MotionHeading
                        as="h1"
                        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                        fontWeight="bold"
                        color="gray.800"
                        lineHeight="1.2"
                        variants={itemVariants}
                    >
                        {siteData.hero.title}
                    </MotionHeading>
                    <MotionText
                        fontSize={{ base: 'md', lg: 'lg' }}
                        color="gray.600"
                        maxW="lg"
                        variants={itemVariants}
                    >
                        {siteData.hero.subtitle}
                    </MotionText>
                    <MotionButton
                        colorScheme="pink"
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
                                <Text>{siteData.hero.ctaButton}</Text>
                            </HStack>
                        </Link>
                    </MotionButton>
                </MotionVStack>

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
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
                            alt="Dra. Fernanda Fenólio em consulta"
                            borderRadius="2xl"
                            boxShadow="2xl"
                            objectFit="cover"
                            maxW="450px"
                        />
                    </motion.div>
                </Flex>
            </Flex>
        </Flex>
    );
}
