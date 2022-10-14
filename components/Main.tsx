import axios from 'axios';
import React, { useEffect } from 'react';
import Categories from './Categories';
import Header from './Header';
import CategoriesTab from './CategoriesTab';
// import LiveChannels from './LiveChannels';

const Main = () => {
  const url = 'https://youtube138.p.rapidapi.com/search/?q=games';
  const fetchVideos = async () => {
    try {
      const { data } = await axios.get(url, {
        headers: {
          'X-RapidAPI-Key':
            'ab831ce861mshd08491a9042f0d6p14def1jsnf6a56bd43f78',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
        },
      });

      console.log('object');
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  //   const fetchVideos = () => {
  //     try {
  //       const getVidoes = fetchVideos(`search?part=snippet&q=${'despacito'}`);
  //       console.log(getVidoes);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  useEffect(() => {
    fetchVideos();
    console.log('object');
  }, []);
  return (
    <div className="relative">
      <Header />
      {/* <LiveChannels /> */}
      <CategoriesTab />
      <Categories />
    </div>
  );
};

export default Main;
