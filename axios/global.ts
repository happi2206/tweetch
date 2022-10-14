import axios from 'axios';

export const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'ab831ce861mshd08491a9042f0d6p14def1jsnf6a56bd43f78',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};

export const fetchVideos = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
