'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { IPlayerClassGroupProps, PlayerClassGroup } from './components/PlayerClassGroup';


interface IPlayerPlaylistProps {
  playingClassId: string;
  playingCourseId: string;
  classGroups: Pick<IPlayerClassGroupProps, 'classes' | 'title'>[];
}
export const PlayerPlaylist = ({ classGroups, playingClassId, playingCourseId }: IPlayerPlaylistProps) => {
  const [openedIndex, setOpenedIndex] = useState<number | undefined>(undefined);


  const router = useRouter();


  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-col p-4 bg-paper'>
        <h3 className='text-lg font-bold'>
          Conteúdo do curso
        </h3>
      </div>

      <ol>
        {classGroups.map((classGroup, index) => (
          <li key={classGroup.title}>
            <PlayerClassGroup
              {...classGroup}

              playingClassId={playingClassId}

              position={index + 1}
              open={openedIndex === index}
              onToggle={() => setOpenedIndex(openedIndex === index ? undefined : index)}

              onCheck={classId => console.log('check', classId)}
              onPlay={(classId) => router.push(`/player/${playingCourseId}/${classId}`)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};
