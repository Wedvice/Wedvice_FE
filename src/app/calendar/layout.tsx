import { PropsWithChildren } from 'react';

const CalendarLayout = ({ children }: PropsWithChildren) => {
  return <main className='h-full w-full'>{children}</main>;
};

export default CalendarLayout;
