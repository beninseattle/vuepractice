const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

const getFetch = async (url, params) => {
  const searchParams = new URLSearchParams({...params}).toString();

  console.log('search params: ', searchParams);
  const response = await fetch(`${url}?${searchParams}`);
  if (response.ok) {
    const result = await response.json();
    console.log(result);
    return result;
  }

  return undefined;
};

const searchYoutube = async (searchTerm) => {
  const result = await getFetch(YOUTUBE_SEARCH_URL, {
    key: API_KEY,
    type: 'video',
    part: 'snippet',
    q: searchTerm
  });
  return result;
};

export {getFetch, searchYoutube};