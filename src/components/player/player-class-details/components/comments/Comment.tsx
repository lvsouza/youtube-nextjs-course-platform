import Image from 'next/image';
import { MdArrowDropDown, MdThumbUp } from 'react-icons/md';


interface ICommentProps {
  //children: React.ReactNode;
}
export const Comment = ({ }: ICommentProps) => {

  return (
    <div className='flex gap-2 items-start'>
      <Image
        width={40}
        height={40}

        draggable={false}
        className='rounded-full'

        alt='Imagem de perfil'
        src={'https://yt3.ggpht.com/mrBfIDtsXB_Q-NFs_MDN5e3SnfBwX-ONlw6weUSnFkid-b6mQx5QCfXJO0NVZKay9y1qQGyo=s48-c-k-c0x00ffffff-no-rj'}
      />

      <div className='bg-paper flex-1 flex flex-col gap-4 p-2 rounded'>
        <div className='flex gap-2 items-center'>
          <span className='font-bold'>
            User name
          </span>

          <span className='font-extrabold text-xs opacity-50'>
            25/07/2005 às 15:25
          </span>
        </div>

        <p>Comment</p>

        <div className='flex gap-4'>
          <div className='flex gap-1 items-center'>
            <MdThumbUp />

            <span>5</span>
          </div>

          <button className='flex gap-1 items-center text-primary'>
            <MdArrowDropDown size={24} />

            <span>Ver respostas (5)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
