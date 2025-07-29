// src/components/sections/ServicesSection.tsx
'use client';

// --- React e Frameworks ---
import {
    Heading,
    Text,
    VStack,
    Icon,
    Box,
    // A MUDANÇA: Importando o Collapsible
    Collapsible,
    HStack,
} from "@chakra-ui/react";
import { motion, Variants } from 'framer-motion';

// --- Dados Locais ---
import { siteData } from '@/data/siteData';
import { servicesData } from '@/data/servicesData';

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
    const MotionHeading = motion(Heading);

    return (
        <MotionBox
            as="section"
            id="atuacao" // ID para a navegação da Navbar
            w="100%"
            py={{ base: 16, md: 24 }}
            px={{ base: 4, md: 8 }}
            bg="gray.50" // Fundo claro para alternar com as outras seções
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <VStack gap={12} maxW="container.lg" mx="auto">
                {/* Título da Seção */}
                <MotionHeading
                    as="h2"
                    fontSize={{ base: '2xl', md: '4xl' }}
                    fontWeight="bold"
                    color="gray.800"
                    textAlign="center"
                    variants={itemVariants}
                >
                    {siteData.services.title}
                </MotionHeading>

                {/* A MUDANÇA: Usando uma lista de Collapsibles */}
                <MotionVStack
                    w="100%"
                    maxW="3xl" // Limita a largura para melhor legibilidade
                    mx="auto"
                    variants={containerVariants} // Aplica o stagger nos filhos
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    align="stretch"
                    gap={4}
                >
                    {servicesData.map((service) => (
                        <MotionBox
                            key={service.value}
                            variants={itemVariants}
                            borderWidth="1px"
                            borderColor="gray.200"
                            borderRadius="xl"
                            bg="white"
                            overflow="hidden"
                        >
                            <Collapsible.Root>
                                <Collapsible.Trigger width="100%" py={4} px={6} cursor={'pointer'} _hover={{ bg: 'gray.100', transition: 'background-color 0.5s' }}>
                                    <HStack>
                                        <Icon as={service.icon} fontSize="xl" color="pink.500" />
                                        <Text fontWeight="medium" flex="1" textAlign="left" color={'black'}>{service.title}</Text>
                                        {/* O Collapsible não tem um indicador padrão, mas podemos adicionar um se necessário */}
                                    </HStack>
                                </Collapsible.Trigger>
                                <Collapsible.Content>
                                    <Box pb={5} px={6}>
                                        <Text color="gray.600" pl={10}>
                                            {service.content}
                                        </Text>
                                    </Box>
                                </Collapsible.Content>
                            </Collapsible.Root>
                        </MotionBox>
                    ))}
                </MotionVStack>
            </VStack>
        </MotionBox>
    );
}
