import Image, { StaticImageData } from 'next/image';
import { FoldableImage } from '../../../components/molecules/foldableSpan';
import { CommentCard } from '@/components/molecules/commentCard';

interface CommentProps {
  name: string;
  profile: StaticImageData;
  text: string;
  time: Date;
  images?: StaticImageData[];
}

export const Comment = ({
  name,
  profile,
  text,
  time,
  images = [],
}: CommentProps) => {
  return (
    <div className='relative w-full p-[20px]'>
      <div className='flex w-full gap-[12px]'>
        <div className='w-[44px]'>
          <Image src={profile} width={44} height={44} alt='프로필' />
        </div>
        <div className='flex-1 text-white'>
          <CommentCard name={name} text={text} time={time} />

          <FoldableImage
            images={images}
            spanText={`${images.length - 3}개 더보기`}
          />
        </div>
      </div>
    </div>
  );
};
