import { Metadata } from 'next';

import { Card } from '@/components/card/Card';


export const metadata: Metadata = {
  title: "CodarSe - Página inicial"
};

export default function PageHome() {
  return (
    <main>
      <Card />
    </main>
  );
}
