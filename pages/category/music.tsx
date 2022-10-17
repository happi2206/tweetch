import React, { useEffect, useState } from 'react';
import CategoriesTab from '../../components/CategoriesTab';
import { useRouter } from 'next/router';
import { fetchVideosFromApi } from '../../axios/global';
import VideoPreview from '../../components/VideoPreview';
import VideoSkeleton from '../../components/VideoSkeleton';
import { videointerface } from '../../interfaces/categories';
import VideoSkeletonList from '../../components/VideoSkeletonList';
const Music = () => {
  const router = useRouter();
  const [vidoes, setVideos] = useState<videointerface[]>([]);
  const [fetching, setFetching] = useState(false);
  const fetchVideos = async () => {
    setFetching(true);
    try {
      const vids = await fetchVideosFromApi(`search/?q=music&hl=en&gl=US`);

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
    <div className="relative mt-20">
      <div className="px-8 space-y-4">
        <h3 className="text-6xl font-bold text-gray-200">Music</h3>
        <p className="font-semibold text-gray-400 ">
          Your favorite artists and all the best live performances, music
          production, and special events
        </p>
      </div>
      <CategoriesTab currentTab={router.pathname} />
      <p className="px-8 pb-5 text-xl font-semibold">
        Recommended Music Streams
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

export default Music;
