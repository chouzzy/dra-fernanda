// src/components/sections/ContactSection.tsx
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
    Link
} from "@chakra-ui/react";
import { motion, Variants } from 'framer-motion';

// --- Ícones ---
import { PiWhatsappLogo, PiEnvelopeSimple, PiInstagramLogo } from "react-icons/pi";

// --- Dados Locais ---
import { siteData } from '@/data/siteData';
import { mapsExternalLink, mapsLink } from "@/utils";

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
//   COMPONENTE PRINCIPAL: ContactSection
// ============================================================================
export function ContactSection() {
    const MotionVStack = motion(VStack);
    const MotionFlex = motion(Flex);

    // Adicione a URL de embed do Google Maps ao seu siteData.ts
    const googleMapsEmbedUrl = mapsLink;

    return (
        <MotionVStack
            as="section"
            id="contato" // ID para a navegação da Navbar
            w="100%"
            py={{ base: 16, md: 24 }}
            px={{ base: 4, md: 8 }}
            bgGradient="to-b" gradientFrom="fer.beigeLighter" gradientTo="fer.beige"

            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <Flex flexDir={"column"} alignItems="center" w="100%" maxW='1920px' mx='auto' gap={12}>
                {/* Título da Seção */}
                <MotionVStack textAlign="center" gap={4} variants={itemVariants}>
                    <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" color="fer.lipstickLighter">
                        Entre em Contato
                    </Heading>
                    <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="2xl">
                        Estou à disposição para responder às suas dúvidas e agendar a sua consulta. Utilize um dos canais abaixo para entrar em contato.
                    </Text>
                </MotionVStack>

                {/* Container Principal (Duas Colunas) */}
                <Flex
                    w="100%"
                    maxW="container.lg"
                    direction={{ base: 'column', lg: 'row' }}
                    gap={{ base: 10, lg: 16 }}
                    align="center"
                >
                    {/* Coluna da Esquerda: Informações de Contato */}
                    <MotionVStack
                        flex={1}
                        align="stretch"
                        gap={6}
                        w="100%"
                        variants={itemVariants}
                    >
                        <ContactInfo
                            icon={PiWhatsappLogo}
                            title="WhatsApp"
                            content={siteData.contact.whatsapp}
                            buttonText="Agendar Consulta"
                            href={siteData.contact.whatsappLink}
                        />
                        <ContactInfo
                            icon={PiEnvelopeSimple}
                            title="E-mail"
                            content={siteData.contact.email}
                            buttonText="Enviar E-mail"
                            href={`mailto:${siteData.contact.email}`}
                        />
                        <ContactInfo
                            icon={PiInstagramLogo}
                            title="Instagram"
                            content="@drafernandamilani"
                            buttonText="Seguir no Instagram"
                            href={siteData.contact.instagramUrl}
                        />
                    </MotionVStack>

                    {/* Coluna da Direita: Mapa */}
                    <MotionFlex
                        flex={1.5}
                        w="100%"
                        gap={4}
                        h={{ base: "300px", md: "450px" }}
                        borderRadius="lg"
                        overflow="hidden"
                        variants={itemVariants}
                        flexDir={'column'}
                    >
                        <iframe
                            src={googleMapsEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <Flex bgColor={'white'}  px={4} py={2} borderRadius={'md'} boxShadow={'md'} flexDir={'column'} alignItems={'center'} textAlign={'center'}>
                            <Link href={mapsExternalLink} target="_blank" >
                                <Text color={'fer.lipstickLight'} _hover={{ textDecoration: 'none', color: 'pink.600' }}>
                                    Endereço:
                                    Rua Maestro Cardim, 592 – 5º andar, Sala 2
                                    Bela Vista – São Paulo – SP

                                </Text>
                            </Link>
                        </Flex>
                    </MotionFlex>
                </Flex>
            </Flex>
        </MotionVStack>
    );
}


// ============================================================================
//   SUB-COMPONENTE: ContactInfo Card
// ============================================================================
interface ContactInfoProps {
    icon: React.ElementType;
    title: string;
    content: string;
    buttonText: string;
    href: string;
}

function ContactInfo({ icon, title, content, buttonText, href }: ContactInfoProps) {
    return (
        <Flex
            p={6}
            bg="white"
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.200"
            align="center"
            justify="space-between"
            gap={4}
        >
            <HStack gap={4}>
                <Icon as={icon} boxSize={8} color="fer.lipstick" />
                <Box>
                    <Text fontWeight="bold" color="gray.600">{title}</Text>
                    <Text fontSize="sm" color="gray.600">{content}</Text>
                </Box>
            </HStack>
            <ChakraLink
                as={ChakraLink}
                href={href}
                target="_blank"
                color={'fer.lipstickLighter'}
                fontWeight={'medium'}
                p={2}
                _hover={{
                    textDecoration: 'none',
                    color: 'fer.brown',
                    transition: 'color 0.2s ease-in-out'
                }}
                borderRadius="md"
            >
                {buttonText}
            </ChakraLink>
        </Flex>
    );
}
