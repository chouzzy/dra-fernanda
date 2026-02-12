 
const whatsappNumber = 5511989823404
const email = `drafernandamilani@gmail.com`
const instagram = `https://www.instagram.com/drafernandamilani/`

const mapsExternalLink = 'https://www.google.com/maps?ll=-23.6120676,-46.6678561&z=16&t=h&hl=pt-BR&gl=BR&mapclient=embed&q=Livance+Moema+-+Av.+dos+Carin%C3%A1s,+185+-+2%C2%BA+andar.+O+estacionamento+est%C3%A1+localizado+ao+lado+do+n%C3%BAmero+181.'

const mapsLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4855.3383793655885!2d-46.667856099999995!3d-23.6120676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b240937f1e1%3A0xdb44720b3285a7a5!2sLivance%20Moema!5e1!3m2!1spt-BR!2sbr!4v1770901777324!5m2!1spt-BR!2sbr"
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