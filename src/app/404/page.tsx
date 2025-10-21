'use client';

import {
    Flex,
    Heading,
    Text,
    Button
} from "@chakra-ui/react";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NotFoundPage() {
    const router = useRouter();

    useEffect(() => {
        document.title = "Página não encontrada | Dra. Fernanda Milani";
    }, []);

    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            minH="100vh"
            bg="gray.50"
            py={12}
            px={4}
        >
            <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                color="fer.lipstickLighter"
                mb={4}
                textAlign="center"
            >
                Página não encontrada
            </Heading>
            <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.700"
                mb={8}
                textAlign="center"
            >
                A página que você está procurando não existe ou foi movida.
            </Text>
            <Button
                bgColor="fer.lipstick"
                color={'white'}
                onClick={() => router.push('/')}
            >
                Voltar para a Página Inicial
            </Button>
        </Flex>
    );
}
