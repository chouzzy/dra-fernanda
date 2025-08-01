// src/components/sections/FormationSection.tsx
'use client';

// --- React e Frameworks ---
import {
    Flex,
    Heading,
    Text,
    VStack,
    Box,
    // A MUDANÇA: Importando o SimpleGrid e Icon
    SimpleGrid,
    Icon,
} from "@chakra-ui/react";
import { motion, Variants } from 'framer-motion';


// --- Dados Locais ---
import { academicFormation } from '@/data/siteData';

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
//   COMPONENTE PRINCIPAL: FormationSection
// ============================================================================
export function FormationSection() {
    const MotionVStack = motion(VStack);
    const MotionHeading = motion(Heading);
    const MotionBox = motion(Box);

    return (
        <MotionVStack
            as="section"
            id="formacao" // ID para navegação futura, se necessário
            w="100%"
            py={{ base: 4, md: 8 }}
            px={{ base: 8, md: 8 }}
            bg="fer.beigeLighter" // Fundo branco para um visual limpo
            gap={16}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Título da Seção */}
            <MotionHeading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                color="fer.lipstickLighter"
                textAlign="center"
                variants={itemVariants}
            >
                Formação Academica e Profissional
            </MotionHeading>

            {/* A MUDANÇA: Usando o SimpleGrid para criar os cards */}
            <SimpleGrid
                w="100%"
                maxW='1920px' mx='auto'
                columns={{ base: 1, md: academicFormation.length }} // 1 coluna no mobile, 2 no desktop
                gap={{ base: 6, md: 8 }}
            >
                {/* Mapeia os dados da formação para criar cada card */}
                {academicFormation.map((item, index) => (
                    <MotionBox
                        key={index}
                        variants={itemVariants}
                        as={Flex}
                        p={4}
                        bg="white"
                        borderRadius="sm"
                        borderTop={'10px solid'}
                        borderTopColor={'fer.lipstickLight'}
                        gap={5}
                        alignItems="start"
                    >
                        <Flex flexDir={'column'} gap={1}>
                            <Flex flexDir={'column'} gap={2}>
                                <Icon as={item.icon} boxSize={8} color="fer.lipstickLight" />
                                <Text fontSize="sm" fontWeight="bold" color="fer.lipstickLighter" textTransform="uppercase">
                                    {item.period}
                                </Text>
                            </Flex>
                            <Flex flexDir={'column'} gap={1}>
                                <Heading as="h3" size="sm" color="gray.800" mt={1}>
                                    {item.title}
                                </Heading>
                                <Text fontSize="sm" color="gray.600">{item.institution}</Text>
                            </Flex>
                        </Flex>
                    </MotionBox>
                ))}
            </SimpleGrid>
        </MotionVStack>
    );
}
