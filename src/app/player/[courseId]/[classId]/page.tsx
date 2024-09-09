import { PlayerHeader, PlayerPlaylist, PlayerVideoPlayer } from '@/components/player';


interface Props {
  params: {
    classId: string;
    courseId: string;
  }
}
export default function PagePlayer({ params: { classId, courseId } }: Props) {


  return (
    <main className='flex flex-col gap-2 h-screen'>
      <PlayerHeader
        title='API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias usadas e muito mais'
        subtitle='🏆 Curso de API Rest, Node e Typescript'
      />

      <div className='flex gap-2 h-[calc(100vh-72px)]'>
        <div className='max-w-96'>
          <PlayerPlaylist
            playingClassId={classId}
            playingCourseId={courseId}
            classGroups={[
              {
                title: '1 - Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-00',
                    title: 'API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-01',
                    title: 'API Rest, Node e Typescript: #01 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-02',
                    title: 'API Rest, Node e Typescript: #02 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-03',
                    title: 'API Rest, Node e Typescript: #03 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              },
              {
                title: '2 - Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-04',
                    title: 'API Rest, Node e Typescript: #04 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-05',
                    title: 'API Rest, Node e Typescript: #05 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-06',
                    title: 'API Rest, Node e Typescript: #06 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-07',
                    title: 'API Rest, Node e Typescript: #07 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              },
              {
                title: '3 - Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-04',
                    title: 'API Rest, Node e Typescript: #04 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-05',
                    title: 'API Rest, Node e Typescript: #05 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-06',
                    title: 'API Rest, Node e Typescript: #06 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-07',
                    title: 'API Rest, Node e Typescript: #07 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              },
              {
                title: '4 - Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-04',
                    title: 'API Rest, Node e Typescript: #04 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-05',
                    title: 'API Rest, Node e Typescript: #05 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-06',
                    title: 'API Rest, Node e Typescript: #06 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-07',
                    title: 'API Rest, Node e Typescript: #07 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              },
              {
                title: '5 - Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-04',
                    title: 'API Rest, Node e Typescript: #04 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-05',
                    title: 'API Rest, Node e Typescript: #05 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-06',
                    title: 'API Rest, Node e Typescript: #06 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-07',
                    title: 'API Rest, Node e Typescript: #07 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              },
              {
                title: '6 - Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-04',
                    title: 'API Rest, Node e Typescript: #04 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-05',
                    title: 'API Rest, Node e Typescript: #05 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-06',
                    title: 'API Rest, Node e Typescript: #06 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-07',
                    title: 'API Rest, Node e Typescript: #07 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              },
              {
                title: '7 - Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-04',
                    title: 'API Rest, Node e Typescript: #04 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-05',
                    title: 'API Rest, Node e Typescript: #05 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-06',
                    title: 'API Rest, Node e Typescript: #06 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-07',
                    title: 'API Rest, Node e Typescript: #07 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              },
              {
                title: '8 - Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-04',
                    title: 'API Rest, Node e Typescript: #04 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-05',
                    title: 'API Rest, Node e Typescript: #05 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-06',
                    title: 'API Rest, Node e Typescript: #06 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-07',
                    title: 'API Rest, Node e Typescript: #07 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              },
              {
                title: '9 - Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-04',
                    title: 'API Rest, Node e Typescript: #04 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-05',
                    title: 'API Rest, Node e Typescript: #05 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-06',
                    title: 'API Rest, Node e Typescript: #06 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-07',
                    title: 'API Rest, Node e Typescript: #07 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              },
              {
                title: '10 - Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-04',
                    title: 'API Rest, Node e Typescript: #04 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-05',
                    title: 'API Rest, Node e Typescript: #05 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-06',
                    title: 'API Rest, Node e Typescript: #06 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-07',
                    title: 'API Rest, Node e Typescript: #07 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              },
              {
                title: '11 - Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-04',
                    title: 'API Rest, Node e Typescript: #04 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-05',
                    title: 'API Rest, Node e Typescript: #05 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-06',
                    title: 'API Rest, Node e Typescript: #06 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-07',
                    title: 'API Rest, Node e Typescript: #07 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              },
              {
                title: '12 - Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-04',
                    title: 'API Rest, Node e Typescript: #04 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-05',
                    title: 'API Rest, Node e Typescript: #05 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-06',
                    title: 'API Rest, Node e Typescript: #06 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-07',
                    title: 'API Rest, Node e Typescript: #07 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              },
              {
                title: '13 - Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-04',
                    title: 'API Rest, Node e Typescript: #04 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-05',
                    title: 'API Rest, Node e Typescript: #05 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-06',
                    title: 'API Rest, Node e Typescript: #06 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-07',
                    title: 'API Rest, Node e Typescript: #07 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              },
              {
                title: '14 - Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-04',
                    title: 'API Rest, Node e Typescript: #04 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-05',
                    title: 'API Rest, Node e Typescript: #05 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-06',
                    title: 'API Rest, Node e Typescript: #06 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-07',
                    title: 'API Rest, Node e Typescript: #07 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              },
              {
                title: '15 - Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-04',
                    title: 'API Rest, Node e Typescript: #04 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-05',
                    title: 'API Rest, Node e Typescript: #05 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-06',
                    title: 'API Rest, Node e Typescript: #06 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-07',
                    title: 'API Rest, Node e Typescript: #07 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              }
            ]}
          />
        </div>

        <div className='flex-1'>
          <div className='aspect-video'>
            <PlayerVideoPlayer
              videoId='bP47qRVRqQs'
            />
          </div>
        </div>
      </div>
    </main>
  );
}
