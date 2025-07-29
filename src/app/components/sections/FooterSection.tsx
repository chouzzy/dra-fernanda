// src/components/layout/Footer.tsx
'use client';

// --- React e Frameworks ---
import {
    Flex,
    Heading,
    Text,
    VStack,
    Box,
    HStack,
    Icon,
    Link as ChakraLink,
    IconButton,
} from "@chakra-ui/react";

// --- Ícones ---
import { PiWhatsappLogo, PiEnvelopeSimple, PiInstagramLogo } from "react-icons/pi";

// --- Dados Locais ---
import { siteData } from '@/data/siteData';

// ============================================================================
//   COMPONENTE PRINCIPAL: Footer
// ============================================================================
export function Footer() {
    const navLinks = [
        { label: "Sobre", href: "#sobre" },
        { label: "Áreas de Atuação", href: "#atuacao" },
        { label: "Contato", href: "#contato" },
    ];

    const socialLinks = [
        { label: "WhatsApp", href: siteData.contact.whatsappLink, icon: PiWhatsappLogo },
        { label: "E-mail", href: `mailto:${siteData.contact.email}`, icon: PiEnvelopeSimple },
        { label: "Instagram", href: siteData.contact.instagramUrl, icon: PiInstagramLogo },
    ];

    return (
        <Box
            as="footer"
            w="100%"
            py={{ base: 10, md: 16 }}
            px={{ base: 4, md: 8 }}
            bg="gray.800"
            color="gray.300"
        >
            <VStack gap={10} maxW="container.lg" mx="auto">
                {/* Seção Superior: Nome, Navegação e Redes Sociais */}
                <Flex
                    w="100%"
                    direction={{ base: 'column', md: 'row' }}
                    align="center"
                    justify="space-between"
                    gap={{ base: 8, md: 4 }}
                >
                    {/* Nome e Especialidade */}
                    <VStack align={{ base: 'center', md: 'flex-start' }} gap={0}>
                        <Heading as="h2" size="md" color="white">
                            {siteData.doctorName}
                        </Heading>
                        <Text fontSize="sm" color="gray.400">
                            {siteData.specialty}
                        </Text>
                    </VStack>

                    {/* Navegação Principal */}
                    <HStack gap={{ base: 4, md: 8 }} display={{ base: 'none', md: 'flex' }}>
                        {navLinks.map((link) => (
                            <ChakraLink
                                key={link.label}
                                href={link.href}
                                fontSize="sm"
                                _hover={{ color: 'pink.300' }}
                            >
                                {link.label}
                            </ChakraLink>
                        ))}
                    </HStack>

                    {/* Ícones de Redes Sociais */}
                    <HStack gap={2}>
                        {socialLinks.map((social) => (
                            <ChakraLink
                                key={social.label}
                                href={social.href}
                                target="_blank"
                            >
                            <IconButton
                                aria-label={social.label}
                                variant="ghost"
                                color="gray.400"
                                _hover={{ bg: 'whiteAlpha.200', color: 'white' }}
                            >
                                <Icon as={social.icon} boxSize={5} />
                            </IconButton>
                            </ChakraLink>
                        ))}
                    </HStack>
                </Flex>

                <Flex h={1} w='100%' borderColor="gray.700" />

                {/* Seção Inferior: Copyright */}
                <Flex
                    w="100%"
                    direction={{ base: 'column', sm: 'row' }}
                    align="center"
                    justify="space-between"
                    gap={4}
                >
                    <Text fontSize="xs" color="gray.500">
                        {siteData.footer.copyright}
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                        Desenvolvido por <ChakraLink href="https://awer.co" target="_blank" color="pink.400" _hover={{ textDecoration: 'underline' }}>Awer</ChakraLink>
                    </Text>
                </Flex>
            </VStack>
        </Box>
    );
}
