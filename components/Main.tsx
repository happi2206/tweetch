import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import Header from './Header';
import CategoriesTab from './CategoriesTab';
import LiveChannels from './LiveChannels';
import VideoCarousel from './VideoCarousel';
import { fetchVideosFromApi } from '../axios/global';
import { videointerface } from '../interfaces/categories';

const Main = () => {
  const [videos, setVideos] = useState<videointerface[]>([]);
  const [fetching, setFetching] = useState(false);
  const fetchVideos = async () => {
    setFetching(true);
    try {
      const vids = await fetchVideosFromApi(`search/?q=live&hl=en&gl=US`);
      setVideos(vids.contents.slice(0, 20));
      setFetching(false);
    } catch (err) {
      console.error(err);
      setFetching(false);
    }
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <div className="relative">
      <VideoCarousel videos={videos} fetching={fetching} />
      <LiveChannels videos={videos.slice(0, 4)} fetching={fetching} />
      <CategoriesTab />
      <Categories />
    </div>
  );
};

export default Main;
