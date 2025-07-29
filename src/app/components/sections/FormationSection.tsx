// src/components/sections/FormationSection.tsx
'use client';

// --- React e Frameworks ---
import {
    Flex,
    Heading,
    Text,
    VStack,
    Box,
} from "@chakra-ui/react";
import { motion, Variants } from 'framer-motion';

// --- Ícones ---

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
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
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
    const MotionFlex = motion(Flex);
    const MotionHeading = motion(Heading);

    return (
        <MotionVStack
            as="section"
            id="formacao" // ID para navegação futura, se necessário
            w="100%"
            py={{ base: 16, md: 24 }}
            px={{ base: 4, md: 8 }}
            bg="white" // Fundo branco para um visual limpo
            gap={12}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Título da Seção */}
            <MotionHeading
                as="h2"
                fontSize={{ base: '2xl', md: '4xl' }}
                fontWeight="bold"
                color="gray.800"
                textAlign="center"
                variants={itemVariants}
            >
                Formação Académica e Profissional
            </MotionHeading>

            {/* Container da Linha do Tempo */}
            <VStack
                w="100%"
                maxW="container.md"
                mx="auto"
                align="stretch"
                gap={0} // O espaçamento será controlado pelos itens
            >
                {academicFormation.map((item, index) => (
                    <MotionFlex
                        key={index}
                        variants={itemVariants}
                        minH="100px"
                    >
                        {/* Linha do Tempo (Elemento Visual) */}
                        <Flex direction="column" align="center" mr={6}>
                            <Box
                                w="16px"
                                h="16px"
                                bg="pink.100"
                                borderRadius="full"
                                border="3px solid"
                                borderColor="pink.500"
                                zIndex={1}
                            />
                            {/* Linha vertical, exceto no último item */}
                            {index < academicFormation.length - 1 && (
                                <Box flex={1} w="2px" bg="gray.200" />
                            )}
                        </Flex>

                        {/* Conteúdo do Item */}
                        <Box pb={10}>
                            <Text fontSize="sm" fontWeight="bold" color="pink.600">{item.period}</Text>
                            <Heading as="h3" size="sm" color="gray.800" mt={1}>
                                {item.title}
                            </Heading>
                            <Text fontSize="sm" color="gray.600">{item.institution}</Text>
                        </Box>
                    </MotionFlex>
                ))}
            </VStack>
        </MotionVStack>
    );
}
