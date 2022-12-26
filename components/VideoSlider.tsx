import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { videointerface } from '../interfaces/categories';
interface Props {
  videos: videointerface[];
}

const slideStyles = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const rightArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  right: '32px',
  fontSize: '45px',
  color: '#fff',
  zIndex: 1,
  cursor: 'pointer',
};

const leftArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  left: '32px',
  fontSize: '45px',
  color: '#fff',
  zIndex: 1,
  cursor: 'pointer',
};

const sliderStyles = {
  position: 'relative',
  height: '100%',
};

const dotsContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
};

const dotStyle = {
  margin: '0 3px',
  cursor: 'pointer',
  fontSize: '20px',
};

const VideoSlider = ({ videos }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? videos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === videos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      <div>
        <div className="cursor-pointer" onClick={goToPrevious}>
          ❰
        </div>
        <div className="cursor-pointer" onClick={goToNext}>
          ❱
        </div>
      </div>

      <div className="flex items-center">
        {videos.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            {
              slide.video?.movingThumbnails &&
                JSON.stringify(videos[slideIndex])
              //   <Image
              //     src={videos[slideIndex].video?.movingThumbnails[0]?.url}
              //     alt="hey"
              //     width={200}
              //     height={200}
              //   />
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;
