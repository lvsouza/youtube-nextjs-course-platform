'use client';
import { useRouter } from 'next/navigation';

import { IPlayerClassGroupProps } from '../playlist/components/PlayerClassGroup';
import { PlayerVideoPlayer } from './components/PlayerVideoPlayer';
import { useMemo } from 'react';


interface IPlayerClassDetailsProps {
  playingClassId: string;
  playingCourseId: string;
  classGroups: Pick<IPlayerClassGroupProps, 'classes' | 'title'>[];
}
export const PlayerClassDetails = ({ playingCourseId, playingClassId, classGroups }: IPlayerClassDetailsProps) => {
  const router = useRouter();


  const nextClassId = useMemo(() => {
    const classes = classGroups.flatMap(classGroup => classGroup.classes);

    const currentClassIndex = classes.findIndex(classItem => classItem.classId === playingClassId);

    const nextClassIndex = currentClassIndex + 1;

    if (nextClassIndex === classes.length) {
      return undefined;
    }

    return classes[nextClassIndex].classId;
  }, [classGroups, playingClassId]);


  return (
    <div className='flex-1'>
      <div className='aspect-video'>
        <PlayerVideoPlayer
          videoId='bP47qRVRqQs'
          onPlayNext={() => nextClassId ? router.push(`/player/${playingCourseId}/${nextClassId}`) : {}}
        />
      </div>

      <div>
        Descrição
      </div>
    </div>
  );
};
