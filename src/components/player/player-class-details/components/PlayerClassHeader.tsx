import dynamic from 'next/dynamic';
import { UrlMatcher } from 'interweave-autolink';
import { useMemo } from 'react';

const Interweave = dynamic(() => import('interweave').then(result => result.Interweave), { ssr: false });


interface IPlayerClassHeaderProps {
  title: string;
  description: string;
}
export const PlayerClassHeader = ({ description, title }: IPlayerClassHeaderProps) => {

  const urlMatcher = useMemo(() => {
    return new UrlMatcher(
      'UrlMatcher',
      { validateTLD: false },
      ({ url }) => (
        <a href={url} target='_blank' className='text-primary'>
          {url}
        </a>
      )
    );
  }, []);


  return (
    <div className='flex gap-2 flex-col'>
      <h3 className='font-extrabold text-xl'>
        {title}
      </h3>

      <Interweave
        content={description}
        matchers={[urlMatcher]}
      />
    </div>
  );
};
