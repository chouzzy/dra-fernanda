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
    Image,
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
            maxW='1920px' mx='auto'
            py={{ base: 16, md: 24 }}
            px={{ base: 4, md: 8 }}
            justify="center"
            bg="white" // Fundo branco para um visual limpo
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            direction={{ base: 'column-reverse', lg: 'column' }}
            gap={8}
        >

            {/* <Flex flexDir={'column'} gap={2} w='100%'>
                <Heading
                    as="h2"
                    fontSize={{ base: '4xl', md: '4xl' }}
                    fontWeight="bold"
                    color="fer.lipstickLighter"
                >
                    {siteData.about.prefaxTitle}
                </Heading>
                <Text
                    fontSize={{ base: 'md', lg: 'lg' }}
                    color="gray.600"
                    lineHeight="tall"
                >
                    {siteData.about.prefax}
                </Text>
            </Flex> */}

            <Flex gap={{ base: 12, lg: 16 }} flexDir={{ base: 'column', lg: 'row' }} alignItems={'center'} justifyContent={'center'}>

                <Flex
                    w="100%"
                    maxW="3xl"
                    direction={{ base: 'column', lg: 'row' }}
                    gap={{ base: 12, lg: 16 }}
                    align={{ base: 'start', md: "center" }}
                >

                    <Flex direction={'column'} gap={{ base: 8, lg: 12 }}>
                        {/* Lado Esquerdo: Texto Principal */}
                        <MotionVStack
                            flex={1}
                            align={{ base: 'start', lg: 'flex-start' }}
                            textAlign={{ base: 'left', lg: 'left' }}
                            gap={8}
                            variants={itemVariants}
                        >

                            <Flex flexDir={'column'} gap={2} w='100%'>
                                <Heading
                                    as="h2"
                                    fontSize={{ base: 'xl', md: '3xl' }}
                                    fontWeight="bold"
                                    color="fer.lipstickLighter"
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
                            </Flex>

                            <Flex flexDir={'column'} gap={2} w='100%'>
                                <Heading
                                    as="h3"
                                    fontSize={{ base: 'xl', md: '3xl' }}
                                    fontWeight="bold"
                                    color="fer.lipstickLighter"
                                >
                                    {siteData.about.secondTitle}
                                </Heading>
                                <Text
                                    fontSize={{ base: 'md', lg: 'lg' }}
                                    color="gray.600"
                                    lineHeight="tall"
                                >
                                    {siteData.about.secondMainText}
                                </Text>
                            </Flex>
                        </MotionVStack>
                        <Flex w="100%" h={1} bg="gray.200" />
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
                                fontSize={{ base: '2xl', md: '2xl' }}
                                fontWeight="bold"
                                color="fer.lipstickLighter"
                                textAlign={{ base: 'center', lg: 'left' }}
                            >
                                {siteData.about.experienceTitle}
                            </Heading>
                            <SimpleGrid columns={1} gap={4}>
                                {siteData.about.experience.map((exp, index) => (
                                    <Flex
                                        key={index}
                                        p={5}
                                        bg="transparent"
                                        borderRadius="sm"
                                        border="1px solid"
                                        borderLeft="4px solid"
                                        borderColor="gray.200"
                                        borderLeftColor="fer.lipstickLighter"
                                        gap={4}
                                        align="center"
                                    >
                                        <Icon as={PiStethoscope} boxSize={8} color="fer.lipstickLighter" />
                                        <Box textAlign="left">
                                            <Text fontWeight="bold" color="gray.500">{exp.title}</Text>
                                            <Text fontSize="sm" color="gray.600">{exp.institution}</Text>
                                            <Text fontSize="xs" color="gray.600" mt={1}>{exp.description}</Text>
                                        </Box>
                                    </Flex>
                                ))}
                            </SimpleGrid>
                        </MotionVStack>
                    </Flex>
                </Flex>

                <Flex alignItems={'flex-start'} justifyContent='center' >
                    <Flex flexDir={'column'} alignItems={'center'} gap={4}>
                        <Image src={siteData.about.image} alt="Sobre" borderRadius="xs" boxSize={{ base: 'xs', md: 'xl' }} objectFit={'cover'}/>
                        <Flex flexDir={'column'} alignItems={'center'} gap={1} textAlign={'center'}>
                            <Text fontSize={'md'} fontWeight={'bold'} color={'fer.lipstickLighter'}>Dra Fernanda Milani</Text>
                            <Text fontSize={'sm'} color={'gray.600'}>Médica Ginecologista e Obstetra</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </MotionFlex>
    );
}
