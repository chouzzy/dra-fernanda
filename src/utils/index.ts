 
const whatsappNumber = 5511989823404
const email = `drafernandamilani@gmail.com`
const instagram = `https://www.instagram.com/drafernandamilani/`

const mapsExternalLink = 'https://www.google.com/maps?ll=-23.566026,-46.642105&z=16&t=h&hl=pt-BR&gl=BR&mapclient=embed&q=R.+Maestro+Cardim,+592+-+5%C2%BA+andar,+Sala+2+-+Bela+Vista+S%C3%A3o+Paulo+-+SP+01323-001'

const mapsLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4442.765244938813!2d-46.6421055!3d-23.566025600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59bcb72523a5%3A0xe2b210dd0d59f920!2sR.%20Maestro%20Cardim%2C%20592%20-%205%C2%BA%20andar%2C%20Sala%202%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001323-001!5e1!3m2!1spt-BR!2sbr!4v1760045163152!5m2!1spt-BR!2sbr"
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


export { scrollToSection, whatsappLink, whatsappNumber, mapsLink, instagramLink, mailLink, mapsExternalLink }