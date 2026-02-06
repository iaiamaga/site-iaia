import React from 'react';
import { HeadingSerif, TextBody, TextMono } from '../components/atoms/Typography';

const AboutPage: React.FC = () => {
  return (
    <main className="pt-40 pb-20 container mx-auto px-6 max-w-4xl">
      <article className="flex flex-col gap-16">
        <section>
          <TextMono className="text-white/30 block mb-4 uppercase tracking-[0.5em]">The Curator</TextMono>
          <HeadingSerif className="text-5xl md:text-7xl mb-8">Process over product.</HeadingSerif>
          <div className="space-y-8 text-xl md:text-2xl font-light text-white/70 leading-relaxed font-sans">
            <p>
              Não vejo o design como uma ferramenta de solução de problemas, mas como uma linguagem de exploração. 
              Este arquivo não é um portfólio de vitrine; é um registro de curiosidade técnica e visual.
            </p>
            <p>
              Minha jornada é transdisciplinar por natureza. Do código que renderiza esta página às esculturas físicas que moldo com as mãos, 
              o objetivo é o mesmo: encontrar a "aura" no digital.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-white/5">
          <div className="flex flex-col gap-4">
            <TextMono className="text-white">Curiosity_Stack</TextMono>
            <ul className="space-y-2 text-white/40 font-mono text-sm">
              <li>— Creative Coding / GLSL</li>
              <li>— Advanced React Architecture</li>
              <li>— Physical Component Theory</li>
              <li>— Visual Storytelling</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <TextBody className="text-white">Inspirations</TextBody>
            <ul className="space-y-2 text-white/40 font-mono text-sm">
              <li>— Neocities Culture</li>
              <li>— Brutalist Architecture</li>
              <li>— Analog Glitch Art</li>
              <li>— Cybernetics</li>
            </ul>
          </div>
        </section>
        
        <footer className="pt-20 text-center">
          <TextMono className="text-white/10">End of Record // No further data available.</TextMono>
        </footer>
      </article>
    </main>
  );
};

export default AboutPage