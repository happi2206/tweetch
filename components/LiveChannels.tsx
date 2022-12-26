import React, { useEffect, useState } from 'react';
import { fetchVideosFromApi } from '../axios/global';
import { videointerface } from '../interfaces/categories';
import VideoPreview from './VideoPreview';
import VideoSkeletonList from './VideoSkeletonList';

interface Props {
  fetching: boolean;
  videos: videointerface[];
}

const LiveChannels = ({ fetching, videos }: Props) => {
  return (
    <div className="px-8">
      <h2 className="text-base font-bold text-gray-200 md:text-xl">
        Live Channels we think you&apos;ll like
      </h2>

      <div className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-2 md:grid-cols-4">
        {fetching ? (
          <VideoSkeletonList shortlist />
        ) : (
          <>
            {videos &&
              videos.map((video, index: number) => (
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

export default LiveChannels;
