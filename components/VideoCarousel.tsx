import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import VideoSlider from './VideoSlider';
import { videointerface } from '../interfaces/categories';
import VideoSkeleton from './VideoSkeleton';

interface Props {
  fetching: boolean;
  videos: videointerface[];
}
const VideoCarousel = ({ fetching, videos }: Props) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    console.log(videos);
  }, []);
  return (
    <div className="mt-20">
      <div className="m-auto h-72">
        {fetching ? (
          <VideoSkeleton />
        ) : (
          <div className="flex w-full">
            {videos && <div>{<VideoSlider videos={videos} />}</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCarousel;
