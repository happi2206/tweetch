import React, { useEffect, useState } from 'react';
import CategoriesTab from '../../components/CategoriesTab';
import { useRouter } from 'next/router';
import CategoryHeader from '../../components/CategoryHeader';
import { fetchVideosFromApi } from '../../axios/global';
import VideoPreview from '../../components/VideoPreview';
import { videointerface } from '../../interfaces/categories';
import VideoSkeletonList from '../../components/VideoSkeletonList';
const IRL = () => {
  const router = useRouter();
  const [vidoes, setVideos] = useState<videointerface[]>([]);
  const [fetching, setFetching] = useState(false);
  const fetchVideos = async () => {
    setFetching(true);
    try {
      const vids = await fetchVideosFromApi(`search/?q=chat&hl=en&gl=US`);

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
        title="IRL"
        description="The home for everything from working out to exploring the world to
          chatting and beyond!"
      />

      <CategoriesTab currentTab={router.pathname} />
      <p className="px-8 pb-5 text-xl font-semibold">
        Recommended IRL Categories
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

export default IRL;
