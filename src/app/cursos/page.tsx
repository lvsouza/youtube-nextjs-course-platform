import { Metadata } from 'next';

import { Section } from '@/components/section/Section';


export const metadata: Metadata = {
  title: "CodarSe - Todos os cursos"
};

export default function PageCursos() {


  return (
    <main>
      <Section
        variant='grid'
        title='Todos os cursos'
      />
    </main>
  );
}
