import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { videointerface } from '../interfaces/categories';
import VideoSkeleton from './VideoSkeleton';
import Image from 'next/image';
import LivePreview from './LivePreview';
interface Props {
  fetching: boolean;
  videos: videointerface[];
}
const VideoCarousel = ({ fetching, videos }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(3);

  const getViewerEstimate = (viewer: string | undefined) => {
    if (viewer) {
      const num = Number(viewer);
      return Math.abs(num) > 999
        ? Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(1)) + 'k'
        : Math.sign(num) * Math.abs(num);
    }
    return;
  };

  return (
    <div className="px-8 my-20">
      <div className="m-auto ">
        {fetching ? (
          <VideoSkeleton />
        ) : (
          <div className="flex justify-between w-full">
            <div className="flex items-center w-24">
              {currentIndex !== 0 && (
                <span
                  className="text-white rounded-md cursor-pointer hover:bg-gray-500"
                  onClick={() => setCurrentIndex(currentIndex - 1)}
                >
                  <Icon
                    width={30}
                    icon="material-symbols:chevron-left-rounded"
                  />
                </span>
              )}
            </div>

            <div className="flex">
              {currentIndex !== 0 &&
                videos[currentIndex] &&
                videos[currentIndex].video && (
                  <div className="py-10">
                    <LivePreview
                      srcUrl={
                        videos[currentIndex - 1]?.video?.movingThumbnails
                          ? videos[currentIndex - 1]?.video?.movingThumbnails[0]
                              .url
                          : videos[currentIndex - 1]?.video?.thumbnails[0].url
                      }
                      alt={`${videos[currentIndex].video?.author.title} Channel`}
                    />
                  </div>
                )}

              <div className="relative flex">
                {videos[currentIndex] && videos[currentIndex].video && (
                  <LivePreview
                    srcUrl={
                      videos[currentIndex]?.video?.movingThumbnails
                        ? videos[currentIndex]?.video?.movingThumbnails[0].url
                        : videos[currentIndex]?.video?.thumbnails[0].url
                    }
                    width={600}
                    height={200}
                    alt={`${videos[currentIndex].video?.author.title} Channel`}
                  />
                )}
                {videos[currentIndex] &&
                  videos[currentIndex].video &&
                  videos[currentIndex]?.video?.isLiveNow && (
                    <div className="absolute text-xs px-1 py-0.5 font-semibold bg-red-600 rounded top-4 text-white left-4">
                      <p className="uppercase"> Live</p>
                    </div>
                  )}
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

                      <div className="w-40">
                        <p className="font-semibold text-purple-400">
                          {videos[currentIndex].video.author.title}
                        </p>
                        {videos[currentIndex]?.video.stats &&
                          videos[currentIndex]?.video.stats?.viewers && (
                            <span className="text-xs text-white">
                              {getViewerEstimate(
                                videos[currentIndex]?.video?.stats?.viewers
                              )}{' '}
                              viewers
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="my-2 space-x-3">
                      {videos[currentIndex]?.video.badges.map((item, index) => (
                        <span key={index} className="tags">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div>
                      <p className="w-40 min-w-full text-sm break-words">
                        {videos[currentIndex]?.video.descriptionSnippet}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {currentIndex !== videos.length - 1 &&
                videos[currentIndex] &&
                videos[currentIndex].video && (
                  <div className="py-10">
                    <LivePreview
                      srcUrl={
                        videos[currentIndex + 1]?.video?.movingThumbnails
                          ? videos[currentIndex + 1]?.video?.movingThumbnails[0]
                              .url
                          : videos[currentIndex + 1]?.video?.thumbnails[0].url
                      }
                      alt={`${videos[currentIndex].video?.author.title} Channel`}
                    />
                  </div>
                )}
            </div>

            <div className="flex items-center w-24">
              {currentIndex !== videos.length - 1 && (
                <span
                  className="text-white rounded-md cursor-pointer hover:bg-gray-500"
                  onClick={() => setCurrentIndex(currentIndex + 1)}
                >
                  <Icon
                    width={30}
                    icon="material-symbols:chevron-right-rounded"
                  />
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCarousel;
