'use client'

import { Flex } from "@chakra-ui/react"
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
            <Flex
                bgImage='url(hero/hero-3.png)'
                bgPos='center'
                bgRepeat='no-repeat'
                bgSize='cover'
                w='100%'
                minH='100vh'
                flexDir={'column'}
            >
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