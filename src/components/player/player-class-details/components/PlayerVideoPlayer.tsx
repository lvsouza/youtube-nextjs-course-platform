'use client';
import { useMemo, useState } from 'react';
import { MdPlayCircle } from 'react-icons/md';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });


interface IPlayerVideoPlayerProps {
  videoId: string;

  onPlayNext: () => void;
}
export const PlayerVideoPlayer = ({ videoId, onPlayNext }: IPlayerVideoPlayerProps) => {
  const [totalDuration, setTotalDuration] = useState<number | undefined>(undefined);
  const [progress, setProgress] = useState<number | undefined>(undefined);


  const secondsUntilEnd = useMemo(() => {
    if (!totalDuration) return undefined;
    if (!progress) return undefined;

    return Number((totalDuration - progress).toFixed(0));
  }, [progress, totalDuration]);

  const showNextButton = useMemo(() => {
    return !!secondsUntilEnd && secondsUntilEnd <= 30;
  }, [secondsUntilEnd]);


  return (
    <>
      {showNextButton && (
        <button
          onClick={onPlayNext}
          className='bg-primary p-3 px-4 rounded-lg font-bold flex gap-2 items-center absolute right-4 top-36'
        >
          Próxima aula em {secondsUntilEnd}
          <MdPlayCircle size={24} />
        </button>
      )}

      <ReactPlayer
        height='100%'
        width='100%'

        playing={true}
        controls={true}

        onEnded={() => onPlayNext()}

        onDuration={(duration) => setTotalDuration(duration)}
        onProgress={({ playedSeconds }) => setProgress(playedSeconds)}

        url={`https://www.youtube.com/watch?v=${videoId}`}
      />
    </>
  );
};
