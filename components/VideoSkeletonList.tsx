import React from 'react';
import VideoSkeleton from './VideoSkeleton';

const VideoSkeletonList = () => {
  return (
    <>
      {' '}
      {[...Array(25)].map((_i, index: number) => (
        <VideoSkeleton key={index} />
      ))}
    </>
  );
};

export default VideoSkeletonList;
