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

// ============================================================================
//   COMPONENTE PRINCIPAL: Navbar
// ============================================================================
export function Navbar() {
    // Links de navegação para o menu
    const navLinks = [
        { label: "Sobre", href: "#sobre" },
        { label: "Áreas de Atuação", href: "#atuacao" },
        { label: "Contato", href: "#contato" },
    ];

    return (
        <Box
            as="nav"
            position="sticky"
            top={0}
            zIndex="sticky"
            w="100%"
            // Efeito de fundo de vidro
            bg="whiteAlpha.800"
            backdropFilter="blur(10px)"
            boxShadow="sm"
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
                        <Heading as="h1" size="md" color="gray.800">
                            {siteData.doctorName}
                        </Heading>
                        <Text fontSize="xs" color="gray.600">
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
                            fontSize="sm"
                            fontWeight="medium"
                            color="gray.700"
                            _hover={{ color: 'pink.500', textDecoration: 'none' }}
                        >
                            {link.label}
                        </ChakraLink>
                    ))}
                    <ChakraLink
                        href={siteData.contact.whatsappLink}
                        target='_blank'
                        >
                        {/* Ícone e texto como filhos para o padrão Chakra UI v3 */}
                            <HStack gap={2}>
                                <Icon as={PiWhatsappLogo} />
                                <Text>{siteData.hero.ctaButton}</Text>
                            </HStack>
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
                                            <ChakraLink href={link.href} w="100%">
                                                {link.label}
                                            </ChakraLink>
                                        </Menu.Item>
                                    ))}
                                    <Menu.Separator />
                                    <Menu.Item value="whatsapp" asChild>
                                        <ChakraLink href={siteData.contact.whatsappLink} target='_blank' w="100%" _hover={{ textDecoration: 'none' }}>
                                            <Button
                                                colorScheme="pink"
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
