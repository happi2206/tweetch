import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchVideosFromApi } from '../../axios/global';
import StreamChat from '../../components/StreamChat';
import { Icon } from '@iconify/react';
import VideoSkeleton from '../../components/VideoSkeleton';
const Videopage = () => {
  const router = useRouter();

  const [video, setVideo] = useState<string>('');
  const [expanded, setExpanded] = useState(true);
  const [fetching, setFetching] = useState(false);
  const fetchVideos = async () => {
    setFetching(true);
    try {
      const { videopage: id } = router.query;
      if (id) {
        const vid = await fetchVideosFromApi(`video/streaming-data/?id=${id}`);
        setVideo(vid.formats[1].url);
      }
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
    <div className="flex mt-[3.5rem] duration-500 n">
      <div className="relative w-full">
        {fetching ? (
          <VideoSkeleton isFullPage />
        ) : (
          <video src={video} controls className="w-full max-h-[70vh]" />
        )}

        <div
          className={`absolute top-2 right-2.5 w-18 ${
            expanded ? 'hidden' : 'block'
          }`}
          onClick={() => setExpanded(!expanded)}
        >
          <span className="w-full text-white cursor-pointer">
            <Icon icon="mdi:arrow-expand-left" />
          </span>
        </div>
      </div>
      <div>
        <StreamChat
          expandWidth={() => setExpanded(!expanded)}
          expanded={expanded}
        />
      </div>
    </div>
  );
};

export default Videopage;
