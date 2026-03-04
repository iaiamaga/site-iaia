// import { ICONS } from "../atoms/Icons"

// interface SocialLink {
//   name: string;
//   url: string;
//   iconSrc: string;
// }

interface WhatICanDo {
  title: string;
  description: string[];
}

interface AboutData {
  name: string;
  profileImage: string;
  bio: string[];
  skills: string[];
}



export const ABOUT_DATA: AboutData & { whatICanDo: WhatICanDo[] } = {
    name: "Iara",
    profileImage: "./src/assets/profile-iaia.png",
    bio: [
      "Heyy, prazer, me chamo Iara. Desde nova meu forte é fazer produções artisticas criativas e expressivas. Busco melhorar nessa área e evoluir para atingir meus objetivos como artista multimidia e comunicadora visual num geral. Não só como ramo profissional mas como aperfeiçoamento de uma sensibilidade inata. O que eu realmente curto é criar soluções visuais, seja qual for a dificuldade ou problema, quero trazer uma solução funcional e coerente com o projeto, e claro colorindo com um toque de personalidade.",
      "This website is a collection of my work, a visual diary of my adventures, and a space where I experiment with new ideas. Whether it's the raw energy of a skate video or the quiet beauty of a misty morning, I strive to find the extraordinary in the ordinary."
    ],
    

    whatICanDo: [
      {
        title: "Foto e Imagens",
        description: [
          "Edição de fotos e imagens, incluindo ajustes de cor, retoques e manipulação de imagens para atender às necessidades do projeto.",
          "Criação de imagens digitais, ilustrações e gráficos para uso em mídias sociais, sites, apresentações e outros materiais visuais.",
          "Criação de imagens ou colagens de forma original ou com IA (uso ético)"
        ]
      },
      {
        title: "Design (Gráfico e Digital)",
        description: [
          "Criação de Logos e 'Logotipos'.",
          "Diagramação (livros, revistas, jornais, e-books).",
          "Produção de Flyers, cartazes, outdoors, anúncios e campanhas.",
          "Ilustrações pontuais.",
          "Criação de apresentações visuais (Apresentações, Slides etc).",
          "Design de embalagens e rótulos.",
          "Criação de materiais para redes sociais. (Tumbnails, banners, posts, stories, etc).",
        ]
      },
      {
        title: "UI/UX Design",
        description: [
          "Criação de layouts para sites, aplicativos e plataformas digitais.",
          "Criação wireframes, protótipos e fluxos de navegação",
        ]
      },
    ],

    skills: [
      "Comunicação Visual", "Photography", "Videography", "Photo Editing", "Video Editing", "Graphic Design", "UI/UX", "HTML & CSS", "React", "Typescript", "JavaScript", "Figma", "Autodidata", "Criatividade", "Resolução de Problemas", "Trabalho em Equipe",
    ],

  }

