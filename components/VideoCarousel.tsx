import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import VideoSlider from './VideoSlider';
import { videointerface } from '../interfaces/categories';
import VideoSkeleton from './VideoSkeleton';
import Image, { StaticImageData } from 'next/image';
interface Props {
  fetching: boolean;
  videos: videointerface[];
}
const VideoCarousel = ({ fetching, videos }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState<any>();

  const getSlide = () => {};
  useEffect(() => {
    console.log(videos);
  }, []);
  return (
    <div className="px-8 my-20">
      <div className="m-auto ">
        {fetching ? (
          <VideoSkeleton />
        ) : (
          <div className="flex justify-between w-full">
            <span
              className="flex items-center w-24 text-white cursor-pointer"
              onClick={() => setCurrentIndex(currentIndex - 1)}
            >
              <Icon width={24} icon="material-symbols:chevron-left-rounded" />
            </span>
            <div className="flex">
              <Image
                src={
                  videos[currentIndex]?.video?.movingThumbnails
                    ? videos[currentIndex]?.video?.movingThumbnails[0].url
                    : videos[currentIndex]?.video?.thumbnails[0].url
                }
                width={700}
                height={300}
                alt="hey"
              />{' '}
              {videos[currentIndex] && videos[currentIndex].video && (
                <div className="p-5 bg-[#18181B]">
                  {' '}
                  <div className="flex items-start space-x-3 text-xs ">
                    <Image
                      src={videos[currentIndex]?.video?.author.avatar[0].url}
                      alt={`channel`}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />

                    <div className="w-20">
                      <p className="font-semibold text-purple-400">
                        {videos[currentIndex].video.author.title}
                      </p>
                    </div>
                  </div>
                  <div className="my-2">
                    {videos[currentIndex]?.video.badges.map((item, index) => (
                      <span key={index} className="tags">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="w-32 text-sm">
                      {videos[currentIndex]?.video.descriptionSnippet}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <span
              onClick={() => setCurrentIndex(currentIndex + 1)}
              className="flex items-center text-white break-words cursor-pointer w-28"
            >
              <Icon width={24} icon="material-symbols:chevron-right-rounded" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCarousel;
