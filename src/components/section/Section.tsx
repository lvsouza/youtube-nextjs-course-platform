'use client';
import { useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { Card, ICardProps } from '../card/Card';


interface ISectionProps {
  title: string;
  items: ICardProps[];
  variant: 'grid' | 'h-list';
}
export const Section = ({ title, items, variant = 'grid' }: ISectionProps) => {
  const scrollRef = useRef<HTMLUListElement>(null);


  const handleScroll = (scroll: number) => {
    const currentScrollLeft = scrollRef.current?.scrollLeft || 0;
    scrollRef.current?.scrollTo({ behavior: 'smooth', left: currentScrollLeft + scroll });
  };


  return (
    <section className='flex flex-col gap-4 px-4'>
      <h2 className='font-bold text-xl'>
        {title}
      </h2>

      <ul
        ref={scrollRef}
        data-variant={variant}
        className='grid gap-2 grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto'
      >
        <button
          onClick={() => handleScroll(-350)}
          className='h-14 w-14 bg-primary rounded-full flex items-center justify-center sticky my-auto left-0 -ml-14'
        >
          <MdKeyboardArrowLeft size={32} />
        </button>

        {items.map(item => (
          <li key={item.title} data-variant={variant} className='w-full data-[variant=h-list]:sm:w-72'>
            <Card
              href={item.href}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          </li>
        ))}

        <button
          onClick={() => handleScroll(350)}
          className='h-14 w-14 bg-primary rounded-full flex items-center justify-center sticky my-auto right-0 -ml-14'
        >
          <MdKeyboardArrowRight size={32} />
        </button>
      </ul>
    </section>
  );
};

