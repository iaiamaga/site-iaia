import { type GalleryImage } from "../atoms/ImageGallery"
import AppHealth from "../../assets/designs/wireframes/wireframe-apphealth.png";
import Networkstates from "../../assets/designs/posts-desconferencia/design-desconferencia404-networkstates.png";
import Lojavirtual from "../../assets/designs/wireframes/wireframe-lojavirtual.png";
import Domingueira from "../../assets/designs/posts-emporio/domingueira-agrvai.png";
import Bobmarley from "../../assets/designs/posts-emporio/domingueira-tribute-bobmarley-im2b(v3).png";
import Coordinations from "../../assets/designs/posts-desconferencia/design-desconferencia404-coodinations.jpg";

export const DESIGN_IMAGES: GalleryImage[] = [
    {
        src: AppHealth,
        alt: 'Um wireframe de um aplicativo de atividade fisica',
        title: 'Wireframe alta fidelidade - HealthApp',
        description: 'Um wireframe de alta fidelidade que fiz nop processo de um curso de UI e UX design. Esse design foi particularmente desafiador porque eu ainda não sabia nada de figma e na hora de fazer o protótipo de fato deu tudo errado!! kkkkkk mas valeu muito porque hoje em dia eu já fico menos perdida para fazer protótipos.'
    },
    {
        src: Domingueira,
        alt: 'Um flyer para um evento de domingueira do Empório Zíngaro',
        title: 'Flyer de domingueira do Empório Zíngaro',
        description: 'Um flyer para um evento de domingueira do Empório Zíngaro. Foi uma experiência legal e desafiadora, testei a nova ferramenta Affinity e no fim consegui criar uma identidade visual coerente com o evento.'
    },
    {
        src: Bobmarley,
        alt: 'Um flyer para um evento de homenagem ao Bob Marley',
        title: 'Flyer de homenagem ao Bob Marley',
        description: 'Um flyer para um evento de homenagem ao Bob Marley que fiz no contexto do projeto de eventos para o Empório Zíngaro.'
    },
    { 
        src: Networkstates,
        alt: 'Post de conexão e coordenação global com estetica cybernetica',
        title: 'Post Desconferência 404: Network States',
        description: 'Esse design é do pack da Desconferência 404 introduzindo inicialmente o tópico Network States que resumidamente é um conceito que descreve comunidades digitais formadas pela internet, com valores, interesses ou objetivos em comum, capazes de se organizar para conquistar um grau de soberania reconhecido por estados existentes'
    },
    {
        src: Coordinations,
        alt: 'Post de conexão e coordenação global com estetica cybernetica',
        title: 'Post Desconferência 404: Coordinations',
        description: 'Esse foi literalmente uma experiência fazer. Eu estava no meu primeiro hackathon no evento EthLatam em São Paulo fazendo esse (e outros) designs para a Desconferência404 (muito interessante aliás) que ocorreu dentro do mesmo evento. Achei interessante pois lidei com uma certa pressão e insegurança se eu ia fazer algo decente. Mas eu achoque foi missão super cumprida! O termo Coordinations descreve a ideia da evolução da Network States, contrapondo a hierarquia muitas vezes opressoras e convidando para uma forma mais prática de prosperar e coordenar ações de forma consciente, integrativa e coletiva (ao meu entendimento).'
    },
    {
        src: Lojavirtual,
        alt: 'Um wireframe de baixa fidelidade para uma loja virtual',
        title: 'Wireframe de baixa fidelidade - Kamurima Loja Virtual',
        description: 'Um wireframe de baixa fidelidade que fiz no processo do mesmo curso de UI e UX design. Esse foi literalmente o primeiro que fiz na vida, e até hoje eu AMO... ta tem algumas coisinhas para concertar mas po ficou mo estiloso, eu super compraria dessa loja.'
    },
    
];
