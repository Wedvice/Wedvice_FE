import { PropsWithChildren } from 'react';

const ListLayout = ({ children }: PropsWithChildren) => {
  return <main className='h-full w-full'>{children}</main>;
};

export default ListLayout;
