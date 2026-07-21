// src/components/sections/EspacoSection.tsx
'use client';

// --- React e Frameworks ---
import {
    Flex,
    Heading,
    Text,
    VStack,
    Box,
    Image,
    SimpleGrid,
    Button,
    Link,
    Icon,
    HStack,
    AspectRatio,
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
            staggerChildren: 0.15,
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
//   DADOS DAS FOTOS DO ESPAÇO
// ============================================================================
// As imagens devem ser salvas em /public/lume/ com estes nomes.
const galleryImages = [
    { src: '/lume/recepcao.jpg', caption: 'Recepção' },
    { src: '/lume/consultorio.jpg', caption: 'Consultório' },
    { src: '/lume/lounge.jpg', caption: 'Lounge de espera' },
];

// ============================================================================
//   COMPONENTE PRINCIPAL: EspacoSection
// ============================================================================
export function EspacoSection() {
    const MotionVStack = motion(VStack);
    const MotionHeading = motion(Heading);
    const MotionText = motion(Text);
    const MotionBox = motion(Box);

    return (
        <MotionVStack
            as="section"
            id="espaco" // ID para navegação
            w="100%"
            py={{ base: 16, md: 24 }}
            px={{ base: 4, md: 8 }}
            bgGradient="to-b" gradientFrom="fer.beigeLighter" gradientTo="white"
            gap={{ base: 10, md: 16 }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
        >
            {/* Cabeçalho da Seção */}
            <MotionVStack textAlign="center" gap={3} maxW="3xl" variants={itemVariants}>
                <Text
                    fontSize={{ base: 'xs', md: 'sm' }}
                    fontWeight="bold"
                    letterSpacing="0.25em"
                    textTransform="uppercase"
                    color="fer.brown"
                >
                    LUMÊ Aesthetic &amp; Health
                </Text>
                <MotionHeading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl' }}
                    fontWeight="bold"
                    color="fer.lipstickLighter"
                    variants={itemVariants}
                >
                    Conheça o Espaço
                </MotionHeading>
                <MotionText
                    fontSize={{ base: 'md', md: 'lg' }}
                    color="gray.600"
                    lineHeight="tall"
                    variants={itemVariants}
                >
                    Um ambiente acolhedor, moderno e reservado, pensado para que cada
                    paciente se sinta segura e confortável em todas as etapas do
                    atendimento — do primeiro contato à consulta.
                </MotionText>
            </MotionVStack>

            {/* Imagem em destaque (fachada / parede LUMÊ) */}
            <MotionBox
                w="100%"
                maxW="1920px"
                variants={itemVariants}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
            >
                <AspectRatio ratio={{ base: 4 / 3, md: 21 / 9 }}>
                    <Image
                        src="/lume/fachada.jpg"
                        alt="Parede de identidade da LUMÊ Aesthetic & Health"
                        objectFit="cover"
                        objectPosition="center top"
                        w="100%"
                        h="100%"
                    />
                </AspectRatio>
            </MotionBox>

            {/* Grade com os demais ambientes */}
            <SimpleGrid
                w="100%"
                maxW="1920px"
                columns={{ base: 1, md: 3 }}
                gap={{ base: 6, md: 8 }}
            >
                {galleryImages.map((img) => (
                    <MotionBox
                        key={img.src}
                        variants={itemVariants}
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="md"
                        bg="white"
                        position="relative"
                        _hover={{ '& img': { transform: 'scale(1.05)' } }}
                    >
                        <AspectRatio ratio={3 / 4}>
                            <Image
                                src={img.src}
                                alt={img.caption}
                                objectFit="cover"
                                w="100%"
                                h="100%"
                                transition="transform 0.5s ease"
                            />
                        </AspectRatio>
                        <Box
                            position="absolute"
                            bottom={0}
                            left={0}
                            right={0}
                            px={5}
                            py={4}
                            bgGradient="to-t"
                            gradientFrom="blackAlpha.700"
                            gradientTo="transparent"
                        >
                            <Text color="white" fontWeight="bold" fontSize="lg">
                                {img.caption}
                            </Text>
                        </Box>
                    </MotionBox>
                ))}
            </SimpleGrid>

            {/* Chamada para ação */}
            <MotionBox variants={itemVariants}>
                <Button asChild bgColor="fer.lipstick" size="lg" py={7} px={8}>
                    <Link
                        href={siteData.contact.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        textDecoration="none"
                    >
                        <HStack gap={2}>
                            <Icon as={PiWhatsappLogo} boxSize={5} color="white" />
                            <Text color="white">Venha nos visitar — {siteData.hero.ctaButton}</Text>
                        </HStack>
                    </Link>
                </Button>
            </MotionBox>
        </MotionVStack>
    );
}
