import { PlayerClassDetails, PlayerHeader, PlayerPlaylist } from '@/components/player';
import { APIYouTube } from '@/shared/services/api-youtube';


interface Props {
  params: {
    classId: string;
    courseId: string;
  }
}
export default async function PagePlayer({ params: { classId, courseId } }: Props) {
  const courseDetails = await APIYouTube.course.getById(courseId);
  const classDetails = await APIYouTube.class.getById(classId);


  const classGroupsData = courseDetails.classGroups.map(classGroup => ({
    title: classGroup.title,
    classes: classGroup.classes.map(classItem => ({
      done: false,
      classId: classItem.id,
      title: classItem.title,
    }))
  }));


  return (
    <main className='flex flex-col gap-2 h-screen'>
      <PlayerHeader
        title={classDetails.title}
        subtitle={courseDetails.title}
      />

      <div className='flex gap-2 h-[calc(100vh-72px)]'>
        <div className='max-w-96 hidden md:block'>
          <PlayerPlaylist
            playingClassId={classId}
            playingCourseId={courseId}
            classGroups={classGroupsData}
          />
        </div>

        <PlayerClassDetails
          classItem={{ ...classDetails, id: classId }}
          course={{ ...courseDetails, classGroups: classGroupsData }}
        />
      </div>
    </main>
  );
}
