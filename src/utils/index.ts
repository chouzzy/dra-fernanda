 
const whatsappNumber = 5511989823404
const email = `drafernandamilani@gmail.com`
const instagram = `https://www.instagram.com/drafernandamilani/`

// Endereço do consultório (LUMÊ Aesthetic & Health)
const address = 'Alameda dos Maracatins, 426 - Conj. 106/107 - Moema, São Paulo - SP'
const addressQuery = 'Alameda dos Maracatins, 426 - Moema, São Paulo - SP'

// Link para abrir a rota no Google Maps (novo endereço)
const mapsExternalLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressQuery)}`

// URL de incorporação (embed) do mapa. O formato "output=embed" funciona sem
// chave de API e sempre aponta o pin para o endereço pesquisado.
const mapsLink = `https://maps.google.com/maps?q=${encodeURIComponent(addressQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`
export function slugify(text: string) {
    return text
        .toString()
        .toLowerCase()
        .normalize("NFD") // Normaliza a string, separando letras e acentos
        .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
        .replace(/\s+/g, '-')           // Substitui espaços por hífens
        .replace(/[^\w\-]+/g, '')       // Remove caracteres não alfanuméricos, exceto hífen
        .replace(/\-\-+/g, '-')         // Substitui múltiplos hífens por um único hífen
        .replace(/^-+/, '')             // Remove hífens do início
        .replace(/-+$/, '');            // Remove hífens do final
}


const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Elemento com ID "${id}" não encontrado.`);
    }
};

const whatsappLink = (path?: string) => {

    return `https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20acessei%20o%20site%20do%20Studio%20Torroja%20e%20gostaria%20de%20um%20or%C3%A7amento%21`
}

const instagramLink = (path?: string) => {

    return `${instagram}`
}

const mailLink = (path?: string) => {

    return `mailto:${email}`
}


export { scrollToSection, whatsappLink, whatsappNumber, mapsLink, instagramLink, mailLink, mapsExternalLink, address, addressQuery }