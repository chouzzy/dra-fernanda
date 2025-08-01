// src/components/layout/Navbar.tsx
'use client';

// --- React e Frameworks ---
import {
    Flex,
    Heading,
    Text,
    Button,
    Icon,
    HStack,
    VStack,
    Link as ChakraLink,
    // A MUDANÇA: Componentes para o novo menu
    IconButton,
    Box,
    Menu,
    Portal,
} from "@chakra-ui/react";
import Link from 'next/link'; // Para navegação entre páginas, se necessário

// --- Ícones ---
import { PiWhatsappLogo, PiList } from "react-icons/pi";

// --- Dados Locais ---
import { siteData } from '@/data/siteData'; // Importa os dados do site
import { motion, Variants } from "framer-motion";

// ============================================================================
//   COMPONENTE PRINCIPAL: Navbar
// ============================================================================
export function Navbar() {

    const MotionButton = motion(Button);

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


    // Links de navegação para o menu
    const navLinks = [
        { label: "Sobre", href: "#sobre" },
        { label: "Áreas de Atuação", href: "#atuacao" },
        { label: "Contato", href: "#contato" },
    ];

    return (
        <Box
            as="nav"
            w="100%"
            // Efeito de fundo de vidro
            bg="transparent"
        >
            <Flex
                w="100%"
                maxW="container.lg"
                mx="auto"
                px={{ base: 4, md: 8 }}
                py={4}
                align="center"
                justify="space-between"
            >
                {/* Lado Esquerdo: Nome e Especialidade */}
                <ChakraLink as={Link} href="/" _hover={{ textDecoration: 'none' }}>
                    <VStack align="flex-start" gap={0}>
                        <Heading as="h1" size="md" color="gray.50" textShadow={'2px 2px 4px rgba(0, 0, 0, 0.16)'}>
                            {siteData.doctorName}
                        </Heading>
                        <Text fontSize="xs" color="gray.50" textShadow={'2px 2px 4px rgba(0, 0, 0, 0.16)'}>
                            {siteData.specialty}
                        </Text>
                    </VStack>
                </ChakraLink>

                {/* Lado Direito: Navegação Desktop */}
                <HStack
                    gap={8}
                    display={{ base: 'none', md: 'flex' }}
                    align="center"
                >
                    {navLinks.map((link) => (
                        <ChakraLink
                            key={link.label}
                            href={link.href}
                            fontSize="md"
                            fontWeight="medium"
                            color="gray.50"
                            _hover={{ color: 'pink.500', textDecoration: 'none' }}
                        >
                            {link.label}
                        </ChakraLink>
                    ))}
                    {/* Ícone e texto como filhos para o padrão Chakra UI v3 */}
                    <ChakraLink
                        href={siteData.contact.whatsappLink}
                        target="_blank"
                        textDecoration="none"
                    >
                        <MotionButton
                            bgColor='fer.lipstick'
                            color={'gray.50'}
                            size="lg"
                            py={6}
                            px={4}
                            variants={itemVariants}
                        >
                            <HStack gap={2}>
                                <Icon as={PiWhatsappLogo} boxSize={5} />
                                <Text>{siteData.hero.ctaButton}</Text>
                            </HStack>
                        </MotionButton>
                    </ChakraLink>
                </HStack>

                {/* A MUDANÇA: Botão do Menu Mobile agora usa o componente Menu */}
                <Box display={{ base: 'flex', md: 'none' }}>
                    <Menu.Root>
                        <Menu.Trigger asChild>
                            <IconButton
                                aria-label="Abrir menu"
                                variant="ghost"
                            >
                                <PiList />
                            </IconButton>
                        </Menu.Trigger>
                        <Portal>
                            <Menu.Positioner>
                                <Menu.Content>
                                    {navLinks.map((link) => (
                                        <Menu.Item key={link.label} value={link.href} asChild>
                                            <ChakraLink href={link.href} w="100%" color='fer.lipstick'>
                                                {link.label}
                                            </ChakraLink>
                                        </Menu.Item>
                                    ))}
                                    <Menu.Separator />
                                    <Menu.Item value="whatsapp" asChild>
                                        <ChakraLink href={siteData.contact.whatsappLink} target='_blank' w="100%" _hover={{ textDecoration: 'none' }}>
                                            <Button
                                                color='fer.lipstick'
                                                _hover={{ bg: 'fer.makeup', color: 'gray.50' }}
                                                w="100%"
                                                size="sm"
                                            >
                                                <HStack gap={2}>
                                                    <Icon as={PiWhatsappLogo} />
                                                    <Text>{siteData.hero.ctaButton}</Text>
                                                </HStack>
                                            </Button>
                                        </ChakraLink>
                                    </Menu.Item>
                                </Menu.Content>
                            </Menu.Positioner>
                        </Portal>
                    </Menu.Root>
                </Box>
            </Flex>
        </Box>
    );
}
