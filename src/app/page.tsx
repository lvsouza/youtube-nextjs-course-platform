import { Metadata } from 'next';

import { Section } from '@/components/section/Section';


export const metadata: Metadata = {
  title: "CodarSe - Página inicial"
};

export default function PageHome() {
  return (
    <main>
      <Section
        variant='h-list'
        title='Veja mais cursos'
      />
    </main>
  );
}
