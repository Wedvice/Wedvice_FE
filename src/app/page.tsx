import { Button } from '@/components/atoms/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col border-[3px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Image
        src="/icon512_rounded.png"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <Button>simple button</Button>
    </div>
  );
}
