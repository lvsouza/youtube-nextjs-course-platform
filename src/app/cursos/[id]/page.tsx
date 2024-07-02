import { Metadata } from 'next';


interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // vai na api do you tube e busca os dados necessários

  return {
    title: params.id,
    description: params.id,
  };
};

export default function PageCourseDetail({ params }: Props) {



  return (
    <main className='mt-8 flex justify-center'>
      Detalhe do curso {params.id}
    </main>
  );
}
