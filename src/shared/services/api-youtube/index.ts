import { youtube } from '@googleapis/youtube';


const YouTubeAPIClient = youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_API_KEY,
});

export const APIYouTube = {
  course: {
    getAll: async () => {
      const { data } = await YouTubeAPIClient.playlists.list({
        maxResults: 50,
        part: ['snippet'],
        channelId: 'UCtJ3j1ANBe91ZHXzw6FJveg',
      });

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


