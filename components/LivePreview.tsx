import React from 'react';
import Image from 'next/image';
interface Props {
  srcUrl: string;
  width?: number;
  height?: number;
  alt: string;
}

const LivePreview = ({
  srcUrl = '',
  width = 100,
  height = 300,
  alt = 'Live preview',
}: Props) => {
  return <Image src={srcUrl} width={width} height={height} alt={alt} />;
};

export default LivePreview;
