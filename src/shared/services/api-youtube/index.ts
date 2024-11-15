import { youtube } from '@googleapis/youtube';


const fetchWithNextConfig = (nextConfig?: NextFetchRequestConfig): typeof fetch => {
  return (input, params = {}) => {
    return fetch(input, { ...params, next: nextConfig });
  };
};

const YouTubeAPIClient = youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_API_KEY,
  fetchImplementation: fetchWithNextConfig(),
});

export const APIYouTube = {
  course: {
    getAll: async () => {
      const { data } = await YouTubeAPIClient.playlists.list({
        maxResults: 50,
        part: ['snippet'],
        channelId: 'UCtJ3j1ANBe91ZHXzw6FJveg',
      }, { fetchImplementation: fetchWithNextConfig({ revalidate: (60 * 60) * 48 }) });

      const courses = (data.items || []).map(playlistItem => ({
        id: playlistItem.id || '',
        title: playlistItem.snippet?.title || '',
        description: playlistItem.snippet?.description || '',
        image: playlistItem.snippet?.thumbnails?.medium?.url || '',
      }));

      return courses.filter(course => course.description.includes('#CODARSE'));
    }
  },
};


