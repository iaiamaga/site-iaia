interface Video {
  title: string;
  videoId: string; // YouTube video ID
}

interface VideoCategory {
  title: string;
  videos: Video[];
}

export const VIDEO_CATEGORIES: VideoCategory[] = [
    {
      title: 'skate',
      videos: [
        { title: 'goth video', videoId: '7J0o7p94L8o' },
        { title: '5-21-22', videoId: '3uS0H9g_AbM' },
        { title: 'A DAY', videoId: 't_yTlyaLw5k' },
        { title: 'DEATH WiSH', videoId: 'HdaeAswT018' },
        { title: 'goth video II', videoId: '8W-1aE_a-3A' },
      ]
    },
    {
      title: 'music videos',
      videos: [
        { title: 'BBY GOYARD- 9TEEN', videoId: 'yYHf9yR9i-k' },
        { title: 'MOURi- GOiNG GHOST', videoId: 'gP4ab9TMMGg' },
      ]
    },
    {
      title: 'misc',
      videos: [
        { title: 'CHiP', videoId: 'jO3-gQ_s-A4' },
        { title: 'DOOM', videoId: 'vAUIbA9iB4I' },
        { title: 'SOCOM II', videoId: 'JtL4Awl4VvA' },
      ]
    }
  ];