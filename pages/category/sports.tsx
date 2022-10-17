import React, { useEffect, useState } from 'react';
import CategoriesTab from '../../components/CategoriesTab';
import { useRouter } from 'next/router';
import CategoryHeader from '../../components/CategoryHeader';
import { fetchVideosFromApi } from '../../axios/global';
import VideoPreview from '../../components/VideoPreview';
import VideoSkeletonList from '../../components/VideoSkeletonList';
import { videointerface } from '../../interfaces/categories';

const Sports = () => {
  const router = useRouter();
  const [vidoes, setVideos] = useState<videointerface[]>([]);
  const [fetching, setFetching] = useState(false);
  const fetchVideos = async () => {
    setFetching(true);
    try {
      const vids = await fetchVideosFromApi(`search/?q=sports&hl=en&gl=US`);

      console.log(vids);
      setVideos(vids.contents);
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
    <div className="categoriestab">
      <CategoryHeader
        title="Esports"
        description="Live tournaments, match highlights, and your favorite pro players all in one place"
      />

      <CategoriesTab currentTab={router.pathname} />
      <p className="px-8 pb-5 text-xl font-semibold">
        Recommended Sport Streams
      </p>

      <div className="grid grid-cols-1 gap-3 px-8 sm:grid-cols-2 md:grid-cols-4">
        {fetching ? (
          <VideoSkeletonList />
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Sports;
