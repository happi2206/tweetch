import React, { useEffect, useState } from 'react';
import router, { useRouter } from 'next/router';
import { fetchVideosFromApi } from '../../axios/global';
import CategoriesTab from '../../components/CategoriesTab';
import CategoryHeader from '../../components/CategoryHeader';
import VideoPreview from '../../components/VideoPreview';
import VideoSkeletonList from '../../components/VideoSkeletonList';
import { videointerface } from '../../interfaces/categories';

const SearchPage = () => {
  const { query } = useRouter();
  const [videos, setVideos] = useState<videointerface[]>([]);
  const [fetching, setFetching] = useState(false);
  const [image, setImage] = useState('');

  const fetchVideos = async () => {
    setFetching(true);
    try {
      const searchString = query.SearchPage?.toString()?.replace(
        /[^A-Za-z]+/g,
        ' '
      );

      console.log(searchString);

      if (searchString) {
        const vids = await fetchVideosFromApi(
          `search/?q=${searchString}&hl=en&gl=US`
        );
        setVideos(vids.contents);
        setFetching(false);
      }
      console.log(videos);
      setFetching(false);
    } catch (err) {
      console.error(err);
      setFetching(false);
    }
  };
  useEffect(() => {
    fetchVideos();
  }, [query]);
  return (
    <div className="categoriestab">
      <CategoryHeader
        title={query.SearchPage ? query.SearchPage : ''}
        description={`Creators talking about ${query.SearchPage}`}
      />

      <div className="grid grid-cols-1 gap-3 px-8 sm:grid-cols-2 md:grid-cols-4">
        {fetching ? (
          <VideoSkeletonList />
        ) : (
          <>
            {videos.map((video, index: number) => (
              <VideoPreview
                id={video.video?.videoId}
                image={video.video?.thumbnails[0]?.url}
                title={video.video?.title}
                viewers={''}
                channelImage={video.video?.author?.avatar[0].url}
                channelName={video.video?.author?.title}
                tag1={''}
                key={index}
                isLiveNow={video.video?.isLiveNow}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
