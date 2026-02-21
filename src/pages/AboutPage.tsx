import '../index.css';
import React from 'react';
import { ABOUT_DATA } from '../components/organisms/AboutData';


export function AboutPage(): React.JSX.Element {
  const { name, profileImage, bio, skills } = ABOUT_DATA;
  
  return (
    <div className="text-white p-4 max-w-4xl mx-auto">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-center gap-8 mb-12 text-center md:text-left">
        <img
          src={profileImage}
          alt={`Profile of ${name}`}
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-400 shadow-lg shadow-blue-500/50 lg:self-start flex-shrink-0"
        />
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">{name}</h1>
          {bio.map((paragraph, index) => (
            <p key={index} className="text-fluid-base mb-4 text-violet-200">
              {paragraph}
            </p>
          ))}
        </div>
      </header>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-violet-200">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span key={skill} className="bg-violet-800 text-pink-300 px-4 py-2 rounded-full text-sm font-semibold">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Socials Section */}
      {/* <section>
        <h2 className="text-3xl font-bold mb-6 text-center text-violet-200">Connect With Me</h2>
        <div className="flex justify-center items-center gap-x-8">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${social.name} profile`}
              className="block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-[#6921A7] [&:focus-visible>img]:invert"
            >
              <img
                src={social.iconSrc}
                alt={`${social.name} logo`}
                className="h-10 w-10 transition-filter duration-170 ease-in-out hover:invert"
              />
            </a>
          ))}
        </div>
      </section> */}
    </div>

  );
}

