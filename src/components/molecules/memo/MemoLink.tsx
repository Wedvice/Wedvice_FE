'use client';

import HeartIcon from '@/assets/wed_icon/icon_40/icon_heart.svg';
import { BottomSheet } from '@/components/atoms/bottomSheet';
import { Button } from '@/components/atoms/button';
import { Profile } from '@/components/atoms/profile/Profile';
import useMemoContext from '@/contexts/memo/MemoContext';
import { Memo } from '@/features/memo/component/Memo';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const BOTTOM_SHEET_HEIGHT = 224;
type RoleType = '예신' | '예랑';

export const MemoLink = () => {
  const username = 'test';
  const router = useRouter();
  const { setMemoText } = useMemoContext();

  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<RoleType | null>(null);

  const handleNavigate = () => {
    if (!selectedRole) {
      return;
    }
    router.push(`/memo/${username}?role=${selectedRole}`);
  };

  const handleOpen = (role: RoleType) => {
    setSelectedRole(role);
    setOpen(true);
  };

  const MemoProfile = ({ role }: { role: RoleType }) => (
    <div className='flex flex-col items-center'>
      <Profile size='medium' />
      <div onClick={() => handleOpen(role)} className='mt-3'>
        <Memo size='small' />
      </div>
    </div>
  );

  return (
    <>
      <div className='mt-14 flex items-center justify-center gap-x-[27.5px]'>
        <MemoProfile role='예신' />
        <HeartIcon />
        <MemoProfile role='예랑' />
      </div>
      <BottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        snapPoints={({ maxHeight }) => [BOTTOM_SHEET_HEIGHT, maxHeight]}
        defaultSnap={() => BOTTOM_SHEET_HEIGHT}
      >
        <div className='mt-5 flex h-full flex-col items-center justify-center gap-5'>
          <Button
            onClick={handleNavigate}
            variant={'primary_fill'}
            size='lg'
            width='register'
          >
            새 메모 남기기
          </Button>
          <Button
            onClick={() => setMemoText('')}
            variant={'gray_fill'}
            size='lg'
            width='register'
          >
            메모 삭제하기
          </Button>
        </div>
      </BottomSheet>
    </>
  );
};

export default MemoLink;
