'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { MdComment, MdThumbUp, MdVisibility } from 'react-icons/md';
import * as Tabs from '@radix-ui/react-tabs';
import { useRouter } from 'next/navigation';

import { IPlayerVideoPlayerRef, PlayerVideoPlayer } from './components/PlayerVideoPlayer';
import { IPlayerClassGroupProps } from '../playlist/components/PlayerClassGroup';
import { CourseHeader } from '@/components/course-header/CourseHeader';
import { PlayerClassHeader } from './components/PlayerClassHeader';
import { PlayerPlaylist } from '../playlist/PlayerPlaylist';
import { Comments } from './components/comments/Comments';


interface IPlayerClassDetailsProps {
  course: {
    id: string;
    title: string;
    description: string;
    numberOfClasses: number;
    classGroups: Pick<IPlayerClassGroupProps, 'classes' | 'title'>[];
  };
  classItem: {
    id: string;
    title: string;
    videoId: string;
    viewsCount: number;
    likesCount: number;
    description: string;
    commentsCount: number;
  };
}
export const PlayerClassDetails = ({ course, classItem }: IPlayerClassDetailsProps) => {
  const router = useRouter();

  const playerVideoPlayerRef = useRef<IPlayerVideoPlayerRef>(null);

  const [currentTab, setCurrentTab] = useState('class-details');


  useEffect(() => {
    const matchMedia = window.matchMedia("(min-width: 768px)");

    const handleMatchMedia = (e: MediaQueryListEvent) => {
      if (e.matches && currentTab === 'course-playlist') {
        setCurrentTab('class-details');
      }
    };

    matchMedia.addEventListener('change', handleMatchMedia);
    return () => matchMedia.removeEventListener('change', handleMatchMedia);
  }, [currentTab]);


  const nextClassId = useMemo(() => {
    const classes = course.classGroups.flatMap(classGroup => classGroup.classes);

    const currentClassIndex = classes.findIndex(({ classId }) => classId === classItem.id);

    const nextClassIndex = currentClassIndex + 1;

    if (nextClassIndex === classes.length) {
      return undefined;
    }

    return classes[nextClassIndex].classId;
  }, [course.classGroups, classItem.id]);


  return (
    <div className='flex-1 overflow-auto pb-10'>
      <div className='aspect-video'>
        <PlayerVideoPlayer
          ref={playerVideoPlayerRef}
          videoId={classItem.videoId}
          onPlayNext={() => nextClassId ? router.push(`/player/${course.id}/${nextClassId}`) : {}}
        />
      </div>

      <div className='flex gap-2 p-2 opacity-50'>
        <div className='flex gap-1 items-center'>
          <MdVisibility />
          <span>{classItem.viewsCount}</span>
          <span>visualizações</span>
        </div>
        <a className='flex gap-1 items-center' target='_blank' href={`https://www.youtube.com/watch?v=${classItem.videoId}`}>
          <MdThumbUp />
          <span>{classItem.likesCount}</span>
          <span>curtidas</span>
        </a>
        <div className='flex gap-1 items-center'>
          <MdComment />
          <span>{classItem.commentsCount}</span>
          <span>comentários</span>
        </div>
      </div>

      <Tabs.Root value={currentTab} onValueChange={value => setCurrentTab(value)}>
        <Tabs.List className='flex gap-4'>
          <Tabs.Trigger
            value='class-details'
            className='p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary'
          >
            Visão geral
          </Tabs.Trigger>
          <Tabs.Trigger
            value='course-playlist'
            className='p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary md:hidden'
          >
            Conteúdo do curso
          </Tabs.Trigger>
          <Tabs.Trigger
            value='class-comments'
            className='p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary'
          >
            Comentários
          </Tabs.Trigger>
          <Tabs.Trigger
            value='course-details'
            className='p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary'
          >
            Visão geral do curso
          </Tabs.Trigger>
        </Tabs.List>

        <hr className='border-paper mb-2' />

        <Tabs.Content value='class-details' className='px-2'>
          <PlayerClassHeader
            title={classItem.title}
            description={classItem.description}
            onTimeClick={seconds => playerVideoPlayerRef.current?.setProgress(seconds)}
          />
        </Tabs.Content>
        <Tabs.Content value='course-playlist' className='px-2'>
          <PlayerPlaylist
            playingCourseId={course.id}
            playingClassId={classItem.id}
            classGroups={course.classGroups}
          />
        </Tabs.Content>
        <Tabs.Content value='class-comments' className='px-2'>
          <Comments
            comments={[
              {
                likesCount: 15,
                replies: undefined,
                content: 'My comment',
                publishDate: '2024-09-09T20:16:37Z',
                author: {
                  userName: '@LucasSouzaDev',
                  image: 'https://yt3.ggpht.com/mrBfIDtsXB_Q-NFs_MDN5e3SnfBwX-ONlw6weUSnFkid-b6mQx5QCfXJO0NVZKay9y1qQGyo=s48-c-k-c0x00ffffff-no-rj',
                }
              },
              {
                likesCount: 15,
                content: 'My comment',
                publishDate: '2024-09-09T20:16:37Z',
                author: {
                  userName: '@LucasSouzaDev',
                  image: 'https://yt3.ggpht.com/mrBfIDtsXB_Q-NFs_MDN5e3SnfBwX-ONlw6weUSnFkid-b6mQx5QCfXJO0NVZKay9y1qQGyo=s48-c-k-c0x00ffffff-no-rj',
                },
                replies: [
                  {
                    likesCount: 15,
                    replies: undefined,
                    content: 'My reply',
                    publishDate: '2024-09-09T20:16:37Z',
                    author: {
                      userName: '@LucasSouzaDev',
                      image: 'https://yt3.ggpht.com/mrBfIDtsXB_Q-NFs_MDN5e3SnfBwX-ONlw6weUSnFkid-b6mQx5QCfXJO0NVZKay9y1qQGyo=s48-c-k-c0x00ffffff-no-rj',
                    }
                  },
                  {
                    likesCount: 15,
                    replies: undefined,
                    content: 'My reply',
                    publishDate: '2024-09-09T20:16:37Z',
                    author: {
                      userName: '@LucasSouzaDev',
                      image: 'https://yt3.ggpht.com/mrBfIDtsXB_Q-NFs_MDN5e3SnfBwX-ONlw6weUSnFkid-b6mQx5QCfXJO0NVZKay9y1qQGyo=s48-c-k-c0x00ffffff-no-rj',
                    }
                  }
                ],
              },
              {
                likesCount: 15,
                content: 'My comment',
                publishDate: '2024-09-09T20:16:37Z',
                author: {
                  userName: '@LucasSouzaDev',
                  image: 'https://yt3.ggpht.com/mrBfIDtsXB_Q-NFs_MDN5e3SnfBwX-ONlw6weUSnFkid-b6mQx5QCfXJO0NVZKay9y1qQGyo=s48-c-k-c0x00ffffff-no-rj',
                },
                replies: [
                  {
                    likesCount: 15,
                    replies: undefined,
                    content: 'My reply',
                    publishDate: '2024-09-09T20:16:37Z',
                    author: {
                      userName: '@LucasSouzaDev',
                      image: 'https://yt3.ggpht.com/mrBfIDtsXB_Q-NFs_MDN5e3SnfBwX-ONlw6weUSnFkid-b6mQx5QCfXJO0NVZKay9y1qQGyo=s48-c-k-c0x00ffffff-no-rj',
                    }
                  },
                  {
                    likesCount: 15,
                    replies: undefined,
                    content: 'My reply',
                    publishDate: '2024-09-09T20:16:37Z',
                    author: {
                      userName: '@LucasSouzaDev',
                      image: 'https://yt3.ggpht.com/mrBfIDtsXB_Q-NFs_MDN5e3SnfBwX-ONlw6weUSnFkid-b6mQx5QCfXJO0NVZKay9y1qQGyo=s48-c-k-c0x00ffffff-no-rj',
                    }
                  }
                ],
              }
            ]}
          />
        </Tabs.Content>
        <Tabs.Content value='course-details' className='px-2'>
          <CourseHeader
            title={course.title}
            description={course.description}
            numberOfClasses={course.numberOfClasses}
          />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};
