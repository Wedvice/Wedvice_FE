import { Button } from '@/components/atoms/button';
import Image from 'next/image';
import LeftArrow from '@/assets/left_arrow.svg';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/icon512_rounded.png"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <div className="w-[96px]">
        <Button>
          <LeftArrow />
          <span>text</span>
        </Button>
      </div>
    </div>
  );
}
