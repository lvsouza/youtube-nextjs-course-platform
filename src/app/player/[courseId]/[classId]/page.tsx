import { PlayerHeader } from '@/components/player';


interface Props {
  params: {
    classId: string;
    courseId: string;
  }
}
export default function PagePlayer({ params: { classId, courseId } }: Props) {


  return (
    <>
      <PlayerHeader
        title='API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias usadas e muito mais'
        subtitle='🏆 Curso de API Rest, Node e Typescript'
      />

      Player {courseId} {classId}
    </>
  );
}
