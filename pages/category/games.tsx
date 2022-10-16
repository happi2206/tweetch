import React, { useEffect, useState } from 'react';
import CategoriesTab from '../../components/CategoriesTab';
import { useRouter } from 'next/router';
import CategoryHeader from '../../components/CategoryHeader';
import { fetchVideosFromApi } from '../../axios/global';
import { videointerface, content } from '../../interfaces/categories';
import VideoPreview from '../../components/VideoPreview';
const Games = () => {
  const router = useRouter();
  const [vidoes, setVideos] = useState<videointerface[]>([]);
  const fetchVideos = async () => {
    try {
      const vids = await fetchVideosFromApi(`search/?q=gaming&hl=en&gl=US`);

      console.log(vids);
      setVideos(vids.contents);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <div className="categoriestab">
      <CategoryHeader
        title="games"
        description="Live streams of all your favorite games, from shooters to platformers
        and everything in between"
      />
      <CategoriesTab currentTab={router.pathname} />

      <p className="px-8 pb-5 text-xl font-semibold">
        Recommended Gaming Streams
      </p>

      <div className="grid grid-cols-1 px-8 sm:grid-cols-2 md:grid-cols-4">
        {vidoes.map((video, index: number) => (
          <VideoPreview
            id={video.video?.videoId}
            image={video.video?.thumbnails[0]?.url}
            title={video.video?.title}
            viewers={''}
            channelImage={video.video?.author?.avatar[0].url}
            channelName={video.video?.author?.title}
            tag1={''}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Games;
