import React, { useState } from 'react';
import { VIDEO_CATEGORIES } from '../components/atoms/VideoCategories';

export function VideoPage(): React.JSX.Element {
  // Initialize state with the first video from the first category
  const [currentVideoId, setCurrentVideoId] = useState<string>(VIDEO_CATEGORIES[0]?.videos[0]?.videoId ?? '');

  return (
    <div className="flex flex-col-reverse md:flex-row-reverse gap-8 text-white">
      {/* Left Column (now on right on desktop): Video List */}
      <div className="w-full md:w-1/3 space-y-4">
        {VIDEO_CATEGORIES.map((category) => (
          <div key={category.title}>
            <h2 className="text-xl font-bold mb-2 text-left md:text-right">{category.title}</h2>
            <ul className="space-y-1">
              {category.videos.map((video) => (
                <li key={video.videoId}>
                  <button
                    onClick={() => setCurrentVideoId(video.videoId)}
                    className={`text-left md:text-right w-full text-base transition-colors duration-150 ${
                      currentVideoId === video.videoId
                        ? 'text-pink-400'
                        : 'text-white hover:text-gray-300'
                    }`}
                    aria-current={currentVideoId === video.videoId ? 'true' : 'false'}
                  >
                    {video.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Right Column (now on left on desktop): Video Player */}
      <div className="w-full md:w-2/3">
        {currentVideoId ? (
          <div className="aspect-w-16 aspect-h-9">
             <iframe
                className="w-full h-full"
                style={{ aspectRatio: '16 / 9' }}
                src={`https://www.youtube.com/embed/${currentVideoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="aspect-w-16 aspect-h-9 bg-black flex items-center justify-center">
            <p>Select a video to play.</p>
          </div>
        )}
      </div>
    </div>
  );
}