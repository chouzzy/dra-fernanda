'use client'

import { Box, Flex } from "@chakra-ui/react"
import { Navbar } from "./layout/Navbar"
import { HeroSection } from "./sections/HeroSection"
import { AboutSection } from "./sections/AboutSection"
import { ServicesSection } from "./sections/ServicesSection"
import { FormationSection } from "./sections/FormationSection"
import { ContactSection } from "./sections/ContactSection"
import { Footer } from "./sections/FooterSection"

export function Homepage() {


    return (
        <Flex flexDir={'column'} alignItems={'center'} justifyContent={'center'}>

            <style>
                {
                    `
                .blur-gradient-mask {
                    mask-image: linear-gradient(to bottom, transparent 0%, black 40%);
                    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 40%);
                }
                `}
            </style >
            <Flex
                bgImage={{ base: 'url(hero/hero-mobile.png)', md: 'url(hero/hero.png)' }}
                bgPos='center'
                bgRepeat='no-repeat'
                bgSize='cover'
                position={'relative'}
                overflow="hidden"
                w='100%'
                minH='100vh'
                flexDir={'column'}
                zIndex={1}
            >
                <Box
                    position="absolute"
                    inset={0}
                    zIndex={1}
                    className="blur-gradient-mask"
                >
                    <Box w="full" h="full" backdropFilter="blur(6px)" bg="blackAlpha.200" />
                </Box >
                <Navbar />
                <HeroSection />
            </Flex>
            <AboutSection />
            <ServicesSection />
            <FormationSection />
            <ContactSection />
            <Footer />
        </Flex>
    )
}