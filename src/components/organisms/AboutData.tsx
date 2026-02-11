// import { ICONS } from "../atoms/Icons"

// interface SocialLink {
//   name: string;
//   url: string;
//   iconSrc: string;
// }

interface AboutData {
  name: string;
  profileImage: string;
  bio: string[];
  skills: string[];
}

export const ABOUT_DATA: AboutData = {
    name: "Iara",
    profileImage: "./src/assets/profile-iaia.png",
    bio: [
      "I'm a passionate creative with a love for capturing moments and telling stories through various mediums. My journey started with a simple film camera, and since then, I've explored the worlds of digital photography, videography, art, and design.",
      "This website is a collection of my work, a visual diary of my adventures, and a space where I experiment with new ideas. Whether it's the raw energy of a skate video or the quiet beauty of a misty morning, I strive to find the extraordinary in the ordinary."
    ],
    skills: [
      "Photography", "Videography", "Photo Editing", "Video Editing", "Graphic Design", "UI/UX", "HTML & CSS", "React", "JavaScript"
    ],
  }