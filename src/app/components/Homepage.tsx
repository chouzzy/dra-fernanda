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
            <Navbar/>
            <HeroSection/>
            <AboutSection/>
            <ServicesSection/>
            <FormationSection/>
            <ContactSection/>
            <Footer/>
        </Flex>
    )
}