import { Metadata } from 'next';

import { CourseContent } from '@/components/course-content/CourseContent';
import { CourseHeader } from '@/components/course-header/CourseHeader';
import { APIYouTube } from '@/shared/services/api-youtube';
import { StartCourse } from '@/components/StartCourse';


interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const courseDetail = await APIYouTube.course.getById(params.id);

  return {
    title: courseDetail.title,
    description: courseDetail.description,
    openGraph: {
      locale: 'pt_BR',
      type: 'video.other',
      title: courseDetail.title,
      images: courseDetail.image,
      description: courseDetail.description,
      videos: courseDetail.classGroups
        .reduce<string[]>((previous, current) => [
          ...previous,
          ...current.classes.map(classItem => `https://codarse.com/player/${current.courseId}/${classItem.id}`),
        ], []),
    }
  };
};

export default async function PageCourseDetail({ params }: Props) {
  const courseDetail = await APIYouTube.course.getById(params.id);

  const firstClass = courseDetail.classGroups.at(0)?.classes.at(0);


  return (
    <main className='mt-8 flex justify-center'>
      <div className='w-full min-[880px]:max-w-[880px] px-2 flex flex-col gap-4 lg:px-0 md:flex-row-reverse'>

        {firstClass && (
          <div className='flex-1'>
            <StartCourse
              idClass={firstClass.id}
              title={firstClass.title}
              idCourse={courseDetail.id}
              imageUrl={courseDetail.image}
            />
          </div>
        )}

        <div className='flex-[2] flex flex-col gap-12 pb-12'>
          <CourseHeader
            title={courseDetail.title}
            description={courseDetail.description}
            numberOfClasses={courseDetail.numberOfClasses}
          />

          <CourseContent classGroups={courseDetail.classGroups} />
        </div>
      </div>
    </main>
  );
}
