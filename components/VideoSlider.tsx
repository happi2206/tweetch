import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { videointerface } from '../interfaces/categories';
interface Props {
  video: videointerface;
}

const VideoSlider = ({ video }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <div className="flex items-center">
        {video.video?.movingThumbnails &&
          JSON.stringify(video.video.movingThumbnails[0].url)}
      </div>
    </div>
  );
};

export default VideoSlider;
