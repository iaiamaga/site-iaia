import React, { useState } from 'react';
import { TvFrame } from '../atoms/TvFrame';
// import { TextMono, HeadingSerif } from '../atoms/Typography';

const VIDEOS = [
  { id: '1', title: 'Static Dreams', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', desc: 'Fragment 01: The first echo.' },
  { id: '2', title: 'Signal Loss', url: 'https://www.youtube.com/embed/36YnV9ST7l8', desc: 'Fragment 02: Interference patterns.' },
];

export const VideoGallery: React.FC = () => {
  const [activeVid, setActiveVid] = useState(VIDEOS[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-8">
        <TvFrame videoUrl={activeVid.url} />
      </div>
      
      <div className="lg:col-span-4 flex flex-col gap-6">
        <HeadingSerif className="text-3xl">Play_List</HeadingSerif>
        <div className="flex flex-col gap-4">
          {VIDEOS.map((vid) => (
            <button
              key={vid.id}
              onClick={() => setActiveVid(vid)}
              className={`text-left p-4 border transition-all ${activeVid.id === vid.id ? 'bg-white text-black border-white' : 'border-white/10 text-white/40 hover:border-white/40'}`}
            >
              <TextMono className="block mb-1">00{vid.id}</TextMono>
              <span className="font-serif italic text-lg">{vid.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};